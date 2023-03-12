import NotFound from "./components/NotFound";
import FormRegister from "./components/Register";
import Login from "./components/Login";
import RecipeReviewCard from "./components/Ui/Card";
import * as React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import MiniDrawer from "./components/Ui/Overview";
import About from "./components/about";
import Home from "./components/home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<MiniDrawer />} />
        <Route path="/register" element={<FormRegister />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/card"
          element={
            <RecipeReviewCard
              title="Shrimp and Chorizo Paella"
              subheader="September 14, 2016"
              info="This impressive paella is a perfect party dish and a fun meal to cook
              together with your guests. Add 1 cup of frozen peas along with the mussels,
              if you like."
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
