import React, { useState } from 'react';
import { BarChart3, TrendingUp, Filter, Layers, Database, ChevronDown, Check } from 'lucide-react';

export default function SalesLensMockup() {
  const [selectedRegion, setSelectedRegion] = useState('All Regions');
  const [selectedCategory, setSelectedCategory] = useState('Electronics');

  const chartBars = [
    { label: 'Wk 1', value: 65, fill: '#3B82F6' },
    { label: 'Wk 2', value: 88, fill: '#2563EB' },
    { label: 'Wk 3', value: 72, fill: '#3B82F6' },
    { label: 'Wk 4', value: 95, fill: '#1D4ED8' },
    { label: 'Wk 5', value: 84, fill: '#3B82F6' },
    { label: 'Wk 6', value: 98, fill: '#1E40AF' },
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
          <BarChart3 size={12} className="text-blue" />
          <span>saleslens.analytics/dashboard</span>
        </div>
        <div className="ui-badge-pill analytical">
          <Database size={11} /> 6,435 Records Analyzed
        </div>
      </div>

      {/* Main Container */}
      <div className="ui-body vertical">
        {/* Top Control Bar */}
        <div className="dashboard-control-bar">
          <div className="dash-title-block">
            <span className="dash-badge">Sales Performance &amp; Forecasting</span>
            <h4>Walmart Sales Analytics</h4>
          </div>
          <div className="filter-pills font-sm">
            <div className="filter-tag">
              <Filter size={12} /> {selectedRegion}
            </div>
            <div className="filter-tag accent">
              <Layers size={12} /> {selectedCategory}
            </div>
          </div>
        </div>

        {/* Analytics Grid */}
        <div className="dash-grid-layout">
          {/* KPI Cards */}
          <div className="dash-kpi-row">
            <div className="dash-kpi-card">
              <span className="kpi-title">Predictive Model R² Score</span>
              <div className="kpi-val-group">
                <span className="kpi-main-val">95.65%</span>
                <span className="kpi-tag highlight">Random Forest</span>
              </div>
              <span className="kpi-sub font-sm">Engineered on 6,435 sales records</span>
            </div>

            <div className="dash-kpi-card">
              <span className="kpi-title">Weekly Sales Trend</span>
              <div className="kpi-val-group">
                <span className="kpi-main-val">$1.24M</span>
                <span className="kpi-tag positive"><TrendingUp size={12} /> +8.3%</span>
              </div>
              <span className="kpi-sub font-sm">Across top retail categories</span>
            </div>
          </div>

          {/* Chart Area */}
          <div className="dash-chart-card">
            <div className="chart-header">
              <span className="chart-title font-sm font-semibold">Weekly Revenue vs Model Predictions</span>
              <span className="chart-legend font-xs">
                <span className="legend-dot blue"></span> Actual Sales
                <span className="legend-dot dark"></span> Forecasted
              </span>
            </div>

            <div className="chart-visual-bars">
              {chartBars.map((bar, idx) => (
                <div key={idx} className="chart-column">
                  <div className="bar-wrapper">
                    <div 
                      className="bar-fill" 
                      style={{ height: `${bar.value}%`, backgroundColor: bar.fill }} 
                      title={`${bar.label}: ${bar.value}% capacity`}
                    ></div>
                  </div>
                  <span className="bar-label font-xs">{bar.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
