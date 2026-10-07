import React from 'react';
import { ArrowDown, Mail, Layers, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';
import heroImg from '../assets/hero.png';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid-layout">
          <div className="hero-content">
            {/* Status Indicator */}
            <div className="status-indicator-badge">
              <span className="pulse-dot"></span>
              <span className="badge-text">Open to Product Design Internship opportunities</span>
            </div>

            {/* Large Headline */}
            <h1 className="hero-headline">
              Designing products that are <span className="highlight-text">simple</span>, <span className="highlight-text">useful</span>, and <span className="highlight-text">built to work</span>.
            </h1>

            {/* Supporting Text */}
            <p className="hero-subtext">
              Product Designer &amp; Developer focused on UX, interaction design, data visualization, and turning real-world problems into intuitive digital experiences.
            </p>

            {/* Call to Action Buttons */}
            <div className="hero-cta-group">
              <a href="#work" className="btn btn-primary">
                View My Work <ArrowDown size={16} />
              </a>
              <a href="#contact" className="btn btn-secondary">
                Contact Me <Mail size={16} />
              </a>
            </div>

            {/* Quick Pillar Badges */}
            <div className="hero-pillars">
              <div className="pillar-item">
                <span className="pillar-dot"></span>
                <span>Engineering Background</span>
              </div>
              <div className="pillar-item">
                <span className="pillar-dot"></span>
                <span>UX &amp; Interaction Design</span>
              </div>
              <div className="pillar-item">
                <span className="pillar-dot"></span>
                <span>Data-Driven UI</span>
              </div>
            </div>
          </div>

          {/* Hero Profile / Work Showcase Image */}
          <div className="hero-image-wrapper">
            <div className="hero-img-card">
              <img src={heroImg} alt="Jitender — Product Designer & Developer" className="hero-img" />
              <div className="hero-img-badge font-xs font-mono">
                <Sparkles size={13} className="text-blue" /> Product Design &amp; UX
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
