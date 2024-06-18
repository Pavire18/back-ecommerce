import express from "express";
import { prductService } from "../domain/services/product.service";

export const productRouter = express.Router();

productRouter.get("/", prductService.getProducts);
