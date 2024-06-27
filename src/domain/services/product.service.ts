import { type Request, type Response, type NextFunction } from "express";
import { productOdm } from "../odm/product.odm";

export const getProducts = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const page = req.query.page ? parseInt(req.query.page as string) : 1;
    const limit = req.query.limit ? parseInt(req.query.limit as string) : 10;

    const products = await productOdm.getAllProducts(page, limit);

    const totalElements = await productOdm.getProductsCount();

    const response = {
      totalItems: totalElements,
      totalPages: Math.ceil(totalElements / limit),
      currentPage: page,
      data: products,
    };

    res.json(response);
  } catch (error) {
    next(error);
  }
};

export const getProductsByCategory = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const categoryId = req.params.categoryId;
    const page = req.query.page ? parseInt(req.query.page as string) : 1;
    const limit = req.query.limit ? parseInt(req.query.limit as string) : 10;

    const products = await productOdm.getProductsByCategory(page, limit, categoryId);

    const totalElements = await productOdm.getProductsByCategoryCount(categoryId);

    const response = {
      totalItems: totalElements,
      totalPages: Math.ceil(totalElements / limit),
      currentPage: page,
      data: products,
    };

    res.json(response);
  } catch (error) {
    next(error);
  }
};

export const getProductBySku = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const skuId = req.params.skuId.toString();

  try {
    const products = await productOdm.getProductBySku(skuId);
    if (products?.length) {
      res.json(products);
    } else {
      res.status(404).json({ message: "Products not found" });
    }
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const product = await productOdm.getProductById(req.params.id);
    if (!product) {
      res.status(404).json({ message: "Product not found" });
      return;
    }
    res.json(product);
  } catch (error) {
    next(error);
  }
};

export const getFeaturedProducts = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const page = req.query.page ? parseInt(req.query.page as string) : 1;
    const limit = req.query.limit ? parseInt(req.query.limit as string) : 10;

    const products = await productOdm.getFeaturedProducts(page, limit);

    const totalElements = await productOdm.getFeaturedProductsCount();

    const response = {
      totalItems: totalElements,
      totalPages: Math.ceil(totalElements / limit),
      currentPage: page,
      data: products,
    };

    res.json(response);
  } catch (error) {
    next(error);
  }
};

export const prductService = {
  getProducts,
  getProductsByCategory,
  getProductById,
  getFeaturedProducts,
  getProductBySku
};
