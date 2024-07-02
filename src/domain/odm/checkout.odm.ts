/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Document } from "mongoose";
import { Checkout, ICheckout } from "../entities/checkout.entity";

const createCheckOut = async (checkoutData: any): Promise<Document<ICheckout>> => {
  const checkout = new Checkout(checkoutData);
  const document: Document<ICheckout> = (await checkout.save()) as any;

  return document;
};

const updateCheckOut = async (id: string, checkoutData: any): Promise<Document<ICheckout> | null> => {
  return await Checkout.findByIdAndUpdate(id, checkoutData, { new: true, runValidators: true });
};

const getCheckOutById = async (id: string): Promise<Document<ICheckout> | null> => {
  return await Checkout.findById(id);
};

export const checkoutOdm = {
  createCheckOut,
  updateCheckOut,
  getCheckOutById
}
