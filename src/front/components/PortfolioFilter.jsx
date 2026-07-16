import React from 'react';
import { motion } from 'framer-motion';

function PortfolioFilter({ categories, activeFilter, onFilterChange }) {
  return (
    <div className="portfolio-header">
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
  );
}

export default React.memo(PortfolioFilter);
