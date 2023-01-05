import { Routes, Route } from "react-router-dom";
import Home from "../src/components/home";
import NotFound from "../src/components/notfound";
import About from "./components/about";
import InputForm from "./ui/textfield";
import Layout from "./ui/layout";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="about" element={<About />} />
        <Route path="form" element={<InputForm />} />
        <Route path="layout" element={<Layout />} />
      </Routes>
    </div>
  );
}

export default App;