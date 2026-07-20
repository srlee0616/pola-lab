import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import PORTFOLIO_DATA from "@front/data/projects";

import PortfolioFilter from '@front/components/PortfolioFilter';
import PortfolioCard from '@front/components/PortfolioCard';
import ProjectModal from '@front/components/ProjectModal';

const CATEGORIES = ["ALL", "FEATURED", "BRANDING", "UX", "FILM/VIDEO"];

function Home() {
  const [filter, setFilter] = useState("ALL");
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    if (window.location.search.includes("reset=true")) {
      setFilter("ALL"); window.scrollTo({ top: 0 });
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  useEffect(() => { setVisibleCount(4); }, [filter]);

  useEffect(() => {
    if (selectedProject) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden'; document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = 'unset'; document.body.style.paddingRight = '0px';
    }
    return () => { document.body.style.overflow = 'unset'; document.body.style.paddingRight = '0px'; };
  }, [selectedProject]);

  const filteredProjects = useMemo(() => {
    const normalizedData = PORTFOLIO_DATA.map((item, index) => ({ ...item, id: item.key || `project-${index}` }));
    const sortedData = [...normalizedData].sort((a, b) => {
      const orderA = CATEGORIES.indexOf(a.category.toUpperCase()), orderB = CATEGORIES.indexOf(b.category.toUpperCase());
      if (orderA !== orderB) return orderA - orderB;
      return (a.order ?? 999) - (b.order ?? 999);
    });
    return filter === "ALL" ? sortedData : sortedData.filter((item) => item.category.toUpperCase() === filter);
  }, [filter]);

  const slicedProjects = useMemo(() => filteredProjects.slice(0, visibleCount), [filteredProjects, visibleCount]);
  const handleSelectProject = useCallback((project) => setSelectedProject(project), []);
  const handleCloseModal = useCallback(() => setSelectedProject(null), []);
  const handleLoadMore = () => setVisibleCount((prev) => prev + 4);

  return (
    <div className="home">
      <section className="home-portfolio">
        <div className="inner">
          <PortfolioFilter categories={CATEGORIES} activeFilter={filter} onFilterChange={setFilter} />

          <div className="portfolio-grid">
            <AnimatePresence mode="wait">
              {slicedProjects.map((item, index) => <PortfolioCard key={`${filter}-${item.id}`} item={item} index={index} filter={filter} onSelect={handleSelectProject} />)}
            </AnimatePresence>
          </div>

          {filteredProjects.length > visibleCount && (
            <div className="portfolio-more">
              <button className="more-btn" onClick={handleLoadMore}>
                <span>More</span><span className="count-info">({visibleCount} / {filteredProjects.length})</span>
              </button>
            </div>
          )}
        </div>
      </section>

      <AnimatePresence>{selectedProject && <ProjectModal project={selectedProject} onClose={handleCloseModal} />}</AnimatePresence>
    </div>
  );
}

export default Home;
