import mongoose from "mongoose";
import { mongoConnect } from "../repositories/mongo-repository";
import { Product } from "../entities/product-entity";
import { productos } from "./product.data";
import { Category } from "../entities/category.entity";
import { categories } from "./category.data";

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

    const categoryDocuments = categories.map((category) => new Category(category));
    await Category.insertMany(categoryDocuments);
    
    // PRODUCTOS EJEMPLO
    const productDocuments = productos.map((product) => new Product(product));
    for (let i = 0; i < productDocuments.length; i++) {
      const product = productDocuments[i];
      product.category= categoryDocuments[randomNumber(categoryDocuments.length, 0)].id
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
