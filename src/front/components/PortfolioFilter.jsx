import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function PortfolioFilter({ categories, activeFilter, onFilterChange }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`portfolio-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header-inner">
        <h1
          className="logo"
          onClick={() => {
            onFilterChange("ALL");
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          POLA LAB.
        </h1>
        <div className="portfolio-filter">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? 'is-active' : ''}`}
              onClick={() => onFilterChange(cat)}
            >
              {cat}
              {activeFilter === cat && (
                <motion.span layoutId="underline" className="underline" />
              )}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

export default React.memo(PortfolioFilter);
