import { Route, Routes } from "react-router-dom";
import "./App.css";
import CardContainer from "./components/CardContainer/CardContainer";
import FavContainer from "./components/Favourites/FavContainer/FavContainer";

import ResponsiveAppBar from "./components/ResponsiveAppBar/ResponsiveAppBar";
import Login from "./components/User/Login/Login";
import Register from "./components/User/Register/Register";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<CardContainer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/favourite" element={<FavContainer />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<CardContainer />} />
      </Routes>
      {/* <CardContainer /> */}
    </div>
  );
}

export default App;
