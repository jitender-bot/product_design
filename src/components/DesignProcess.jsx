import React from 'react';
import { Compass, Search, Target, Map, Layout, CheckCheck } from 'lucide-react';

export default function DesignProcess() {
  const steps = [
    {
      num: '01',
      title: 'Discover',
      desc: 'Understand the problem and users.',
      icon: <Search size={20} />
    },
    {
      num: '02',
      title: 'Define',
      desc: 'Identify the core problem and prioritize needs.',
      icon: <Target size={20} />
    },
    {
      num: '03',
      title: 'Explore',
      desc: 'Generate possible solutions and user flows.',
      icon: <Map size={20} />
    },
    {
      num: '04',
      title: 'Design',
      desc: 'Create wireframes, visual design, and interactive prototypes.',
      icon: <Layout size={20} />
    },
    {
      num: '05',
      title: 'Validate',
      desc: 'Test assumptions, identify friction, and iterate.',
      icon: <CheckCheck size={20} />
    }
  ];

  return (
    <section id="process" className="section-padding process-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <Compass size={13} /> Methodology
          </div>
          <h2>Design Process</h2>
          <p>
            A systematic, iterative approach to turning complex real-world problems into clear digital solutions.
          </p>
        </div>

        {/* Process Cards Grid */}
        <div className="process-grid">
          {steps.map((step, idx) => (
            <div key={step.num} className="process-card">
              <div className="step-num font-mono">{step.num}</div>
              <div className="step-icon-box">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
              {idx < steps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
