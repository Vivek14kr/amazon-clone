import React from "react";
import "./Order.css";

import{ CheckoutProduct} from "../CheckoutProduct/CheckoutProduct";

export const Order = ({ order }) => {
  console.log(order, "dfdfd ");
  return (
    <div className="order">
      <p className="order-id">
        <small>{order.id}</small>
      </p>
      <CheckoutProduct
        key={order.id}
        id={order.id}
        title={order.title}
        image={order.image}
        price={order.price}
        rating={order.rating}
        hideButton
      />
    </div>
  );
};

