import React, { useState } from 'react';
import { Search, Filter, PlaySquare, Zap, Cpu, Eye, Clock, CheckCircle } from 'lucide-react';

export default function YouTubeExplorerMockup() {
  const [searchQuery, setSearchQuery] = useState('Product Design Case Studies');
  const [selectedTag, setSelectedTag] = useState('UX Design');

  const videos = [
    { title: 'Designing for Complex Data Dashboards', channel: 'DesignSystems.io', views: '42K', duration: '18:40', tag: 'UX Design' },
    { title: 'Figma to Code Workflow Best Practices', channel: 'ProductLab', views: '89K', duration: '12:15', tag: 'Workflow' },
    { title: 'Micro-interactions & Motion Design Principles', channel: 'UI Craft', views: '31K', duration: '15:20', tag: 'Interaction' },
  ];

  return (
    <div className="ui-mockup-container">
      {/* Header */}
      <div className="ui-header">
        <div className="ui-dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <div className="ui-address-bar">
          <PlaySquare size={12} className="text-red" />
          <span>youtube-explorer.dev/search</span>
        </div>
        <div className="ui-badge-pill quota">
          <Zap size={11} className="text-amber" /> ~99% Quota Saved
        </div>
      </div>

      {/* Main Body */}
      <div className="ui-body vertical">
        {/* Search Bar Component */}
        <div className="yt-search-container">
          <div className="search-input-wrapper">
            <Search size={16} className="search-icon" />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search channel videos, topics, or transcripts..."
            />
          </div>
          <div className="filter-tags-row">
            {['All', 'UX Design', 'Workflow', 'Interaction'].map((tag) => (
              <button 
                key={tag}
                className={`tag-btn ${selectedTag === tag ? 'active' : ''}`}
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Content Explorer Results */}
        <div className="yt-results-grid">
          {videos
            .filter(v => selectedTag === 'All' || v.tag === selectedTag)
            .map((video, idx) => (
              <div key={idx} className="video-card-mock">
                <div className="thumb-placeholder">
                  <PlaySquare size={24} className="play-icon" />
                  <span className="duration-pill font-xs"><Clock size={10} /> {video.duration}</span>
                </div>
                <div className="video-meta">
                  <span className="v-title">{video.title}</span>
                  <div className="v-sub font-xs">
                    <span>{video.channel}</span>
                    <span>•</span>
                    <span><Eye size={10} /> {video.views} views</span>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Technical Efficiency Badge */}
        <div className="tech-banner font-xs">
          <span className="banner-icon"><Cpu size={13} /></span>
          <span><strong>Optimization Insight:</strong> Local caching &amp; indexed search reduce API calls by 99%, delivering instant queries without rate limit issues.</span>
        </div>
      </div>
    </div>
  );
}
