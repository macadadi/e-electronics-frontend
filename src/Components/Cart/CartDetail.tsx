import { useState, useEffect } from "react";
import { Iproduct } from "../productpage/Productdetail";
import CartTable from "./CartTable";

const CartDetail = () => {
  let cart = localStorage.getItem("car");
  const [cartItem, setCartItem] = useState<Iproduct[]>();
  useEffect(() => {
    cart = localStorage.getItem("car");
    if (cart) {
      setCartItem(JSON.parse(cart));
    }
  }, [cart]);

  return (
    <div>
      {!cartItem ? <h1>Cart is Empty </h1> : <CartTable card={cartItem} />}
    </div>
  );
};

export default CartDetail;
