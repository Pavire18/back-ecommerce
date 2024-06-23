import { type Request, type Response, type NextFunction } from "express";
import { categorieOdm } from "../odm/category.odm";
import { Types } from "mongoose";
const { ObjectId } = Types;

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

export const getChildenCategories = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {

    const categories = await categorieOdm.getAllCategories();
    const childrenCategories = categories.filter(categorie => categorie?.parentCategory?.toString() === req.params.id);
    if (!childrenCategories) {
      res.status(404).json({ message: "Category not found" });
      return;
    }
    res.json(childrenCategories);
  } catch (error) {
    next(error);
  }
};

export const categoryService = {
  getCategory,
  getCategories,
  getChildenCategories
};
