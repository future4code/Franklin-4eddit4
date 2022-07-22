import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="" element={<Page />} />
        <Route path="" element={<Page />} />
      </Routes>
    </BrowserRouter>
  );
};

export { Router };