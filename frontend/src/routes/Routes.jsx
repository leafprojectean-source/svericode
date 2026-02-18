import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login/Login";
import Signup from "../pages/SignUp/Signup";
import Home from "../pages/Home/Home";

const AppRoutes = ({ isLoggedIn }) => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route
        path="/login"
        element={!isLoggedIn ? <Login /> : <Navigate to="/home" />}
      />
      <Route
        path="/signup"
        element={!isLoggedIn ? <Signup /> : <Navigate to="/home" />}
      />

      {/* Protected Route */}
      <Route
        path="/home"
        element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
      />

      {/* Catch-all */}
      <Route
        path="*"
        element={<Navigate to={isLoggedIn ? "/home" : "/login"} />}
      />
    </Routes>
  );
};

export default AppRoutes;
