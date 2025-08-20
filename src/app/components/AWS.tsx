import React from 'react';
import Image from 'next/image';

const AWS: React.FC = () => {
  return (
    <div className="h-full cursor-pointer relative overflow-hidden group flex items-center justify-center" style={{ background: 'linear-gradient(to bottom right, #262f3e, #ff9a07)' }}>
      {/* Dark overlay on hover */}
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300 z-10"></div>
      
      {/* Content stays in front */}
      <div className="text-center text-white relative z-20">
        <div className="mb-4">
          <Image 
            src="/aws.png" 
            alt="AWS" 
            width={100} 
            height={100}
            className="mx-auto"
          />
        </div>
        <h2 
          className="text-4xl font-bold bg-black px-4 py-2 rounded-lg"
        >
          AWS
        </h2>
      </div>
    </div>
  );
};

export default AWS;
