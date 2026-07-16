import React from 'react';
import { motion } from 'framer-motion';
import {
  dimMotion,
  popupMotion,
  staggerWrapDetails,
  fadeUpItem
} from "@front/data/motions";

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="project-modal">
      {/* 1. 뒷배경 블러 레이어 */}
      <motion.div
        className="modal-overlay"
        variants={dimMotion}
        initial="initial"
        animate="animate"
        exit="exit"
        onClick={onClose}
      />

      {/* 2. 중앙 정렬 팝업 본체 */}
      <motion.div
        className="modal-content"
        variants={popupMotion}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {/* 3. 우측 상단 닫기 버튼 */}
        <button className="modal-close" onClick={onClose}>
          <svg
            className="icon-x"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* 4. 배경 풀화면 미디어 */}
        <div className="modal-media-wrap">
          {project.type === "video" ? (
            <video
              src={project.source}
              className="bg-media"
              muted
              loop
              playsInline
              autoPlay
            />
          ) : (
            <img
              src={project.source}
              alt={project.title}
              className="bg-media"
            />
          )}
        </div>

        {/* 5. 텍스트 정보 레이어 */}
        <div className="modal-body">
          <motion.div
            className="text-wrap"
            variants={staggerWrapDetails}
            initial="initial"
            animate="animate"
          >
            <motion.h2 variants={fadeUpItem} className="modal-title">
              {project.title}
            </motion.h2>

            <motion.div variants={fadeUpItem} className="modal-tags">
              <span>{project.category}</span>
            </motion.div>

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
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default React.memo(ProjectModal);
