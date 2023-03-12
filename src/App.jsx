import Home from "./components/Home";
import NotFound from "./components/NotFound";
import FormRegister from "./components/Register";
import Login from "./components/Login";
import RecipeReviewCard from "./components/Ui/Card";
import * as React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import MiniDrawer from "./components/Ui/Overview";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Home title="Bienvenue sur la page de Maszala" />}
        />
        <Route path="/home" element={<MiniDrawer />} />
        <Route path="/register" element={<FormRegister />} />
        <Route path="/login" element={<Login />} />
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
