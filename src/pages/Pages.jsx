import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipe from "./Recipe";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/cuisine/:type" element={<Cuisine />}></Route>
      <Route path="/search/:search" element={<Searched />}></Route>
      <Route path="/recipe/:id" element={<Recipe />}></Route>
      <Route path="*" element={<h1> Go to Home page</h1>}></Route>
    </Routes>
  );
};

export default Pages;
