import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import PORTFOLIO_DATA from "@front/data/projects";
import {
  cardMotion,
  popupMotion,
  dimMotion,
  hoverBg,
  hoverText,
  staggerWrap,
  fadeUpItem
} from "@front/data/motions";

const CATEGORIES = ["ALL", "FEATURED", "BRANDING", "UX", "FILM/VIDEO"];

const gridVariants = {
  animate: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

function Home() {
  const [filter, setFilter] = useState("ALL");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (window.location.search.includes("reset=true")) {
      setFilter("ALL");
      window.scrollTo({ top: 0 });
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  useEffect(() => {
    if (selectedProject) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    };
  }, [selectedProject]);

  const filteredProjects = useMemo(() => {
    const normalizedData = PORTFOLIO_DATA.map((item, index) => ({
      ...item,
      id: item.key || `project-${index}`
    }));

    const sortedData = [...normalizedData].sort((a, b) => {
      const orderA = CATEGORIES.indexOf(a.category.toUpperCase());
      const orderB = CATEGORIES.indexOf(b.category.toUpperCase());

      if (orderA !== orderB) return orderA - orderB;

      const priorityA = a.order ?? 999;
      const priorityB = b.order ?? 999;
      return priorityA - priorityB;
    });

    if (filter === "ALL") return sortedData;
    return sortedData.filter(item => item.category.toUpperCase() === filter);
  }, [filter]);

  return (
    <div className="home">
      <section className="home-portfolio">
        <div className="inner">
          <div className="portfolio-header">
            <h1
              className="logo"
              onClick={() => {
                setFilter("ALL");
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              POLA LAB.
            </h1>
            <div className="portfolio-filter">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  className={`filter-btn ${filter === cat ? 'is-active' : ''}`}
                  onClick={() => setFilter(cat)}
                >
                  {cat}
                  {filter === cat && (
                    <motion.span layoutId="underline" className="underline" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            layout
            className="portfolio-grid"
            variants={gridVariants}
            initial="initial"
            animate="animate"
          >
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((item) => (
                <motion.div
                  key={`${filter}-${item.id}`}
                  layout
                  variants={cardMotion}
                  initial="initial"
                  whileInView="scrollAnimate"
                  exit="exit"
                  viewport={{ once: true, amount: 0.1 }}
                  className="portfolio-card"
                  onClick={() => setSelectedProject(item)}
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

                    <motion.div
                      className="card-overlay"
                      variants={hoverBg}
                    >
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
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <div className="project-modal">
            <motion.div
              className="modal-overlay"
              variants={dimMotion}
              initial="initial"
              animate="animate"
              exit="exit"
              onClick={() => setSelectedProject(null)}
            />

            <motion.div
              className="modal-content"
              variants={popupMotion}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <button className="modal-close" onClick={() => setSelectedProject(null)}>
                <X className="icon-x" />
              </button>

              <div className="modal-media-wrap">
                {selectedProject.type === "video" ? (
                  <video autoPlay loop muted playsInline className="bg-media">
                    <source src={selectedProject.source} type="video/mp4" />
                  </video>
                ) : (
                  <img src={selectedProject.source} alt={selectedProject.title} className="bg-media" />
                )}
              </div>

              <div className="modal-body">
                <motion.div className="text-wrap" variants={staggerWrap}>

                  <motion.h2 className="modal-title" variants={fadeUpItem}>
                    {selectedProject.title}
                  </motion.h2>

                  <motion.div className="modal-tags" variants={fadeUpItem}>
                    <span>FEATURED</span>
                    <span>{selectedProject.category.toUpperCase()}</span>
                  </motion.div>

                  <div className="modal-info-grid">
                    <motion.div className="info-item" variants={fadeUpItem}>
                      <span className="label">CLIENT</span>
                      <span className="value">{selectedProject.client}</span>
                    </motion.div>
                    <motion.div className="info-item" variants={fadeUpItem}>
                      <span className="label">ABOUT</span>
                      <p className="value desc">{selectedProject.desc}</p>
                    </motion.div>
                  </div>

                  <motion.a href="#" className="visit-link" variants={fadeUpItem}>
                    Visit Website <span>→</span>
                  </motion.a>

                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Home;
