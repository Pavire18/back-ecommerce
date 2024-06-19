import {Category, ICategory } from "../entities/category.entity";

const categoryMen = new Category({name: {es: "Hombre", en: "Men"}, parentCategory: null});
const categoryKids = new Category({name: {es: "Infantil", en: "Kids"}, parentCategory: null});
const categoryWomen = new Category({name: {es: "Mujer", en: "Women"}, parentCategory: null});

export const categories: ICategory[] = [
    {name: {es: "Infantil", en: "Kids"}, parentCategory: null},
    {name: {es: "Mujer", en: "Women"}, parentCategory: null},
    {name: {es: "Hombre", en: "Men"}, parentCategory: null},
    {name: {es: "Casual", en: "Casual"}, parentCategory: categoryMen.id},
    {name: {es: "Deporte", en: "Sports"}, parentCategory: categoryMen.id},
    {name: {es: "Formal", en: "Formal"}, parentCategory: categoryMen.id},
    {name: {es: "Exterior", en: "Outdoor"}, parentCategory: categoryMen.id},
    {name: {es: "Casual", en: "Casual"}, parentCategory: categoryKids.id},
    {name: {es: "Deporte", en: "Sports"}, parentCategory: categoryKids.id},
    {name: {es: "Formal", en: "Formal"}, parentCategory: categoryKids.id},
    {name: {es: "Exterior", en: "Outdoor"}, parentCategory: categoryKids.id},
    {name: {es: "Casual", en: "Casual"}, parentCategory: categoryWomen.id},
    {name: {es: "Deporte", en: "Sports"}, parentCategory: categoryWomen.id},
    {name: {es: "Formal", en: "Formal"}, parentCategory: categoryWomen.id},
    {name: {es: "Exterior", en: "Outdoor"}, parentCategory: categoryWomen.id}
]