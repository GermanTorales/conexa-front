import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./global.styles.css";
import { Login } from "./pages";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
