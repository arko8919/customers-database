import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./js/components/contexts/AuthContext";
import PrivateRoute from "./js/components/PrivateRoute";

// Components
import App from "./App.js";
import Signup from "./js/components/Signup";
import Dashboard from "./js/components/Dashboard";
import Login from "./js/components/Login";
import ForgotPassword from "./js/components/ForgotPassword";

import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <PrivateRoute>
                <App />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          ></Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
