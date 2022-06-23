import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Home from './Views/Home';
import Spotlight from './Views/Spotlight';
import KoaderKard from './Components/KoaderKard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="kewl-koader" element={<Spotlight />}>
            <Route path=":id" element={<KoaderKard />} />
          </Route>
          </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
