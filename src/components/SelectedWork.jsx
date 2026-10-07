import React, { useState } from 'react';
import { ArrowUpRight, FileText, BarChart3, PlaySquare, Eye, Sparkles, Layers, CheckCircle } from 'lucide-react';
import CaseStudyModal from './CaseStudyModal';
import InvoiceFastMockup from '../mockups/InvoiceFastMockup';
import SalesLensMockup from '../mockups/SalesLensMockup';
import YouTubeExplorerMockup from '../mockups/YouTubeExplorerMockup';
import invoicefastImg from '../assets/invoicefast.png';
import youtubeExplorerImg from '../assets/youtubeExplorer.png';

export default function SelectedWork() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 'invoicefast',
      title: 'InvoiceFast',
      subtitle: 'Simplifying invoicing for small businesses',
      description: 'A product concept focused on making invoice creation, management, and sharing faster and easier for small businesses.',
      role: 'Product Design + Development',
      focus: 'UX Design · Dashboard Design · Interaction Design',
      typeBadge: 'Product Concept',
      keyResultHighlight: 'Streamlined 3-step invoice creation workflow',
      liveDemoUrl: 'https://invoice-fast-three.vercel.app/',
      image: invoicefastImg,
      highlights: [
        'Simple invoice creation flow with live totals',
        'Intuitive dashboard showing outstanding vs paid',
        'Invoice status management and quick filters',
        'Clear primary actions reducing user error',
        'Fully responsive web experience'
      ],
      caseStudyDetails: {
        problem: 'Small business owners and freelancers often struggle with clunky invoicing software that requires dozens of clicks for basic tasks. Existing tools overload users with enterprise accounting features when all they need is a fast, reliable way to create and track invoices.',
        approach: 'I approached InvoiceFast by breaking down the invoice lifecycle into 3 core touchpoints: Create, Track, and Share. I minimized cognitive friction by embedding real-time calculations directly inside the input form and creating a clean summary dashboard.',
        keyDecisions: [
          {
            title: 'Inline Line Item Calculation',
            desc: 'Users calculate subtotals and totals in real-time as they type, eliminating manual calculation errors.'
          },
          {
            title: 'Visual Status Tracking',
            desc: 'Color-coded micro-badges (Draft, Sent, Paid) give instant visibility into cash flow at a glance.'
          },
          {
            title: 'Action-First Hierarchy',
            desc: 'Primary actions like "Send Invoice" or "Save Draft" are persistently located for quick completion.'
          }
        ],
        outcome: 'The resulting conceptual prototype demonstrates how a focused UX design can dramatically reduce the steps needed to generate professional invoices.',
        truthNote: 'Designed as a self-initiated product concept to demonstrate end-to-end UX thinking and dashboard design.'
      }
    },
    {
      id: 'saleslens',
      title: 'SalesLens',
      subtitle: 'Turning sales data into actionable insights',
      description: 'A data analytics dashboard designed to help users understand sales performance and identify important patterns quickly.',
      role: 'Product Design + Data Visualization',
      focus: 'Data Visualization · Dashboard UX · Information Architecture',
      typeBadge: 'Analytical UX Design',
      keyResultHighlight: 'R² of 95.65% on 6,435 sales records',
      highlights: [
        'KPI overview with predictive accuracy stats',
        'Clean chart visualizations & trend analyses',
        'Multi-dimensional filtering (region & category)',
        'Product & category breakdowns',
        'Strict visual hierarchy for complex data'
      ],
      caseStudyDetails: {
        problem: 'Raw sales dataset exports (such as retail records) are overwhelming for non-technical stakeholders. Without clear visual hierarchy and structured dashboards, identifying high-performing stores or forecasting trends is slow and error-prone.',
        approach: 'I designed SalesLens to bridge machine learning model outputs with intuitive UI components. I paired machine learning predictions (Random Forest regression) with an accessible visual dashboard layout that highlights key performance indicators upfront.',
        keyDecisions: [
          {
            title: 'Scannable Metric Cards',
            desc: 'Top-level KPI cards surface the most critical numbers (Model Accuracy, Revenue Trend) before granular charts.'
          },
          {
            title: 'Contextual Legend & Filtering',
            desc: 'Interactive filters enable users to isolate specific retail categories and region performance on the fly.'
          },
          {
            title: 'Information Hierarchy',
            desc: 'Separated predictive model insights from historical actuals using distinct color tones.'
          }
        ],
        outcome: 'The analytics model evaluated 6,435 Walmart sales records and achieved an R² score of 95.65% using Random Forest regression, presented clearly within the dashboard.',
        truthNote: 'The R² metric of 95.65% reflects the statistical accuracy of the machine learning model trained on 6,435 public Walmart sales records, not a live business revenue metric.'
      }
    },
    {
      id: 'youtube-explorer',
      title: 'YouTube Channel Content Explorer',
      subtitle: 'Making large amounts of YouTube content easier to explore',
      description: 'A tool designed to help users explore and understand YouTube channel content through search, filtering, and structured information.',
      role: 'Product Design + Development',
      focus: 'Search UX · Information Architecture · Data Exploration',
      typeBadge: 'Web Tool / UX Design',
      keyResultHighlight: '~99% API Quota Reduction',
      liveDemoUrl: 'https://youtube-explorer-seven.vercel.app/',
      image: youtubeExplorerImg,
      highlights: [
        'Instant multi-channel content search',
        'Topic and category filtering sidebar',
        'Structured information hierarchy',
        'Channel-level metrics & insights',
        'Highly efficient API usage & local caching'
      ],
      caseStudyDetails: {
        problem: 'Exploring large YouTube video libraries via standard YouTube UI makes finding specific technical topics or filtered playlists tedious. Furthermore, standard API queries quickly consume daily quota limits if not carefully architected.',
        approach: 'I designed a clean data-exploration interface focused on search efficiency. By implementing intelligent local indexing and caching algorithms behind a streamlined UI, users can query and filter video topics effortlessly.',
        keyDecisions: [
          {
            title: 'Instant Filter Tags',
            desc: 'Pill-style filters allow quick category toggling without re-fetching entire video arrays.'
          },
          {
            title: 'Scannable Content Cards',
            desc: 'Thumbnails display clear time stamps and view metadata to minimize unnecessary clicks.'
          },
          {
            title: 'Technical Quota Efficiency',
            desc: 'Architected local storage caching that reduced YouTube Data API quota consumption by approximately 99%.'
          }
        ],
        outcome: 'Built a lightweight, responsive content explorer that solves both the user experience problem of deep video search and the engineering constraint of API quota limits.',
        truthNote: 'Quota savings of 99% were verified empirically through local request caching benchmarks during development.'
      }
    }
  ];

  return (
    <section id="work" className="section-padding work-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Layers size={13} /> Portfolio
          </div>
          <h2>Selected Work</h2>
          <p>
            Case studies and product concepts demonstrating user-first problem solving, interaction design, and engineering feasibility.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="projects-grid">
          {projectsData.map((project) => (
            <article key={project.id} className="project-card">
              {/* Card Header Meta */}
              <div className="card-top-meta">
                <span className="card-role-tag">{project.role}</span>
                <span className="card-type-badge">{project.typeBadge}</span>
              </div>

              {/* Title & Subtitle */}
              <div className="card-header">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-subtitle">{project.subtitle}</p>
              </div>

              {/* Visual Project Preview Container */}
              <div className="card-mockup-wrapper" onClick={() => setSelectedProject(project)}>
                {project.image ? (
                  <div className="uploaded-image-preview-card">
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
                    <div className="project-screenshot-frame">
                      <img src={project.image} alt={`${project.title} UI Design`} className="project-screenshot-img" />
                    </div>
                  </div>
                ) : (
                  <>
                    {project.id === 'invoicefast' && <InvoiceFastMockup />}
                    {project.id === 'saleslens' && <SalesLensMockup />}
                    {project.id === 'youtube-explorer' && <YouTubeExplorerMockup />}
                  </>
                )}
                
                <div className="mockup-hover-overlay">
                  <span className="btn btn-primary font-sm">
                    Read Case Study <ArrowUpRight size={15} />
                  </span>
                </div>
              </div>

              {/* Description & Key Highlights */}
              <div className="card-body">
                <p className="project-desc">{project.description}</p>

                <div className="card-highlights">
                  <span className="highlights-title font-xs font-semibold uppercase text-muted">Key Focus &amp; Features:</span>
                  <ul className="highlights-list">
                    {project.highlights.map((item, idx) => (
                      <li key={idx}>
                        <CheckCircle size={13} className="text-blue" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Action Footer */}
              <div className="card-footer">
                <div className="focus-pill">
                  <span>{project.focus}</span>
                </div>
                <div className="card-actions-row">
                  {project.liveDemoUrl && (
                    <a 
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary font-xs font-semibold"
                    >
                      Live Demo <ArrowUpRight size={13} />
                    </a>
                  )}
                  <button 
                    className="btn-link-case-study"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Case Study <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Render Case Study Modal when a project is selected */}
      {selectedProject && (
        <CaseStudyModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
}
