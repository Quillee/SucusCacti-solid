import { Route, Router, Routes } from 'solid-app-router';
import type { Component } from 'solid-js';
import Icons from './views/Icons';
import LandingPage from './views/LandingPage';
import Header from './components/Header/Header';
import TestComponents from './views/TestComponents';

const App: Component = () => {
  return (
    <Router>
      <Header
        siteMap={[
          { to: '/', name: 'Home' },
          { to: '/icons', name: 'See Icons' },
          { to: '/test', name: 'Test' },
        ]}
      />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/icons" element={<Icons />} />
        <Route path="/test" element={<TestComponents />} />
      </Routes>
    </Router>
  );
};

export default App;
