import React from 'react';
import { motion } from 'framer-motion';
import { cardMotion, hoverBg, hoverText } from "@front/data/motions";

function PortfolioCard({ item, filter, onSelect }) {
  return (
    <motion.div
      layout
      variants={cardMotion}
      initial="initial"
      whileInView="scrollAnimate"
      exit="exit"
      viewport={{ once: true, amount: 0.1 }}
      className="portfolio-card"
      onClick={() => onSelect(item)}
      whileHover="hover"
      transition={{
        layout: { duration: 0.4, ease: "easeInOut" }
      }}
    >
      <div className="card-inner">
        {item.type === "video" ? (
          <video autoPlay loop muted playsInline className="card-media">
            <source src={item.source} type="video/mp4" />
          </video>
        ) : (
          <img src={item.source} alt={item.title} className="card-media" />
        )}

        <motion.div className="card-overlay" variants={hoverBg}>
          <div className="text-group">
            <motion.h3 className="project-name" variants={hoverText}>
              {item.title}
            </motion.h3>
            <motion.p className="client" variants={hoverText}>
              {item.client}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default React.memo(PortfolioCard);
