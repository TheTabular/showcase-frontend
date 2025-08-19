'use client'

import { useState } from 'react';
import VoiceCloning from './components/VoiceCloning';
import GraphicDesign from './components/GraphicDesign';
import Overlay from './components/Overlay';
import VoiceCloningContent from './components/content/VoiceCloningContent';
import GraphicDesignContent from './components/content/GraphicDesignContent';

type ActiveService = 'voice-cloning' | 'graphic-design' | null;

export default function Home() {
  const [activeService, setActiveService] = useState<ActiveService>(null);
  const [showBackButton, setShowBackButton] = useState(false);
  const [onBackCallback, setOnBackCallback] = useState<(() => void) | undefined>(undefined);

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
      default:
        return null;
    }
  };

  return (
    <div className="h-screen bg-gray-700">
      {/* Service tiles section */}
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        <div onClick={() => handleServiceClick('voice-cloning')}>
          <VoiceCloning />
        </div>
        <div onClick={() => handleServiceClick('graphic-design')}>
          <GraphicDesign />
        </div>
      </div>
      
      <Overlay 
        isOpen={activeService !== null} 
        onClose={handleCloseOverlay}
        fullHeight={activeService === 'voice-cloning' || activeService === 'graphic-design'}
        showBackButton={showBackButton}
        onBack={onBackCallback}
      >
        {renderOverlayContent()}
      </Overlay>
    </div>
  );
}