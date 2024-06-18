import { type Request, type Response, type NextFunction } from "express";
import { productOdm } from "../odm/product.odm";

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

export const prductService = {
  getProducts
};
