import React from 'react';
import { User, Code, Palette, Cpu, CheckCircle2, Award, Terminal } from 'lucide-react';

export default function AboutMe() {
  const skills = [
    'UX Design',
    'Interaction Design',
    'Visual Design',
    'Wireframing',
    'Prototyping',
    'Design Systems',
    'Data Visualization',
    'User Flows',
    'Figma',
    'HTML/CSS',
    'JavaScript',
    'React / Next.js'
  ];

  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        <div className="about-layout">
          {/* Left Side: Bio Narrative */}
          <div className="about-text-content">
            <div className="section-tag">
              <User size={13} /> Background
            </div>
            <h2>About Me</h2>
            
            <p className="lead-p">
              I'm a final-year engineering student interested in product design, UX, and building digital products. My engineering background helps me think about both the user experience and the technical feasibility of the solutions I design.
            </p>

            <blockquote className="quote-box">
              "My engineering background gives me a strong understanding of how digital products are built. I enjoy working at the intersection of user needs, visual design, interaction, and technology."
            </blockquote>

            <p className="sub-p">
              Whether designing a streamlined invoicing flow, visualising high-volume retail analytics, or optimizing search interfaces for developers, I focus on clarity, simplicity, and building products that actually work.
            </p>
          </div>

          {/* Right Side: Skills Grid Card */}
          <div className="about-skills-card">
            <div className="skills-card-header">
              <Palette size={18} className="text-blue" />
              <h3>Design &amp; Technical Skills</h3>
            </div>
            <p className="skills-card-sub font-sm text-muted">
              Core competencies spanning UX research, design systems, and web implementation.
            </p>

            <div className="skills-pills-grid">
              {skills.map((skill) => (
                <div key={skill} className="skill-pill">
                  <CheckCircle2 size={13} className="text-blue" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
