export type Product = {
    name: string;
    id:number;
    image: string;
    price: number;
    quantity: number,
    description:string,
}

export type CartValue = {
    product: Product[];
}

export const EMPTY_CART = {products:[]}; 

const cartKey = (email = "") => `cart-product-${email || ""}`;

export const getCartValue = (email = "") => {
    const cartDataStr = localStorage.getItem(cartKey(email));
    return cartDataStr && email ?(JSON.parse(cartDataStr) as CartValue) :{...EMPTY_CART};
}

export const CART_DEFAULT = getCartValue();

export const saveCartProducts = (cart:CartValue, email) => {
    localStorage.setItem(cartKey(email), JSON.stringify(cart));
}

