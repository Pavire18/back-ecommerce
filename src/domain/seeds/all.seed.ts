import mongoose from "mongoose";
import { mongoConnect } from "../repositories/mongo-repository";
import { IProduct, Product } from "../entities/product-entity";

async function populateBBDD(): Promise<void> {
  try {
    await mongoConnect();
    console.log("Tenemos conexión");

    // BORRADO DE DATOS
    await Product.collection.drop();
    // PRODUCTO EJEMPLO
    const producto: IProduct = {
      "image": "https://example.com/image.jpg",
      "title": {
        "es": "Nike Air",
        "en": "Nike Air"
      },
      "description": {
        "es": "Zapatillas deportivas Nike Air",
        "en": "Nike Air sports shoes"
      },
      "price": {
        "EUR": 120,
        "DOLLAR": 150
      },
      "sku": {
        "23131231": {
          color: "rojo",
          size: 40,
          image: "https://example.com/red_shoe.jpg",
          stock: 10
        },
        "41424141": {
          color: "azul",
          size: 42,
          image: "https://example.com/blue_shoe.jpg",
          stock: 5
        }
      },
      "stock": 15,
      "famous": true
    }
    const finalProduct = new Product(producto);
    await finalProduct.save();

    console.log("Datos guardados correctamente!");
  } catch (error) {
    console.error(error);
  } finally {
    await mongoose.disconnect();
  }
}

void populateBBDD();
