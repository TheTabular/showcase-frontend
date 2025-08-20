import React from 'react';
import Image from 'next/image';

const Python: React.FC = () => {
  return (
    <div className="h-full bg-gradient-to-br from-blue-600 to-yellow-400 flex items-center justify-center cursor-pointer relative overflow-hidden group">
      {/* Dark overlay on hover */}
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300 z-10"></div>
      
      {/* Content stays in front */}
      <div className="text-center text-white relative z-20">
        <div className="mb-4">
          <Image 
            src="/python.png" 
            alt="Python" 
            width={100} 
            height={100}
            className="mx-auto"
          />
        </div>
        <h2 
          className="text-4xl font-bold" 
          style={{ 
            textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, -2px 0 0 #000, 2px 0 0 #000, 0 -2px 0 #000, 0 2px 0 #000'
          }}
        >
          Python
        </h2>
      </div>
    </div>
  );
};

export default Python;
