import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight, MessageSquare, Send } from 'lucide-react';

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const email = "jitender51501@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/jitender-98855b281/";
  const githubUrl = "https://github.com/jitender-bot";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        <div className="contact-card">
          <div className="contact-status-tag">
            <span className="pulse-dot"></span>
            <span>Open for Internship Opportunities</span>
          </div>

          <h2>Let's build something useful.</h2>
          <p className="contact-text">
            I'm currently looking for Product Design Internship opportunities and would love to connect.
          </p>

          {/* Action Links */}
          <div className="contact-buttons-group">
            <a 
              href={`mailto:${email}`} 
              className="btn btn-accent contact-btn"
            >
              <Mail size={18} /> Email Me ({email})
            </a>

            <a 
              href={linkedinUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary contact-btn"
            >
              <LinkedinIcon size={18} /> LinkedIn <ArrowUpRight size={14} />
            </a>

            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary contact-btn"
            >
              <GithubIcon size={18} /> GitHub <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Helper Copy Action */}
          <div className="copy-action-row font-xs">
            <span className="text-muted">Need to copy email?</span>
            <button className="copy-btn font-mono" onClick={handleCopyEmail}>
              {copied ? (
                <>
                  <Check size={12} className="text-emerald" /> Copied jitender51501@gmail.com!
                </>
              ) : (
                <>
                  <Copy size={12} /> Copy Email
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
