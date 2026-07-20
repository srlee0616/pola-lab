import React from 'react';
import { motion } from 'framer-motion';
import { cardMotion, hoverBg, hoverText } from '@front/data/motions';

function PortfolioCard({ item, index, filter, onSelect }) {
  const rowDelay = Math.floor(index / 2) * 0.4;

  return (
    <motion.div layout="position" variants={cardMotion} initial="initial" animate="scrollAnimate" exit="exit" className="portfolio-card" onClick={() => onSelect(item)} whileHover="hover" style={{ transitionDelay: `${rowDelay}s` }} transition={{ layout: { duration: 0.35, ease: [0.25, 1, 0.5, 1] } }}>
      <div className="card-inner">
        {item.type === "video" ? (
          <video src={item.source} className="card-media" muted loop playsInline autoPlay />
        ) : (
          <img src={item.source} alt={item.title} className="card-media" />
        )}

        <motion.div className="card-overlay" variants={hoverBg}>
          <div className="text-group">
            <motion.h3 className="project-name" variants={hoverText}>{item.title}</motion.h3>
            <motion.p className="client" variants={hoverText}>{item.client}</motion.p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default React.memo(PortfolioCard);
