import { Product } from "./cart";

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Wooden bed",
    image: "/img/bed.jpg",
    price: 299.99,
    quantity: 1,
    description: "Premium quality wooden bed with comfortable mattress support",
  },
  {
    id: 2,
    name: "Computer Table",
    image: "/img/computerTable.jpg",
    price: 149.99,
    quantity: 1,
    description: "Ergonomic computer table with cable management",
  },
  {
    id: 3,
    name: "Dining Table",
    image: "/img/diningTable.jpg",
    price: 399.99,
    quantity: 1,
    description: "6-seater solid wood dining table with extendable leaves",
  },
  {
    id: 4,
    name: "Dressing table",
    image: "/img/dressing table.jpg",
    price: 179.99,
    quantity: 1,
    description: "Elegant dressing table with mirror and storage drawers",
  },
  {
    id: 5,
    name: "Centre Table",
    image: "/img/simpleCentreTable.jpg",
    price: 129.99,
    quantity: 1,
    description: "Modern center table with tempered glass top",
  },
  {
    id: 6,
    name: "Sofa Set",
    image: "/img/SofaSet.jpg",
    price: 899.99,
    quantity: 1,
    description: "3-piece luxury sofa set with premium upholstery",
  },
  {
    id: 7,
    name: "Chair",
    image: "/img/woodenChair.jpg",
    price: 89.99,
    quantity: 1,
    description: "Handcrafted wooden chair with cushioned seat",
  },
  {
    id: 8,
    name: "Door",
    image: "/img/woodenDoor.jpg",
    price: 249.99,
    quantity: 1,
    description: "Solid wood interior door with premium finish",
  },
];

export const getProducts = () => {
  return PRODUCTS;
};
