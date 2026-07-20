import React from 'react';
import { motion } from 'framer-motion';
import { dimMotion, popupMotion, staggerWrapDetails, fadeUpItem } from "@front/data/motions";

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="project-modal">
      <motion.div className="modal-overlay" variants={dimMotion} initial="initial" animate="animate" exit="exit" onClick={onClose} />

      <motion.div className="modal-content" variants={popupMotion} initial="initial" animate="animate" exit="exit">
        <button className="modal-close" onClick={onClose}><span className="icon-x"></span></button>

        <div className="modal-media-wrap">
          {project.type === "video" ? (
            <video src={project.source} className="bg-media" muted loop playsInline autoPlay />
          ) : (
            <img src={project.source} alt={project.title} className="bg-media" />
          )}
        </div>

        <div className="modal-body">
          <motion.div className="text-wrap" variants={staggerWrapDetails} initial="initial" animate="animate">
            <motion.h2 variants={fadeUpItem} className="modal-title">{project.title}</motion.h2>

            <motion.div variants={fadeUpItem} className="modal-tags"><span>{project.category}</span></motion.div>

            <motion.div variants={fadeUpItem} className="modal-info-grid">
              <div className="info-item">
                <span className="label">Client</span>
                <span className="value">{project.client || "—"}</span>
              </div>
              <div className="info-item">
                <span className="label">Role</span>
                <span className="value">{project.role || "—"}</span>
              </div>
              {project.description && (
                <div className="info-item">
                  <span className="label">Overview</span>
                  <span className="value desc">{project.description}</span>
                </div>
              )}
            </motion.div>

            {project.url && (
              <motion.div variants={fadeUpItem}>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="visit-link">
                  Visit Website <span>→</span>
                </a>
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default React.memo(ProjectModal);
