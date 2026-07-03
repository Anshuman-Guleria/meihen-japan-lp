import React, { useState, useEffect } from 'react';
import HomePage from './components/HomePage';
import FormPage from './components/FormPage';
import ThankYouPage from './components/ThankYouPage';
import { PageType } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  // Scroll to the top of the screen whenever the active page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-brand-green selection:text-white" id="app-root-container">
      
      {/* Visual top progress bar indicating step state */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-slate-100 flex" id="step-progress-bar">
        <div 
          className="bg-brand-green h-full transition-all duration-500 ease-out"
          style={{ 
            width: currentPage === 'home' ? '33.33%' : currentPage === 'form' ? '66.66%' : '100%' 
          }}
          id="progress-indicator-line"
        />
      </div>

      {/* State-driven router rendering the three responsive requested pages */}
      {currentPage === 'home' && (
        <HomePage 
          onNavigate={(targetPage) => setCurrentPage(targetPage)} 
        />
      )}

      {currentPage === 'form' && (
        <FormPage 
          onBack={() => setCurrentPage('home')} 
          onSubmitSuccess={() => setCurrentPage('thank-you')} 
        />
      )}

      {currentPage === 'thank-you' && (
        <ThankYouPage 
          onBackToHome={() => setCurrentPage('home')} 
        />
      )}
    </div>
  );
}
