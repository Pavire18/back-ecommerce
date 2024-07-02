import { type Request, type Response, type NextFunction } from "express";
import { checkoutOdm } from "../odm/checkout.odm";


export const createCheckOut = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const createdCheckOut = await checkoutOdm.createCheckOut(req.body);
    res.status(201).json(createdCheckOut);
  } catch (error) {
    next(error);
  }
};


export const getCheckOutById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = req.params.id;
    const checkout = await checkoutOdm.getCheckOutById(id);

    if (checkout) {
      res.json(checkout);
    } else {
      res.status(404).json({});
    }
  } catch (error) {
    next(error);
  }
};

export const updateCheckOut = async (req: any, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = req.params.id;

    const checkoutToUpdate = await checkoutOdm.getCheckOutById(id);
    if (checkoutToUpdate) {
      Object.assign(checkoutToUpdate, req.body);
      const checkoutUpdated = await checkoutToUpdate.save();
      res.json(checkoutUpdated);
    } else {
      res.status(404).json({});
    }
  } catch (error) {
    next(error);
  }
};

export const checkOutService = {
  createCheckOut,
  getCheckOutById,
  updateCheckOut
};
