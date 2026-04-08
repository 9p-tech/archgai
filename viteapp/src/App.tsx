import React from 'react';
import './App.css';
import { TopNav } from './components/layout/TopNav';
import { SplitLayout } from './components/layout/SplitLayout';
import { BuildingProvider } from './context/BuildingContext';

function App() {
  return (
    <BuildingProvider>
      <div className="app-container">
        <TopNav />
        <SplitLayout 
          chatPanel={
            <div style={{ padding: '2rem', color: 'var(--text-secondary)' }}>
              {/* Chat components will go here */}
              Chat Interface Area
            </div>
          }
          visualizerPanel={
            <div style={{ padding: '2rem', display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              {/* Visualizer components will go here */}
              Building Visualizer Area
            </div>
          }
        />
      </div>
    </BuildingProvider>
  );
}

export default App;
