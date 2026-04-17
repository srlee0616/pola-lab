import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from "@front//layout/MainLayout";
import Home from "@front/pages/Home/Home";

export default function FrontApp() {
  const [isIntroActive, setIsIntroActive] = useState(true);

  return (
    <div className="front-app">
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={
              <Home
                isIntroActive={isIntroActive}
                onIntroFinish={() => setIsIntroActive(false)}
              />
            }
          />
          <Route path="/works" element={<div>WORKS PAGE</div>} />
          <Route path="/news" element={<div>NEWS PAGE</div>} />
        </Route>
      </Routes>
    </div>
  );
}
