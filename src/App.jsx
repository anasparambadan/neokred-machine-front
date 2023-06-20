import React, { useEffect, useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import { Routes, Route ,Navigate} from "react-router-dom";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import PublicRoute from "./components/routes/PublicRoute";

const App = () => {  
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/profile" />}
        />
        <Route
          path="/login"
          element={<PublicRoute><Login /></PublicRoute>}
        />
        <Route
          path="/register"
          element={<PublicRoute><Register /></PublicRoute> }
        />
        <Route
          path="/profile"
          element={<ProtectedRoute><Profile/></ProtectedRoute>}
        />
      </Routes>
    </>
  );
};

export default App;
