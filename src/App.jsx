import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SelectedWork from './components/SelectedWork';
import DesignProcess from './components/DesignProcess';
import DesignPrinciples from './components/DesignPrinciples';
import AboutMe from './components/AboutMe';
import ToolsSection from './components/ToolsSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="portfolio-app">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Layout */}
      <main>
        {/* Hero Banner */}
        <Hero />

        {/* Selected Projects */}
        <SelectedWork />

        {/* Design Process */}
        <DesignProcess />

        {/* Design Principles */}
        <DesignPrinciples />

        {/* About Me Narrative & Skills */}
        <AboutMe />

        {/* Tools & Tech Stack */}
        <ToolsSection />

        {/* Contact CTA */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
