import { Route, Router, Routes } from 'solid-app-router';
import type { Component } from 'solid-js';
import LandingPage from './views/LandingPage';

const App: Component = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
