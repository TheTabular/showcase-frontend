export default function VoiceCloning() {
  return (
    <div 
      className="h-full w-full flex flex-col justify-center items-center cursor-pointer relative overflow-hidden group"
      style={{
        background: 'linear-gradient(135deg, #4c1d95 0%, #7c3aed 25%, #a855f7 50%, #c084fc 75%, #e879f9 100%)'
      }}
    >
      {/* Dark overlay on hover */}
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300 z-10"></div>
      
      {/* Content stays in front */}
      <div className="relative z-20 text-center">
        <div className="text-8xl mb-6 text-center">🎤</div>
        
        {/* Text with shifted copy effect + black background */}
        <div className="relative inline-block">
          {/* Main text with black background bar */}
          <h2 
            className="text-white text-4xl font-bold text-center bg-black px-4 py-2 rounded-lg" 
            style={{
              zIndex: 3
            }}
          >
            Voice Cloning
          </h2>
          
          {/* Shifted/faded background copy and position relative to main text */}
          <h2 
            className="text-white text-4xl font-bold text-center absolute top-1.5 left-4" 
            style={{
              transform: 'translate(6px, 6px)',
              opacity: 0.4,
              zIndex: 1
            }}
          >
            Voice Cloning
          </h2>
        </div>
      </div>
    </div>
  );
}