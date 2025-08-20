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
        
        {/* Text with shifted copy effect */}
        <div className="relative">
          {/* Shifted/faded background copy */}
          <h2 
            className="text-white text-4xl font-bold text-center absolute" 
            style={{
              fontFamily: 'Arial, sans-serif',
              fontWeight: '900',
              letterSpacing: '0.05em',
              transform: 'translate(6px, 6px)',
              opacity: 0.4
            }}
          >
            Voice Cloning
          </h2>
          
          {/* Main text on top */}
          <h2 
            className="text-white text-4xl font-bold text-center relative" 
            style={{
              fontFamily: 'Arial, sans-serif',
              fontWeight: '900',
              letterSpacing: '0.05em',
              textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, -2px 0 0 #000, 2px 0 0 #000, 0 -2px 0 #000, 0 2px 0 #000'
            }}
          >
            Voice Cloning
          </h2>
        </div>
      </div>
    </div>
  );
}