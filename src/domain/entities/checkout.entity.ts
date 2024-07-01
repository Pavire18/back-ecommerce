import mongoose, { Document, Schema } from "mongoose";
import validator from "validator";

enum PaymentGateway {
  BRAINTREE = "braintree",
  STRIPE = "stripe",
}

enum Country {
  SPAIN = "SPA",
  FRANCE = "FRA",
}

interface ICheckout extends Document {
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
  externalTransactionId: string;
  orderNumber: string;
  productList: [{
    sku: string;
    price: number;
    quantity: number;
    title: string;
    totalPrice: number;
  }];
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
    externalTransactionId: { type: String, required: true },
    orderNumber: { type: String, required: true },
    productList: [
      {
        sku: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
        title: { type: String, required: true },
        totalPrice: { type: Number, required: true },
      },
    ],
  },
  { timestamps: true }
);

export const Checkout = mongoose.model<ICheckout>("Checkout", checkoutSchema);
