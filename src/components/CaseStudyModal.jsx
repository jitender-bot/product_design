import React, { useEffect } from 'react';
import { X, ArrowRight, ArrowUpRight, CheckCircle2, ShieldCheck, Cpu, Layers, Sparkles, Target, Lightbulb, Compass, Award } from 'lucide-react';
import InvoiceFastMockup from '../mockups/InvoiceFastMockup';
import SalesLensMockup from '../mockups/SalesLensMockup';
import YouTubeExplorerMockup from '../mockups/YouTubeExplorerMockup';

export default function CaseStudyModal({ project, onClose }) {
  const [viewMode, setViewMode] = useState('image'); // 'image' or 'interactive'

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  const renderMockupComponent = (id) => {
    switch (id) {
      case 'invoicefast':
        return <InvoiceFastMockup />;
      case 'saleslens':
        return <SalesLensMockup />;
      case 'youtube-explorer':
        return <YouTubeExplorerMockup />;
      default:
        return null;
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div className="modal-title-area">
            <span className="modal-project-tag">{project.role}</span>
            <h2>{project.title}</h2>
            <p className="modal-subtitle">{project.subtitle}</p>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close Case Study">
            <X size={20} />
          </button>
        </div>

        {/* Modal Meta Info Bar */}
        <div className="modal-meta-bar">
          <div className="meta-item">
            <span className="meta-label">Project Type</span>
            <span className="meta-val">{project.typeBadge}</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Focus Areas</span>
            <span className="meta-val">{project.focus}</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Key Result / Note</span>
            <span className="meta-val highlight">{project.keyResultHighlight}</span>
          </div>
        </div>

        {/* Modal Body Scrollable Content */}
        <div className="modal-body">
          {/* Overview Statement */}
          <div className="modal-section-card summary-card">
            <h3 className="section-title"><Sparkles size={18} className="text-blue" /> Overview</h3>
            <p>{project.description}</p>
          </div>

          {/* UI Showcase with Image & Interactive Toggle */}
          <div className="modal-section">
            <div className="section-label-header">
              <div className="label-header-left">
                <span className="tag-mono">Visual Design</span>
                <h3>Project Interface Showcase</h3>
              </div>

              {project.image && (
                <div className="view-toggle-pill-group">
                  <button 
                    className={`toggle-pill ${viewMode === 'image' ? 'active' : ''}`}
                    onClick={() => setViewMode('image')}
                  >
                    UI Design Frame
                  </button>
                  <button 
                    className={`toggle-pill ${viewMode === 'interactive' ? 'active' : ''}`}
                    onClick={() => setViewMode('interactive')}
                  >
                    Interactive Prototype
                  </button>
                </div>
              )}
            </div>

            <div className="interactive-showcase-box">
              {project.image && viewMode === 'image' ? (
                <div className="modal-uploaded-image-card">
                  <div className="ui-header">
                    <div className="ui-dots">
                      <span className="dot red"></span>
                      <span className="dot yellow"></span>
                      <span className="dot green"></span>
                    </div>
                    <div className="ui-address-bar">
                      <span>{project.liveDemoUrl || project.title.toLowerCase()}</span>
                    </div>
                    <div className="ui-badge-pill">{project.typeBadge}</div>
                  </div>
                  <div className="modal-screenshot-frame">
                    <img src={project.image} alt={`${project.title} Interface Screenshot`} className="modal-screenshot-img" />
                  </div>
                </div>
              ) : (
                renderMockupComponent(project.id)
              )}
            </div>
          </div>

          {/* Problem & Approach Split Grid */}
          <div className="modal-grid-2">
            <div className="modal-section-card">
              <h3 className="section-title"><Target size={18} className="text-blue" /> The Problem</h3>
              <p>{project.caseStudyDetails.problem}</p>
            </div>
            <div className="modal-section-card">
              <h3 className="section-title"><Lightbulb size={18} className="text-blue" /> Design Approach</h3>
              <p>{project.caseStudyDetails.approach}</p>
            </div>
          </div>

          {/* Key Design Decisions */}
          <div className="modal-section-card">
            <h3 className="section-title"><Compass size={18} className="text-blue" /> Key Design Decisions</h3>
            <ul className="decisions-list">
              {project.caseStudyDetails.keyDecisions.map((decision, index) => (
                <li key={index} className="decision-item">
                  <div className="decision-num">0{index + 1}</div>
                  <div className="decision-content">
                    <h4>{decision.title}</h4>
                    <p>{decision.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Outcome & Technical Truthfulness */}
          <div className="modal-section-card outcome-card">
            <h3 className="section-title"><Award size={18} className="text-blue" /> Outcome &amp; Reflection</h3>
            <p className="outcome-text">{project.caseStudyDetails.outcome}</p>
            
            <div className="truthfulness-banner">
              <ShieldCheck size={16} className="text-emerald" />
              <span><strong>Transparency Note:</strong> {project.caseStudyDetails.truthNote}</span>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          {project.liveDemoUrl && (
            <a 
              href={project.liveDemoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
            >
              Launch Live Demo <ArrowUpRight size={15} />
            </a>
          )}
          <button className="btn btn-secondary" onClick={onClose}>
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
}
