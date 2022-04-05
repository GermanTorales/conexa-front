import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Login, Photos, Posts } from './pages';

import './global.styles.css';
import ProtectedRoute from './utils/ProtectedRoutes';

const App = () => {
  const token = localStorage.getItem('token');

  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route
          exact
          path="/"
          element={
            <ProtectedRoute token={token}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/posts"
          element={
            <ProtectedRoute token={token}>
              <Posts />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/photos"
          element={
            <ProtectedRoute token={token}>
              <Photos />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<p>{`There's nothing here: 404!`}</p>} />
      </Routes>
    </Router>
  );
};

export default App;
