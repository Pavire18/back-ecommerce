import { type Request, type Response, type NextFunction } from "express";
import { productOdm } from "../odm/product.odm";
import { IProduct } from "../entities/product-entity";

export const getProducts = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    // Ternario que se queda con el parametro si llega
    const page = req.query.page ? parseInt(req.query.page as string) : 1;
    const limit = req.query.limit ? parseInt(req.query.limit as string) : 10;

    const users = await productOdm.getAllProducts(page, limit);

    // Num total de elementos
    const totalElements = await productOdm.getProductsCount();

    const response = {
      totalItems: totalElements,
      totalPages: Math.ceil(totalElements / limit),
      currentPage: page,
      data: users,
    };

    res.json(response);
  } catch (error) {
    next(error);
  }
};

export const getProductsByCategory = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const categoryId = req.params.categoryId;

  try {
    const products = await productOdm.getProductsByCategory(categoryId);
    if (products?.length) {
      res.json(products);
    } else {
      res.status(404).json({ message: "Products not found" });
    }
  } catch (error) {
    next(error);
  }
};

export const getProductBySku = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const skuId = req.params.skuId.toString();

  try {
    const products: IProduct[] = await productOdm.getAllProducts(1, 0);
    const filteredProducts = products.filter((product) => {
      const skuKeys = Object.keys(JSON.parse(JSON.stringify(product.sku)));
      if (skuKeys.includes(skuId)) {
        return product;
      }
      return null;
    });

    if (filteredProducts?.length) {
      res.json(filteredProducts);
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
    // Ternario que se queda con el parametro si llega
    const page = req.query.page ? parseInt(req.query.page as string) : 1;
    const limit = req.query.limit ? parseInt(req.query.limit as string) : 10;

    const users = await productOdm.getFeaturedProducts(page, limit);

    // Num total de elementos
    const totalElements = await productOdm.getFeaturedProductsCount();

    const response = {
      totalItems: totalElements,
      totalPages: Math.ceil(totalElements / limit),
      currentPage: page,
      data: users,
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
  getProductBySku,
  getFeaturedProducts
};
