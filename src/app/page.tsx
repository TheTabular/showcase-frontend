'use client'

import { useState, useEffect } from 'react';
import VoiceCloning from './components/VoiceCloning';
import GraphicDesign from './components/GraphicDesign';
import Python from './components/Python';
import AWS from './components/AWS';
import Overlay from './components/Overlay';
import VoiceCloningContent from './components/content/VoiceCloningContent';
import GraphicDesignContent from './components/content/GraphicDesignContent';
import PythonContent from './components/content/PythonContent';
import AWSContent from './components/content/AWSContent';

type ActiveService = 'voice-cloning' | 'graphic-design' | 'python' | 'aws' | null;

export default function Home() {
  const [activeService, setActiveService] = useState<ActiveService>(null);
  const [showBackButton, setShowBackButton] = useState(false);
  const [onBackCallback, setOnBackCallback] = useState<(() => void) | undefined>(undefined);

  // Prevent body scroll when overlay is open
  useEffect(() => {
    if (activeService !== null) {
      // Prevent scrolling and elastic scroll on mobile
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.documentElement.style.overflow = 'hidden';
    } else {
      // Restore scrolling
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.documentElement.style.overflow = '';
    }

    // Cleanup function to restore scroll on unmount
    return () => {
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.documentElement.style.overflow = '';
    };
  }, [activeService]);

  const handleServiceClick = (service: ActiveService) => {
    setActiveService(service);
  };

  const handleCloseOverlay = () => {
    setActiveService(null);
    setShowBackButton(false);
    setOnBackCallback(undefined);
  };

  const handleBackChange = (showBack: boolean, onBack?: () => void) => {
    setShowBackButton(showBack);
    setOnBackCallback(() => onBack);
  };

  const renderOverlayContent = () => {
    switch (activeService) {
      case 'voice-cloning':
        return <VoiceCloningContent onBackChange={handleBackChange} />;
      case 'graphic-design':
        return <GraphicDesignContent onBackChange={handleBackChange} />;
      case 'python':
        return <PythonContent onBackChange={handleBackChange} />;
      case 'aws':
        return <AWSContent onBackChange={handleBackChange} />;
      default:
        return null;
    }
  };

  return (
    <div className="h-screen bg-gray-700 overflow-hidden overscroll-none">
      {/* Service tiles section */}
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        <div onClick={() => handleServiceClick('voice-cloning')}>
          <VoiceCloning />
        </div>
        <div onClick={() => handleServiceClick('graphic-design')}>
          <GraphicDesign />
        </div>
        <div onClick={() => handleServiceClick('python')}>
          <Python />
        </div>
        <div onClick={() => handleServiceClick('aws')}>
          <AWS />
        </div>
      </div>
      
      <Overlay 
        isOpen={activeService !== null} 
        onClose={handleCloseOverlay}
        fullHeight={activeService === 'voice-cloning' || activeService === 'graphic-design' || activeService === 'python' || activeService === 'aws'}
        showBackButton={showBackButton}
        onBack={onBackCallback}
        emoji={activeService === 'voice-cloning' ? '🎤' : activeService === 'graphic-design' ? '🎨' : activeService === 'python' ? '🐍' : activeService === 'aws' ? '☁️' : undefined}
        title={activeService === 'voice-cloning' ? 'Voice Cloning' : activeService === 'graphic-design' ? 'Graphic Design' : activeService === 'python' ? 'Python' : activeService === 'aws' ? 'Amazon Web Services' : undefined}
      >
        {renderOverlayContent()}
      </Overlay>
    </div>
  );
}