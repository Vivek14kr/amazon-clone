import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { RegFav } from "../Redux/actions";
import { Link } from "react-router-dom";

export const Home = ()=>{


  useEffect(()=>{
    fetchdata()
  }, [])

  let [data, SetData] = useState([])
  const dispatch = useDispatch();

  const { datas } = useSelector((state) => state.regState);

const fetchdata = async () => {
  
  const baseURL = "https://masaihomework.herokuapp.com/shops";
  await fetch(baseURL)
    .then((resp) => resp.json())
    .then((dataa) => {
      SetData(dataa);
      
    });
};
const handleClick = async (val) => {
  let dummy = []
  const baseURL = "https://masaihomework.herokuapp.com/shops";
  await fetch(baseURL)
    .then((resp) => resp.json())
    .then((dataa) => {
      dummy = dataa
    });

   let newdata = dummy.filter(item => item.rating >val)
   SetData(newdata)
};

const handlePayment = async (val)=>{
 let dummy = []
  const baseURL = "https://masaihomework.herokuapp.com/shops";
  await fetch(baseURL)
    .then((resp) => resp.json())
    .then((dataa) => {
      dummy = dataa
    });
    let newdata
if (val == "cash"){
    newdata = dummy.filter((item) => 
   item.payment_methods.cash === true);
}else if (val == "card"){
  newdata = dummy.filter((item)=>
  item.payment_methods.card == true)
}else {
    newdata = dummy.filter(
      (item) =>
        item.payment_methods.card == true && item.payment_methods.cash === true
    );
}

   SetData(newdata)
}

const handleFav = (item)=>{
  console.log("sfhesd")
  dispatch(RegFav(item));
}

console.log(datas , "  hbjb data is new")
  return (
    <div style={{ "text-align": "center", "justify-content": "center" }}>
      <Link to="/fav">Go to Fav</Link>
     
      <h1>Sort according to Rating</h1>
      <button
        onClick={(e) => {
          handleClick(e.target.value);
        }}
        value="1"
      >
        1
      </button>
      <button
        onClick={(e) => {
          handleClick(e.target.value);
        }}
        value="2"
      >
        2
      </button>
      <button
        onClick={(e) => {
          handleClick(e.target.value);
        }}
        value="3"
      >
        3
      </button>
      <button
        onClick={(e) => {
          handleClick(e.target.value);
        }}
        value="4"
      >
        4
      </button>
      <h2>Types of Payment</h2>
      <button
        onClick={(e) => {
          handlePayment(e.target.value);
        }}
        value="cash"
      >
        Cash Only
      </button>
      <button
        onClick={(e) => {
          handlePayment(e.target.value);
        }}
        value="card"
      >
        Card ONly
      </button>
      <button
        onClick={(e) => {
          handlePayment(e.target.value);
        }}
        value="both"
      >
        All
      </button>
      <div style={{ "margin-left": "34%" }}>
        {data.map((item) => (
          <div style={{ border: "1px solid black", width: "50%" }}>
            <div style={{ display: "flex" }}>
              <img
                src={item.img_src}
                alt=""
                srcset=""
                style={{
                  height: "110px",
                  marginBottom: "20px",
                  width: "100px",
                }}
              />
              <div>
                <div style={{ textAlign: "left", marginLeft: "10px" }}>
                  <b>{item.res_name}</b>
                  <div style={{ display: "flex" }}>
                    {item.categories.map((it) => (
                      <p
                        style={{
                          "margin-left": "5px",
                          "margin-bottom": "0px",
                          paddingBottom: "0px",
                        }}
                      >
                        {it}
                      </p>
                    ))}
                  </div>
                  <p style={{ margin: "0px", padding: "0px" }}>
                    Cost {item.price} for one
                  </p>
                  <p>
                    Online Payment :{" "}
                    {item.onlinepayment == true ? (
                      <p> Available</p>
                    ) : (
                      <p>Not Available</p>
                    )}
                  </p>
                </div>
              </div>
              <div style={{ "margin-left": "10px" }}>
                <div>{item.rating}</div>
                <p>{item.votes} votes</p>
                <p>{item.reviews} reviews</p>
              </div>
            </div>
            <button onClick={() => handleFav(item)}>Add to Favorites</button>
            <button>Order Online</button>
          </div>
        ))}
      </div>
    </div>
  );
}