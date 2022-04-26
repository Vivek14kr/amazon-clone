import { useEffect, useState } from "react";

import { headerItems, products } from "../../utils/ProductsData";
import React from "react";
import {addProduct} from "../../redux/actions"
import SearchIcon from "@material-ui/icons/Search";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOutInitiate } from "../../redux/actions";

import "./Productlist.css";

export const Productlist = () => {
  let [trackdata, settrackData] = useState([]);


  useEffect(() => {
    fetchData1();
  }, []);
  const { user, basket, productss } = useSelector((state) => state.regState);
  console.log(basket, " data is  there");
  let dispatch = useDispatch();

  const fetchData1 = async () => {
    var baseURL = `https://dataitems.herokuapp.com/products`;
    await fetch(baseURL)
      .then((resp) => resp.json())
      .then((dataa) => {

        dispatch(addProduct(dataa.products))
        
      });
  };
  console.log(productss)

  const handleSort = async (e) => {
    e.preventDefault();
    var baseURL = `https://dataitems.herokuapp.com/products`;
    await fetch(baseURL)
      .then((resp) => resp.json())
      .then((dataa) => {
        let k = dataa.products.filter((item) => item.category === e.target.value);
           dispatch(addProduct(k));
      });
  };

  const handleSorthtol = async () => {
    var baseURL = `https://dataitems.herokuapp.com/products`;
    await fetch(baseURL)
      .then((resp) => resp.json())
      .then((dataa) => {
        let k = dataa.products.sort(function (a, b) {
          if (a.price < b.price) {
            return -1;
          }
          if (a.price > b.price) {
            return 1;
          }
          return 0;
        });
         dispatch(addProduct(k));
      });
  };

  const handleSortltoh = async () => {
    var baseURL = `https://dataitems.herokuapp.com/products`;
    await fetch(baseURL)
      .then((resp) => resp.json())
      .then((dataa) => {
        let k = dataa.products.sort(function (a, b) {
          if (a.price > b.price) {
            return -1;
          }
          if (a.price < b.price) {
            return 1;
          }
          return 0;
        });
         dispatch(addProduct(k));
      });
  };
  const handlePrice = (val) => {};
  return (
    <div id="prodbody">
      <div>
        <h1>Department</h1>
        <select
          name="cars"
          id="cars"
          onChange={(e) => {
            handleSort(e);
          }}
        >
          <option>Category</option>
          <option value="Electronics">Electronics</option>
          <option value="Furniture">Furniture</option>
          <option value="HomeAppliance">Home Appliance</option>
        </select>
        {/* <h1>Price Range</h1>
        <select onClick={(e) =>{
          handlePrice(e.target.value)
        }}>
          <option value="morethan">
            More Than 20000
          </option>
          <option value="lessthan">
            Less Than 20000
          </option>
        </select> */}

        <h1>Sorting</h1>
        <button onClick={handleSortltoh}>Sort High To Low</button>
        <button onClick={handleSorthtol}>Sort Low To High</button>
      </div>
      <div className="itembox">
        {productss.map((item) => (
          <div className="boxstyle">
            <img src={item.img} alt="" className="imgstyle" srcset="" />
            <p> {item.name}</p>
            <p>₹ {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
