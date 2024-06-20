import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./Components/SignUp.jsx";
import SignIn from './Components/SignIn.jsx';
import Home from './Components/Home.jsx';
import './main.css';

const App = () => {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/signup" />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
