import express from "express";
import { categoryService } from "../domain/services/category.service";

export const categoryRouter = express.Router();

categoryRouter.get("/", categoryService.getCategories);
categoryRouter.get("/:id", categoryService.getCategory);
