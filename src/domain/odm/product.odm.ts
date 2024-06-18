import { Product } from "../entities/product-entity";

const getAllProducts = async (page: number, limit: number): Promise<any> => {
  return await Product.find()
    .limit(limit)
    .skip((page - 1) * limit).populate("category");
}
const getProductsCount = async (): Promise<number> => {
  return await Product.countDocuments();
};

export const productOdm = {
  getAllProducts,
  getProductsCount
}
