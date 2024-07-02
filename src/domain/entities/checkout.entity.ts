import mongoose, { Document, Schema } from "mongoose";
import validator from "validator";
import { Country } from "./countries.enum";

enum PaymentGateway {
  BRAINTREE = "braintree",
  STRIPE = "stripe",
}

export interface ICheckout extends Document {
  firstName: string;
  lastName: string;
  secondLastName: string;
  address: string;
  postalCode: string;
  country: Country;
  locality: string;
  province: string;
  phone: string;
  email: string;
  price: number;
  paymentMethod: PaymentGateway;
  externalTransactionId?: string;
  orderNumber: number;
  productList: {
    sku: string;
    price: number;
    quantity: number;
    title: string;
    totalPrice: number;
  }[];
  cardHolderName: string;
  card: string;
  cardCVV: string;
  cardExpirationDate: string;
}

const checkoutSchema = new Schema<ICheckout>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    secondLastName: { type: String, required: true },
    address: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, enum: Object.values(Country), required: true },
    locality: { type: String, required: true },
    province: { type: String, required: true },
    phone: { type: String, required: true, validate: [validator.isMobilePhone, "Invalid phone number"] },
    email: { type: String, required: true, unique: true, validate: [validator.isEmail, "Invalid email address"] },
    price: { type: Number, required: true },
    paymentMethod: { type: String, enum: Object.values(PaymentGateway), required: true },
    externalTransactionId: { type: String, required: false },
    orderNumber: { type: Number },
    productList: [
      {
        sku: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
        title: { type: String, required: true },
        totalPrice: { type: Number, required: true },
      },
    ],
    cardHolderName: { type: String, required: false },
    card: { type: String, required: false },
    cardCVV: { type: String, required: false },
    cardExpirationDate: { type: String, required: false },
  },
  { timestamps: true }
);

export const Checkout = mongoose.model<ICheckout>("Checkout", checkoutSchema);
