import mongoose, { ObjectId } from "mongoose";

export interface ICategory {
  name: Record<string, string>;
  parentCategory: ObjectId | null;
}

const categorySchema = new mongoose.Schema<ICategory>(
  {
    name: {
      type: Map,
      of: String,
      required: true
    },
    parentCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: false
    }
  },
  {
    timestamps: true,
  }
);

export const Category = mongoose.model<ICategory>("Category", categorySchema);
