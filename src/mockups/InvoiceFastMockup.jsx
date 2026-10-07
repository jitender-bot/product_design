import React, { useState } from 'react';
import { FileText, Plus, CheckCircle2, ArrowUpRight, DollarSign, Clock, Send } from 'lucide-react';

export default function InvoiceFastMockup() {
  const [activeTab, setActiveTab] = useState('create');
  const [amount, setAmount] = useState(1250);
  const [client, setClient] = useState('Acme Studios');
  const [status, setStatus] = useState('Draft');

  return (
    <div className="ui-mockup-container">
      {/* Mock Browser/App Header */}
      <div className="ui-header">
        <div className="ui-dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <div className="ui-address-bar">
          <FileText size={12} className="text-blue" />
          <span>invoicefast.app/workspace/new</span>
        </div>
        <div className="ui-badge-pill">Product Concept</div>
      </div>

      {/* Mock App Body */}
      <div className="ui-body">
        {/* Sidebar Mini Nav */}
        <div className="ui-sidebar">
          <div className="ui-logo">
            <div className="logo-box">IF</div>
            <span className="logo-text">InvoiceFast</span>
          </div>
          <div className="ui-nav-items">
            <button 
              className={`nav-item ${activeTab === 'create' ? 'active' : ''}`}
              onClick={() => setActiveTab('create')}
            >
              <Plus size={14} /> New Invoice
            </button>
            <button 
              className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
              onClick={() => setActiveTab('dashboard')}
            >
              <FileText size={14} /> Dashboard
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="ui-content">
          {activeTab === 'create' ? (
            <div className="invoice-builder-preview">
              <div className="preview-top-bar">
                <div>
                  <h4 className="preview-title">Create Invoice #INV-2026-08</h4>
                  <p className="preview-subtitle">Quick 3-step creation flow for small business owners</p>
                </div>
                <div className="status-badge-interactive">
                  <span className={`status-tag ${status.toLowerCase()}`}>{status}</span>
                </div>
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label>Client Name</label>
                  <input 
                    type="text" 
                    value={client} 
                    onChange={(e) => setClient(e.target.value)} 
                    placeholder="Enter client or business"
                  />
                </div>
                <div className="form-group">
                  <label>Amount ($)</label>
                  <input 
                    type="number" 
                    value={amount} 
                    onChange={(e) => setAmount(Number(e.target.value))} 
                  />
                </div>
              </div>

              <div className="items-table-mock">
                <div className="table-header">
                  <span>Item Description</span>
                  <span>Hours</span>
                  <span>Rate</span>
                  <span>Line Total</span>
                </div>
                <div className="table-row">
                  <span>UX Audit & Strategy Wireframes</span>
                  <span>15</span>
                  <span>$50</span>
                  <span>$750.00</span>
                </div>
                <div className="table-row">
                  <span>UI Design System Components</span>
                  <span>10</span>
                  <span>$50</span>
                  <span>${(amount - 750) > 0 ? (amount - 750).toFixed(2) : '500.00'}</span>
                </div>
              </div>

              <div className="action-row">
                <div className="total-display">
                  <span className="total-label">Total Amount:</span>
                  <span className="total-val">${amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                </div>
                <div className="button-group">
                  <button 
                    className="mock-btn secondary"
                    onClick={() => setStatus('Draft')}
                  >
                    Save Draft
                  </button>
                  <button 
                    className="mock-btn primary"
                    onClick={() => setStatus('Sent')}
                  >
                    <Send size={13} /> Send Invoice
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="invoice-dashboard-preview">
              <div className="stats-row">
                <div className="mini-stat-card">
                  <span className="stat-label">Total Revenue</span>
                  <span className="stat-value">$14,850.00</span>
                  <span className="stat-trend positive">+12.4% vs last month</span>
                </div>
                <div className="mini-stat-card">
                  <span className="stat-label">Outstanding</span>
                  <span className="stat-value">$2,400.00</span>
                  <span className="stat-trend neutral">2 invoices pending</span>
                </div>
              </div>

              <div className="recent-list font-sm">
                <div className="list-title">Recent Invoices</div>
                <div className="list-item">
                  <div className="item-info">
                    <FileText size={14} className="text-muted" />
                    <span>INV-2026-07 — {client}</span>
                  </div>
                  <span className="status-tag sent">Sent</span>
                  <span className="amount-col">${amount.toLocaleString()}</span>
                </div>
                <div className="list-item">
                  <div className="item-info">
                    <FileText size={14} className="text-muted" />
                    <span>INV-2026-06 — Nexus Labs</span>
                  </div>
                  <span className="status-tag paid">Paid</span>
                  <span className="amount-col">$3,150.00</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
