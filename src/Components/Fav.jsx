import { Link } from "react-router-dom";
import { useContext, useState } from "react";

import { useNavigate, useLocation } from "react-router-dom";

import { AuthContext } from "../Contexts/AuthContext";

import "./Home.css";
export const Fav = () => {
   const { handleChange, form, setForm } = useContext(AuthContext);
   const navigate = useNavigate();
    const addTodo = () => {

      let {state, address, pincode} = form
    if (state == undefined || address == undefined || pincode == undefined || pincode.toString().length != 6) {
      alert("Please Write all Fields Correctly");
   
      navigate("/registration/two");
      return;
    }
   
     fetch("http://localhost:8000/forminfo", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(form),
     })
       .then((d) => d.json())
       .then((res) => {
         //success
         console.log(res)
       })
       .catch((err) => {
         console.log(err)
       });

       navigate("/Users")
       return;
   };
  return (
    <div className="firstform">
      <form action="">
        <label className="labelname" htmlFor="">
          State Of Residence
        </label>
        <br />
        <input
          className="inputstyle"
          onChange={handleChange}
          type="text"
          name="state"
          id=""
        />
        <br />
        <label className="labelname" htmlFor="">
          Address
        </label>
        <br />
        <input
          onChange={handleChange}
          className="inputstyle"
          type="text"
          name="address"
          id=""
        />
        <br />
        <label className="labelname" htmlFor="">
          Pin Code
        </label>
        <br />
        <input
          onChange={handleChange}
          className="inputstyle"
          type="text"
          name="pincode"
          id=""
        />
      </form>
      
        <button onClick={addTodo} className="labelname btnstyle">
          Next
        </button>
   
    </div>
  );
};
