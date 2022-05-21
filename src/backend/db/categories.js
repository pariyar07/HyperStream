import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Comebacks",
    thumbnail: "assets/categories/comebacks.jpeg"
  },
  {
    _id: uuid(),
    categoryName: "Skills",
    thumbnail: "assets/categories/skills.jpeg"
  },
  {
    _id: uuid(),
    categoryName: "Goals",
    thumbnail: "assets/categories/goals.jpeg"
  },
  {
    _id: uuid(),
    categoryName: "Celebrations",
    thumbnail: "assets/categories/celebration.jpeg"
  },
  {
    _id: uuid(),
    categoryName: "Champions League",
    thumbnail: "assets/categories/ucl.jpeg"
  },
  {
    _id: uuid(),
    categoryName: "Premier League",
    thumbnail: "assets/categories/pl.jpeg"
  },
];
