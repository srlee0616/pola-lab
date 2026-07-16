import React from 'react';
import { motion } from 'framer-motion';
import { cardMotion } from '@front/data/motions';

function PortfolioCard({ item, filter, onSelect }) {
  return (
    <motion.div
      layout="position"
      variants={cardMotion}
      initial="initial"
      animate="scrollAnimate"
      exit="exit"
      className="portfolio-card"
      onClick={() => onSelect(item)}
      whileHover="hover"
      transition={{
        layout: {
          duration: 0.35,
          ease: [
            0.25,
            1,
            0.5,
            1
          ]
        }
      }}
    >
      <div className="card-inner">
        {item.type === "video" ? (
          <video
            src={item.source}
            className="card-media"
            muted
            loop
            playsInline
            autoPlay
          />
        ) : (
          <img
            src={item.source}
            alt={item.title}
            className="card-media"
          />
        )}
        <div className="card-overlay">
          <div className="text-group">
            <h3 className="project-name">{item.title}</h3>
            <p className="client">{item.client}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default React.memo(PortfolioCard);
