import mongoose from "mongoose";
import { mongoConnect } from "../repositories/mongo-repository";
import { Product } from "../entities/product-entity";
import { productos } from "./product.data";
import { Category } from "../entities/category.entity";
import { categories, categoryKids, categoryMen, categoryWomen } from "./category.data";

const randomNumber = (max: number, min: number): number => {
  const number = Math.floor(Math.random() * (max - min)) + min;
  return number;
};

async function populateBBDD(): Promise<void> {
  try {
    await mongoConnect();
    console.log("Tenemos conexión");

    // BORRADO DE DATOS
    await Product.collection.drop();
    await Category.collection.drop();

    let categoryDocuments = categories.map((category) => new Category(category));
    await categoryKids.save();
    await categoryMen.save();
    await categoryWomen.save();
    await Category.insertMany(categoryDocuments);
    categoryDocuments = [...categoryDocuments, categoryKids, categoryMen, categoryWomen]

    // PRODUCTOS EJEMPLO
    const productDocuments = productos.map((product) => new Product(product));
    for (let i = 0; i < productDocuments.length; i++) {
      const product = productDocuments[i];
      product.category = categoryDocuments[randomNumber(categoryDocuments.length, 0)].id
      await product.save();
    }

    console.log("Datos guardados correctamente!");
  } catch (error) {
    console.error(error);
  } finally {
    await mongoose.disconnect();
  }
}

void populateBBDD();
