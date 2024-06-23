import { type Request, type Response, type NextFunction } from "express";
import { categorieOdm } from "../odm/category.odm";
import { Types } from 'mongoose';
import { Category, ICategory } from "../entities/category.entity";
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
  const id = req.params.id;

  try {
    const categories = await categorieOdm.getChildenCategories(id);
    if (categories?.length) {
      res.json(categories);
    } else {
      res.status(404).json({ message: "categories not found" });
    }
  } catch (error) {
    next(error);
  }
};

export const categoryService = {
  getCategory,
  getCategories,
  getChildenCategories
};
