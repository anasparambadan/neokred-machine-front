import React from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import { Routes, Route ,Navigate} from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";

const App = () => {
  const user = true;
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="home" /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={user ? <Navigate to="../home" /> : <Login />}
        />
        <Route
          path="/register"
          element={user ? <Navigate to="../home" /> : <Register />}
        />
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="../login" />}
        />
        <Route
          path="/profile"
          element={user ? <Profile /> : <Navigate to="../login" />}
        />
      </Routes>
    </>
  );
};

export default App;
