import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NAV from "@front/data/nav";
import { HEADER_SETTINGS } from "@front/data/constants";
import { Menu, X } from 'lucide-react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > HEADER_SETTINGS.SCROLL_THRESHOLD);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="header-inner">
          <Link to="/" className="logo">HappyIct</Link>
          <div className="header-actions">
            <button onClick={toggleMenu} className="menu-open-btn">
              <Menu className="icon-header" />
            </button>
          </div>
        </div>
      </header>

      <div className={`menu-panel ${isOpen ? 'is-open' : ''}`}>
        <div className="menu-header">
          <span>SITEMAP</span>
          <button onClick={() => setIsOpen(false)} className="menu-close-btn">
            <X className="icon-close" />
          </button>
        </div>

        <nav className="menu-nav">
          {NAV.map((item) => (
            <div key={item.label} className="menu-item">
              {item.path ? (
                <Link to={item.path}>{item.label}</Link>
              ) : (
                <>
                  <div className="menu-parent">{item.label}</div>
                  <div className="menu-children">
                    {item.children.map(child => (
                      <Link key={child.label} to={child.path}>{child.label}</Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </nav>
      </div>

      {isOpen && <div className="menu-overlay" onClick={() => setIsOpen(false)} />}
    </>
  );
}

export default Header;
