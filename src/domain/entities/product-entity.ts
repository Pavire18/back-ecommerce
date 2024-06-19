import mongoose, { ObjectId } from "mongoose";
const Schema = mongoose.Schema;

// Definir el esquema de detalles del SKU
const skuDetailsSchema = new Schema(
  {
    color: { type: String, required: true },
    size: { type: Number, required: true },
    image: { type: String, required: true },
    stock: { type: Number, required: true },
  },
  { _id: false }
);

export interface IProduct {
  title: Record<string, string>;
  description: Record<string, string>;
  price: Record<string, number>;
  sku: Record<string, { color: string; size: number; image: string; stock: number; }>;
  stock: number;
  category?: ObjectId;
  featured: boolean;
  image: string;
  imageSmall: string;
}

const productSchema = new Schema<IProduct>(
  {
    title: {
      type: Map,
      of: String,
      required: true,
    },
    description: {
      type: Map,
      of: String,
      required: true,
    },
    price: {
      type: Map,
      of: Number,
      required: true,
    },
    sku: {
      type: Map,
      of: skuDetailsSchema,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    image: {
      type: String,
      required: true,
    },
    imageSmall: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Product = mongoose.model<IProduct>("Product", productSchema);
