import { Product } from "./cart";

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Wooden bed",
    image: "./src/assets/bed.jpg",
  },
  {
    id: 2,
    name: "computer Table",
    image: "./src/assets/computerTable.jpg",
  },
  {
    id: 3,
    name: "Dining Table",
    image: "./src/assets/diningTable.jpg",
  },
  {
    id: 4,
    name: "Dressing table",
    image: "./src/assets/dressing table.jpg",
  },
  {
    id: 5,
    name: "Centre Table",
    image: "./src/assets/simpleCentreTable.jpg",
  },
  {
    id: 6,
    name: "Sofa Set",
    image: "./src/assets/SofaSet.jpg",
  },
  {
    id: 7,
    name: "Chair",
    image: "./src/assets/woodenChair.jpg",
  },
  {
    id: 8,
    name: "Door",
    image: "./src/assets/woodenDoor.jpg",
  },
];

export const getProducts = () => {
  return PRODUCTS;
};
