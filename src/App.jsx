import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FrontApp from '@front//FrontApp';

function App() {
  return (
    <Routes>
      <Route path="/*" element={<FrontApp />} />
    </Routes>
  );
}

export default App;
