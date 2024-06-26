import { Category, ICategory } from "../entities/category.entity";

export const categoryMen = new Category({ name: { es: "Hombre", en: "Men" }, parentCategory: null });
export const categoryKids = new Category({ name: { es: "Infantil", en: "Kids" }, parentCategory: null });
export const categoryWomen = new Category({ name: { es: "Mujer", en: "Women" }, parentCategory: null });

export const categories: ICategory[] = [
  { name: { es: "Casual", en: "Casual" }, parentCategory: categoryMen.id },
  { name: { es: "Mocasines", en: "Loafers" }, parentCategory: categoryMen.id },
  { name: { es: "Formal", en: "Formal" }, parentCategory: categoryMen.id },
  { name: { es: "Exterior", en: "Outdoor" }, parentCategory: categoryMen.id },
  { name: { es: "Náuticos", en: "Boat Shoes" }, parentCategory: categoryKids.id },
  { name: { es: "Deportes", en: "Sports" }, parentCategory: categoryKids.id },
  { name: { es: "Velcro", en: "Velcro" }, parentCategory: categoryKids.id },
  { name: { es: "Sandalias", en: "Sandals" }, parentCategory: categoryKids.id },
  { name: { es: "Tacon", en: "Heels" }, parentCategory: categoryWomen.id },
  { name: { es: "Alpargatas", en: "Espadrilles" }, parentCategory: categoryWomen.id },
  { name: { es: "Para vestir", en: "Dress Shoes" }, parentCategory: categoryWomen.id },
  { name: { es: "Zapatillas", en: "Sneakers" }, parentCategory: categoryWomen.id }
]
