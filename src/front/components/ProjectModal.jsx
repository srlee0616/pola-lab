import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { popupMotion, dimMotion, staggerWrap, fadeUpItem } from "@front/data/motions";

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="project-modal">
      <motion.div
        className="modal-overlay"
        variants={dimMotion}
        initial="initial"
        animate="animate"
        exit="exit"
        onClick={onClose}
      />

      <motion.div
        className="modal-content"
        variants={popupMotion}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <button className="modal-close" onClick={onClose}>
          <X className="icon-x" />
        </button>

        <div className="modal-media-wrap">
          {project.type === "video" ? (
            <video autoPlay loop muted playsInline className="bg-media">
              <source src={project.source} type="video/mp4" />
            </video>
          ) : (
            <img src={project.source} alt={project.title} className="bg-media" />
          )}
        </div>

        <div className="modal-body">
          <motion.div className="text-wrap" variants={staggerWrap}>
            <motion.h2 className="modal-title" variants={fadeUpItem}>
              {project.title}
            </motion.h2>

            <motion.div className="modal-tags" variants={fadeUpItem}>
              <span>FEATURED</span>
              <span>{project.category.toUpperCase()}</span>
            </motion.div>

            <div className="modal-info-grid">
              <motion.div className="info-item" variants={fadeUpItem}>
                <span className="label">CLIENT</span>
                <span className="value">{project.client}</span>
              </motion.div>
              <motion.div className="info-item" variants={fadeUpItem}>
                <span className="label">ABOUT</span>
                <p className="value desc">{project.desc}</p>
              </motion.div>
            </div>

            <motion.a href="#" className="visit-link" variants={fadeUpItem}>
              Visit Website <span>→</span>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default ProjectModal;
