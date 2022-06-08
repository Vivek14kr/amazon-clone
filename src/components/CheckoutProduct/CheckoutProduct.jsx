import React from "react";
import "./CheckoutProduct.css";
import { useDispatch } from "react-redux";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { removeFromBasket } from "../../redux/actions";

export const CheckoutProduct = ({ id, title, image, rating, price, hideButton }) => {
  let dispatch = useDispatch();

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket(id));
  };

  return (
    <div className="checkout-product">
  
    </div>
  );
};

