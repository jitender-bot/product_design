import React from 'react';
import { ShieldAlert, UserCheck, Zap, Grid, Sparkles } from 'lucide-react';

export default function DesignPrinciples() {
  const principles = [
    {
      title: 'USER FIRST',
      tagline: 'Problem over interface',
      desc: 'Start with the user\'s problem rather than the interface.',
      detail: 'Every UI element must exist to solve a clear user goal, avoiding superficial decoration.',
      icon: <UserCheck size={24} />
    },
    {
      title: 'SIMPLICITY',
      tagline: 'Clarity over clutter',
      desc: 'Reduce unnecessary steps and cognitive load.',
      detail: 'Focus on clear visual hierarchy, thoughtful defaults, and eliminating redundant choices.',
      icon: <Zap size={24} />
    },
    {
      title: 'SYSTEMATIC',
      tagline: 'Structure over chaos',
      desc: 'Use consistent components, hierarchy, spacing, and interaction patterns.',
      detail: 'Build scalable design systems that maintain visual harmony across desktop and mobile.',
      icon: <Grid size={24} />
    }
  ];

  return (
    <section id="principles" className="section-padding principles-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={13} /> Mindset
          </div>
          <h2>Design Principles</h2>
          <p>
            Core beliefs that guide how I evaluate design choices, solve user problems, and construct interfaces.
          </p>
        </div>

        {/* Principles Cards Grid */}
        <div className="principles-grid">
          {principles.map((item) => (
            <div key={item.title} className="principle-card">
              <div className="principle-icon-wrapper">
                {item.icon}
              </div>
              <span className="principle-tagline font-mono font-xs">{item.tagline}</span>
              <h3 className="principle-title">{item.title}</h3>
              <p className="principle-desc">{item.desc}</p>
              <div className="principle-divider"></div>
              <p className="principle-detail font-sm text-muted">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
