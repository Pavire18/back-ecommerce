import express from "express";
import { prductService } from "../domain/services/product.service";

export const productRouter = express.Router();

productRouter.get("/", prductService.getProducts);
productRouter.get("/featured", prductService.getFeaturedProducts);
productRouter.get("/category/:categoryId", prductService.getProductsByCategory);
productRouter.get("/:id", prductService.getProductById);
productRouter.get("/sku/:skuId", prductService.getProductBySku);
