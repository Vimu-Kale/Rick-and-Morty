import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./components/ResponsiveAppBar/ResponsiveAppBar";
// import CardContainer from "./components/CardContainer/CardContainer";
import RequireAuth from "./components/RequireAuth";
import CircularProgress from "@mui/material/CircularProgress";
import Login from "./components/User/Login/Login";
// const LazyLogin = React.lazy(() => import("./components/User/Login/Login"));
const LazyCardContainer = React.lazy(() =>
  import("./components/CardContainer/CardContainer")
);
const LazyFavContainer = React.lazy(() =>
  import("./components/Favourites/FavContainer/FavContainer")
);
const LazyRegister = React.lazy(() =>
  import("./components/User/Register/Register")
);

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route
          path="/characters"
          element={
            <RequireAuth>
              <React.Suspense fallback={<CircularProgress />}>
                <LazyCardContainer />
              </React.Suspense>
            </RequireAuth>
          }
        />

        <Route path="/" element={<Login />} />

        <Route
          path="/favourite"
          element={
            <RequireAuth>
              <React.Suspense fallback={<CircularProgress />}>
                <LazyFavContainer />
              </React.Suspense>
            </RequireAuth>
          }
        />

        <Route
          path="/register"
          element={
            <React.Suspense fallback={<CircularProgress />}>
              <LazyRegister />
            </React.Suspense>
          }
        />

        <Route path="*" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
