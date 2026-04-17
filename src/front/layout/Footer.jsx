import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <h2>HappyIct</h2>
          <p>
            서울시 성동구 성수일로6길 33, 2층 (성수동2가, 아연디지털타워)<br />
            © {new Date().getFullYear()} The Happy ICT Foundation. All rights reserved.
          </p>
        </div>

        <div className="footer-right">
          <div>
            <p>Email</p>
            <a href="mailto:test@test.com">test@test.com</a>
          </div>

          <div>
            <p>Tel</p>
            <a href="tel:000">000</a>
          </div>

          <div>
            <p>Legal</p>
            <Link to="/privacy">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
