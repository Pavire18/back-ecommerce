/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Category } from "../entities/category.entity";

export const getCategoryById = async (id: string) => {
  return await Category.findById(id).populate("parentCategory");
};

export const getAllCategories = async () => {
  return await Category.find().populate("parentCategory");
};

export const categorieOdm = {
  getCategoryById,
  getAllCategories
}
