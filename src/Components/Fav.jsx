import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";

import { RemoveFav } from "../Redux/actions";

import { Link } from "react-router-dom";
export const Fav = ()=>{
const { datas } = useSelector((state) => state.regState);
  console.log(datas, "dfjdkfd")
    return (
      <div>
        <h1>Favorites</h1>
        <div style={{"marginLeft":"460px"}}>
          {datas.map((item) => (
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
              <button>Order Online</button>
            </div>
          ))}
        </div>
      </div>
    );
}