import { Route, Router, Routes } from 'solid-app-router';
import type { Component } from 'solid-js';
import Icons from './views/Icons';
import LandingPage from './views/LandingPage';

const App: Component = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/icons" element={<Icons />} />
      </Routes>
    </Router>
  );
};

export default App;
