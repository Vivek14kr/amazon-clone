import React, { useEffect, useState } from "react";
import "./Orders.css";
import { db } from "../../utils/firebase";
import {Order} from "../../components/Order/Order";
import { useSelector } from "react-redux";
import CurrencyFormat from "react-currency-format";

export const Orders = () => {
   const { user, basket } = useSelector((state) => state.regState);
  const [orders, setOrders] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let newprice = 0;
    basket.map((item) => {
      newprice += item.price;
      setTotal(newprice);
    });
  }, []);

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders-order">
        {basket &&
          basket.map((order, index) => <Order order={order} key={index} />)}
      </div>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <b>Thank you for shopping</b>
            <h3 className="order-total">Order Total: {value}</h3>
          </>
        )}
        decimalScale={2}
        value={total}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      ;
    </div>
  );
};

