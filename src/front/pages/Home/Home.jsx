import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import PORTFOLIO_DATA from "@front/data/projects";
import {
  portfolioVariants,
  modalVariants,
  modalOverlayVariants,
  overlayVariants,
  textChildVariants
} from "@front/data/motions";

const CATEGORIES = ["ALL", "FEATURED", "BRANDING", "UX", "FILM/VIDEO"];

const gridVariants = {
  animate: {
    transition: {
      staggerChildren: 0.08 // 올라오는 속도감을 위해 간격을 살짝 줄임
    }
  }
};

function Home() {
  const [filter, setFilter] = useState("ALL");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    const sortedData = [...PORTFOLIO_DATA].sort((a, b) => {
      const orderA = CATEGORIES.indexOf(a.category.toUpperCase());
      const orderB = CATEGORIES.indexOf(b.category.toUpperCase());
      if (orderA !== orderB) return orderA - orderB;
      return a.id - b.id;
    });

    if (filter === "ALL") return sortedData;
    return sortedData.filter(item => item.category.toUpperCase() === filter);
  }, [filter]);

  return (
    <div className="home">
      <section className="home-portfolio">
        <div className="inner">
          <div className="portfolio-header">
            <h1 className="logo">POLA LAB.</h1>
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
                  key={item.id}
                  layout
                  variants={portfolioVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="portfolio-card"
                  onClick={() => setSelectedProject(item)}
                  whileHover="hover"
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
                      variants={overlayVariants}
                    >
                      <div className="text-group">
                        <motion.h3 className="project-name" variants={textChildVariants}>
                          {item.title}
                        </motion.h3>
                        <motion.p className="client" variants={textChildVariants}>
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
              variants={modalOverlayVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              onClick={() => setSelectedProject(null)}
            />

            <motion.div
              className="modal-content"
              variants={modalVariants}
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
                <div className="text-wrap">
                  <h2 className="modal-title">{selectedProject.title}</h2>
                  <div className="modal-tags">
                    <span>FEATURED</span>
                    <span>{selectedProject.category.toUpperCase()}</span>
                  </div>

                  <div className="modal-info-grid">
                    <div className="info-item">
                      <span className="label">CLIENT</span>
                      <span className="value">{selectedProject.client}</span>
                    </div>
                    <div className="info-item">
                      <span className="label">ABOUT</span>
                      <p className="value desc">{selectedProject.desc}</p>
                    </div>
                  </div>

                  <a href="#" className="visit-link">
                    Visit Website <span>→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Home;
