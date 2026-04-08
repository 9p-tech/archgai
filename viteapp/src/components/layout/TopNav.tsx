import React from 'react';
import { Building2 } from 'lucide-react';

export function TopNav() {
  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1rem 2rem',
      backgroundColor: 'var(--bg-secondary)',
      borderBottom: '1px solid var(--border-subtle)',
      height: '70px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <div style={{
          background: 'var(--accent-primary)',
          borderRadius: '8px',
          padding: '0.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Building2 size={20} color="white" />
        </div>
        <h1 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 600 }}>AI Architect</h1>
      </div>
      
      <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        <span style={{ marginRight: '1rem' }}>Hackathon Build</span>
        <span style={{ 
          background: 'rgba(16, 185, 129, 0.1)', 
          color: 'var(--accent-success)', 
          padding: '0.2rem 0.6rem', 
          borderRadius: '12px',
          fontSize: '0.8rem',
          fontWeight: 600
        }}>Online</span>
      </div>
    </header>
  );
}
