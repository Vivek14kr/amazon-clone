
import { useContext, useState } from "react";

import { useNavigate, useLocation } from "react-router-dom";

import { AuthContext } from "../Contexts/AuthContext";
import { Link } from "react-router-dom";
import "./Home.css"
export const Home = () => {
   const { handleChange, form, setForm , allow, setAllow} = useContext(AuthContext);
 
 const navigate = useNavigate()
   const handleCheck = (e)=>{
     e.preventDefault()
    let {name, age, DOB} = form;
    console.log(name, age, DOB)
    if (name == undefined|| age == 0 || age == undefined|| DOB == undefined){
     alert("Please Write all Fields")
      setAllow(true)
     navigate("/registration/one")
      return
    }
   setAllow(false)
navigate("/registration/two")
   return
  }
 
  console.log(form, " dfdf")
  return (
    <div className="firstform">
      <form action="">
        <label className="labelname" htmlFor="">
          Name
        </label>
        <br />
        <input
          className="inputstyle"
          type="text"
          name="name"
          onChange={handleChange}
          id=""
        />
        <br />
        <label className="labelname" htmlFor="">
          Age
        </label>
        <br />
        <input
          onChange={handleChange}
          className="inputstyle"
          type="number"
          name="age"
        />
        <br />
        <label className="labelname" htmlFor="">
          DOB
        </label>
        <br />
        <input
          onChange={handleChange}
          className="inputstyle"
          type="text"
          name="DOB"
        />
      </form>

     
        <button onClick={handleCheck} className="labelname btnstyle">Next</button>
      
    </div>
  );
};
