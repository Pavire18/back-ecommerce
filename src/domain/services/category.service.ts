import { type Request, type Response, type NextFunction } from "express";
import { getCategoryById, getAllCategories, categorieOdm } from "../odm/category.odm";

export const getCategory = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const category = await categorieOdm.getCategoryById(req.params.id);
    if (!category) {
      res.status(404).json({ message: "Category not found" });
      return;
    }
    res.json(category);
  } catch (error) {
    next(error);
  }
};

export const getCategories = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const categories = await categorieOdm.getAllCategories();
    res.json(categories);
  } catch (error) {
    next(error);
  }
};

export const categoryService = {
  getCategory,
  getCategories
};
