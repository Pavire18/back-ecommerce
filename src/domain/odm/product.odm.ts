import { Product } from "../entities/product-entity";

const getAllProducts = async (page: number, limit: number): Promise<any> => {
  return await Product.find()
    .limit(limit)
    .skip((page - 1) * limit).populate("category");
}
const getProductsCount = async (): Promise<number> => {
  return await Product.countDocuments();
};
const getFeaturedProductsCount = async (): Promise<number> => {
  return await Product.countDocuments({ featured: true });
};

const getProductsByCategoryCount = async (categoryId: string): Promise<number> => {
  return await Product.countDocuments({ category: categoryId });
};

const getProductsByCategory = async (page: number, limit: number, categoryId: string): Promise<any> => {
  return await Product.find({ category: categoryId })
    .limit(limit)
    .skip((page - 1) * limit).populate("category");
};

const getProductBySku = async (skuId: string): Promise<any> => {
  return await Product.find({ skus: skuId }).populate("category");
};

const getFeaturedProducts = async (page: number, limit: number): Promise<any> => {
  return await Product.find({ featured: true })
    .limit(limit)
    .skip((page - 1) * limit).populate("category");
};

export const getProductById = async (id: string): Promise<any> => {
  return await Product.findById(id).populate("category");
};

export const productOdm = {
  getAllProducts,
  getProductsCount,
  getProductsByCategory,
  getProductById,
  getFeaturedProducts,
  getFeaturedProductsCount,
  getProductBySku,
  getProductsByCategoryCount
}
