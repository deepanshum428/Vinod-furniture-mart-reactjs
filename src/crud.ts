import { Product } from "./cart";

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Wooden bed",
    image: "/img/bed.jpg",
    price: 19999.99,
    quantity: 1,
    description: "Premium quality wooden bed with comfortable mattress support",
  },
  {
    id: 2,
    name: "Computer Table",
    image: "/img/computerTable.jpg",
    price: 3999.99,
    quantity: 1,
    description: "Ergonomic computer table with cable management",
  },
  {
    id: 3,
    name: "Dining Table",
    image: "/img/diningTable.jpg",
    price: 15999.99,
    quantity: 1,
    description: "6-seater solid wood dining table with extendable leaves",
  },
  {
    id: 4,
    name: "Dressing Table",
    image: "/img/dressing table.jpg",
    price: 9999.99,
    quantity: 1,
    description: "Elegant dressing table with mirror and storage drawers",
  },
  {
    id: 5,
    name: "Centre Table",
    image: "/img/simpleCentreTable.jpg",
    price: 1999.99,
    quantity: 1,
    description: "Modern center table with tempered glass top",
  },
  {
    id: 6,
    name: "Sofa Set",
    image: "/img/SofaSet.jpg",
    price: 17999.99,
    quantity: 1,
    description: "3-piece luxury sofa set with premium upholstery",
  },
  {
    id: 7,
    name: "Chair",
    image: "/img/woodenChair.jpg",
    price: 2999.99,
    quantity: 1,
    description: "Handcrafted wooden chair with cushioned seat",
  },
  {
    id: 8,
    name: "Door",
    image: "/img/woodenDoor.jpg",
    price: 2999.99,
    quantity: 1,
    description: "Solid wood interior door with premium finish",
  },
  {
    id: 9,
    name: "Baby Cradle Palna",
    image: "/img/babyCradlePalna.jpg",
    price: 2599.99,
    quantity: 1,
    description:
      "Sturdy, handcrafted wooden baby cradle with gentle rocking motion.",
  },
];

export const getProducts = () => {
  return PRODUCTS;
};

export const addProduct = async (product) => {
  // In a real app, this would be an API call to your backend
  // For now, we'll simulate it with localStorage

  // Get existing products
  const existingProducts = JSON.parse(localStorage.getItem("products") || "[]");

  // Create new product with ID
  const newProduct = {
    ...product,
    id: Date.now().toString(), // Simple ID generation
  };

  // Add to array
  const updatedProducts = [...existingProducts, newProduct];

  // Save back to localStorage
  localStorage.setItem("products", JSON.stringify(updatedProducts));

  return newProduct;
};
