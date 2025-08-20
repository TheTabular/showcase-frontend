export default function GraphicDesign() {
  return (
    <div 
      className="h-full w-full flex flex-col justify-center items-center cursor-pointer relative overflow-hidden group"
      style={{
        background: 'linear-gradient(135deg, #cc0000 0%, #cc6600 12.5%, #cccc00 25%, #66cc00 37.5%, #00cc00 50%, #00cc66 62.5%, #00cccc 75%, #0066cc 87.5%, #0000cc 100%)'
      }}
    >
      {/* Dark overlay on hover */}
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300 z-10"></div>
      
      {/* Content stays in front */}
      <div className="relative z-20 text-center">
        <div className="text-8xl mb-6 text-center">🎨</div>
        <h2 
          className="text-white text-4xl font-black text-center bg-black px-4 py-2 rounded-lg" 
          style={{ 
            fontFamily: 'Creative, Comic Sans MS, Arial Black, Helvetica, sans-serif', 
            fontWeight: '900', 
            letterSpacing: '0.05em'
          }}
        >
          Graphic Design
        </h2>
      </div>
    </div>
  );
}
