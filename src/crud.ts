import { Product } from "./cart";

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Wooden bed",
    image: "/img/bed.jpg",
  },
  {
    id: 2,
    name: "computer Table",
    image: "/img/computerTable.jpg",
  },
  {
    id: 3,
    name: "Dining Table",
    image: "/img/diningTable.jpg",
  },
  {
    id: 4,
    name: "Dressing table",
    image: "/img/dressing table.jpg",
  },
  {
    id: 5,
    name: "Centre Table",
    image: "/img/simpleCentreTable.jpg",
  },
  {
    id: 6,
    name: "Sofa Set",
    image: "/img/SofaSet.jpg",
  },
  {
    id: 7,
    name: "Chair",
    image: "/img/woodenChair.jpg",
  },
  {
    id: 8,
    name: "Door",
    image: "/img/woodenDoor.jpg",
  },
];

// JSON.parse(localStorage.getItem("products") || "[]");
export const getProducts = () => {
  return PRODUCTS;
};
