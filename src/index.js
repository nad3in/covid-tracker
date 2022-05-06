import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from './pages/login';
import Signup from './pages/signup';
import Home from './pages/home';
import UserProfile from './pages/userProfile';
import UsersLocations from './pages/usersLocations';
const root = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/userProfile" element={<Home ><UserProfile /></Home>} />
      <Route path="/map" element={<Home ><UsersLocations /></Home>} />

    </Routes>
  </BrowserRouter>,
  root
);