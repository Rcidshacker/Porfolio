import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import UIIdeas from './pages/UIIdeas';
import { Background3D } from './components/Background3D';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Shared Background - Stays mounted during navigation */}
      <Background3D />

      {/* Global Noise Texture - Shared across routes */}
      <div
        className="fixed inset-0 z-0 opacity-20 pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E")` }}
      ></div>

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ui-ideas" element={<UIIdeas />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
