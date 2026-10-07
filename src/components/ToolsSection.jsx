import React from 'react';
import { Wrench, Code2, Database, GitBranch, Image, Layers } from 'lucide-react';

export default function ToolsSection() {
  const toolsList = [
    { name: 'Figma', category: 'Interface Design & Mockups', icon: '🎨' },
    { name: 'FigJam', category: 'User Flows & Brainstorming', icon: '💡' },
    { name: 'Next.js', category: 'React Framework', icon: '⚡' },
    { name: 'React', category: 'Frontend Components', icon: '⚛️' },
    { name: 'JavaScript', category: 'Web Logic & Interactions', icon: '📜' },
    { name: 'Prisma', category: 'Database ORM', icon: '💎' },
    { name: 'Git', category: 'Version Control', icon: '🌿' },
    { name: 'Adobe Tools', category: 'Visual Asset Editing', icon: '🖼️' }
  ];

  return (
    <section className="section-padding tools-section">
      <div className="container">
        {/* Header */}
        <div className="section-header center">
          <div className="section-tag">
            <Wrench size={13} /> Toolkit
          </div>
          <h2>Tools &amp; Stack</h2>
          <p>
            Software and tools I use to take ideas from low-fidelity wireframes to interactive prototypes and code.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="tools-grid">
          {toolsList.map((tool) => (
            <div key={tool.name} className="tool-card">
              <div className="tool-icon">{tool.icon}</div>
              <div className="tool-info">
                <h4 className="tool-name">{tool.name}</h4>
                <span className="tool-cat font-xs text-muted">{tool.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
