import logo from "./logo.svg";
import "./App.css";

import { Route, Routes } from "react-router-dom";

import { Home } from "./Components/Home";
import { Fav } from "./Components/Fav";
import { User } from "./Components/User";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/registration/one" element={<Home />}></Route>
        <Route path="/registration/two" element={<Fav />}></Route>
        <Route path="/Users" element={<User />}></Route>
      </Routes>
    </div>
  );
}

export default App;
