import { Product } from "./cart";
import bedImg from "../src/assets/bed.jpg";
import computerTableImg from "../src/assets/computerTable.jpg";
import diningTableImg from "../src/assets/diningTable.jpg";
import dressingtableImg from "../src/assets/dressing table.jpg";
import simpleCentreTableImg from "../src/assets/simpleCentreTable.jpg";
import SofaSetImg from "../src/assets/SofaSet.jpg";
import woodenChairImg from "../src/assets/woodenChair.jpg";
import woodenDoorImg from "../src/assets/woodenDoor.jpg";

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Wooden bed",
    image: bedImg,
  },
  {
    id: 2,
    name: "computer Table",
    image: computerTableImg,
  },
  {
    id: 3,
    name: "Dining Table",
    image: diningTableImg,
  },
  {
    id: 4,
    name: "Dressing table",
    image: dressingtableImg,
  },
  {
    id: 5,
    name: "Centre Table",
    image: simpleCentreTableImg,
  },
  {
    id: 6,
    name: "Sofa Set",
    image: SofaSetImg,
  },
  {
    id: 7,
    name: "Chair",
    image: woodenChairImg,
  },
  {
    id: 8,
    name: "Door",
    image: woodenDoorImg,
  },
];

// JSON.parse(localStorage.getItem("products") || "[]");
export const getProducts = () => {
  return PRODUCTS;
};
