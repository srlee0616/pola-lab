import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '@front/layout/Footer';

function MainLayout() {
  return (
    <div className="layout">
      <main className="layout-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
