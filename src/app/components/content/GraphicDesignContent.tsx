'use client';

import Image from 'next/image';
import { useState } from 'react';

interface IconItem {
  id: number;
  filename: string;
  path: string;
  color: {
    hex: string;
    rgb: string;
  };
}

export default function GraphicDesignContent({ onBackChange }: { onBackChange?: (showBack: boolean, onBack?: () => void) => void }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedIconColor, setSelectedIconColor] = useState<{hex: string, rgb: string} | null>(null);
  const [selectedPaletteIndex, setSelectedPaletteIndex] = useState<number>(0);
  const [copiedStatus, setCopiedStatus] = useState<Record<string, boolean>>({});

  // Generate the icon items array with associated colors
  const iconItems: IconItem[] = Array.from({ length: 9 }, (_, index) => ({
    id: index + 1,
    filename: `${index + 1}.png`,
    path: `/graphic-design-examples/icons/${index + 1}.png`,
    color: {
      hex: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE'][index],
      rgb: ['rgb(255, 107, 107)', 'rgb(78, 205, 196)', 'rgb(69, 183, 209)', 'rgb(150, 206, 180)', 'rgb(255, 234, 167)', 'rgb(221, 160, 221)', 'rgb(152, 216, 200)', 'rgb(247, 220, 111)', 'rgb(187, 143, 206)'][index]
    }
  }));

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedStatus(prev => ({ ...prev, [key]: true }));
      setTimeout(() => {
        setCopiedStatus(prev => ({ ...prev, [key]: false }));
      }, 1500);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  };

  const handleIconClick = (iconColor: {hex: string, rgb: string}) => {
    setSelectedIconColor(iconColor);
    setSelectedPaletteIndex(-1); // Reset palette selection when icon is clicked
  };

  const handlePaletteClick = (paletteColor: {hex: string, rgb: string}, index: number) => {
    setSelectedIconColor(paletteColor);
    setSelectedPaletteIndex(index);
  };

  return (
    <div className="p-0 pt-0 px-4 pb-4">
      <div className="space-y-4">
        <div className="text-center">
          <div className="text-6xl mb-4">🎨</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Graphic Design</h1>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Background Removal</h3>
          <div className="flex justify-center">
            <div className="flex items-center gap-6 max-w-4xl">
              {/* Original Image */}
              <div className="text-center">
                <div className="mb-2">
                  <Image
                    src="/graphic-design-examples/original.jpg"
                    alt="Original"
                    width={200}
                    height={200}
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
              
              {/* Arrow */}
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
              
              {/* Processed Image */}
              <div className="text-center">
                <div className="mb-2">
                  <Image
                    src="/graphic-design-examples/post.png"
                    alt="Background Removed"
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Color Codes</h3>
          <div className="flex justify-center">
            <div className="max-w-2xl w-full">
              {/* Selected Color Display */}
              <div className="mb-6">
                <div className="w-full h-32 rounded-md border border-solid border-gray-300 shadow-inner mb-3" style={{backgroundColor: selectedIconColor ? selectedIconColor.hex : 'rgb(54, 90, 66)'}}>
                  <div className="flex justify-between items-end h-full p-3">
                    <span 
                      className="font-mono text-sm px-2 py-1 rounded bg-white/70 cursor-pointer hover:bg-white transition-colors" 
                      title="Click to copy HEX"
                      onClick={() => copyToClipboard(selectedIconColor ? selectedIconColor.hex : '#365a42', 'main-hex')}
                    >
                      {copiedStatus['main-hex'] ? 'Copied' : (selectedIconColor ? selectedIconColor.hex : '#365a42')}
                    </span>
                    <span 
                      className="font-mono text-sm px-2 py-1 rounded bg-white/70 cursor-pointer hover:bg-white transition-colors" 
                      title="Click to copy RGB"
                      onClick={() => copyToClipboard(selectedIconColor ? selectedIconColor.rgb : 'rgb(54, 90, 66)', 'main-rgb')}
                    >
                      {copiedStatus['main-rgb'] ? 'Copied' : (selectedIconColor ? selectedIconColor.rgb : 'rgb(54, 90, 66)')}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Multi-Color Palette Strip */}
              <div className="mb-4">
                <div className="h-12 w-full flex rounded-md overflow-hidden border border-solid border-gray-300">
                  <div className="flex-1 h-full cursor-pointer relative" title="Color 1" style={{backgroundColor: 'rgb(54, 90, 66)'}} onClick={() => handlePaletteClick({hex: '#365a42', rgb: 'rgb(54, 90, 66)'}, 0)}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-3 h-3 rounded-full bg-white/60 ${selectedPaletteIndex === 0 ? '' : 'hidden'}`}></div>
                    </div>
                  </div>
                  <div className="flex-1 h-full cursor-pointer relative" title="Color 2" style={{backgroundColor: 'rgb(37, 68, 49)'}} onClick={() => handlePaletteClick({hex: '#254431', rgb: 'rgb(37, 68, 49)'}, 1)}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-3 h-3 rounded-full bg-white/60 ${selectedPaletteIndex === 1 ? '' : 'hidden'}`}></div>
                    </div>
                  </div>
                  <div className="flex-1 h-full cursor-pointer relative" title="Color 3" style={{backgroundColor: 'rgb(28, 55, 38)'}} onClick={() => handlePaletteClick({hex: '#1c3726', rgb: 'rgb(28, 55, 38)'}, 2)}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-3 h-3 rounded-full bg-white/60 ${selectedPaletteIndex === 2 ? '' : 'hidden'}`}></div>
                    </div>
                  </div>
                  <div className="flex-1 h-full cursor-pointer relative" title="Color 4" style={{backgroundColor: 'rgb(8, 8, 7)'}} onClick={() => handlePaletteClick({hex: '#080807', rgb: 'rgb(8, 8, 7)'}, 3)}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-3 h-3 rounded-full bg-white/60 ${selectedPaletteIndex === 3 ? '' : 'hidden'}`}></div>
                    </div>
                  </div>
                  <div className="flex-1 h-full cursor-pointer relative" title="Color 5" style={{backgroundColor: 'rgb(17, 40, 26)'}} onClick={() => handlePaletteClick({hex: '#11281a', rgb: 'rgb(17, 40, 26)'}, 4)}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-3 h-3 rounded-full bg-white/60 ${selectedPaletteIndex === 4 ? '' : 'hidden'}`}></div>
                    </div>
                  </div>
                  <div className="flex-1 h-full cursor-pointer relative" title="Color 6" style={{backgroundColor: 'rgb(50, 48, 33)'}} onClick={() => handlePaletteClick({hex: '#323021', rgb: 'rgb(50, 48, 33)'}, 5)}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-3 h-3 rounded-full bg-white/60 ${selectedPaletteIndex === 5 ? '' : 'hidden'}`}></div>
                    </div>
                  </div>
                  <div className="flex-1 h-full cursor-pointer relative" title="Color 7" style={{backgroundColor: 'rgb(69, 65, 53)'}} onClick={() => handlePaletteClick({hex: '#454135', rgb: 'rgb(69, 65, 53)'}, 6)}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-3 h-3 rounded-full bg-white/60 ${selectedPaletteIndex === 6 ? '' : 'hidden'}`}></div>
                    </div>
                  </div>
                  <div className="flex-1 h-full cursor-pointer relative" title="Color 8" style={{backgroundColor: 'rgb(91, 89, 72)'}} onClick={() => handlePaletteClick({hex: '#5b5948', rgb: 'rgb(91, 89, 72)'}, 7)}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-3 h-3 rounded-full bg-white/60 ${selectedPaletteIndex === 7 ? '' : 'hidden'}`}></div>
                    </div>
                  </div>
                  <div className="flex-1 h-full cursor-pointer relative" title="Color 9" style={{backgroundColor: 'rgb(106, 110, 92)'}} onClick={() => handlePaletteClick({hex: '#6a6e5c', rgb: 'rgb(106, 110, 92)'}, 8)}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-3 h-3 rounded-full bg-white/60 ${selectedPaletteIndex === 8 ? '' : 'hidden'}`}></div>
                    </div>
                  </div>
                  <div className="flex-1 h-full cursor-pointer relative" title="Color 10" style={{backgroundColor: 'rgb(127, 129, 117)'}} onClick={() => handlePaletteClick({hex: '#7f8175', rgb: 'rgb(127, 129, 117)'}, 9)}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-3 h-3 rounded-full bg-white/60 ${selectedPaletteIndex === 9 ? '' : 'hidden'}`}></div>
                    </div>
                  </div>
                  <div className="flex-1 h-full cursor-pointer relative" title="Color 11" style={{backgroundColor: 'rgb(245, 245, 165)'}} onClick={() => handlePaletteClick({hex: '#f5f5a5', rgb: 'rgb(245, 245, 165)'}, 10)}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-3 h-3 rounded-full bg-white/60 ${selectedPaletteIndex === 10 ? '' : 'hidden'}`}></div>
                    </div>
                  </div>
                  <div className="flex-1 h-full cursor-pointer relative" title="Color 12" style={{backgroundColor: 'rgb(161, 140, 6)'}} onClick={() => handlePaletteClick({hex: '#a18c06', rgb: 'rgb(161, 140, 6)'}, 11)}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-3 h-3 rounded-full bg-white/60 ${selectedPaletteIndex === 11 ? '' : 'hidden'}`}></div>
                    </div>
                  </div>
                  <div className="flex-1 h-full cursor-pointer relative" title="Color 13" style={{backgroundColor: 'rgb(154, 159, 147)'}} onClick={() => handlePaletteClick({hex: '#9a9f93', rgb: 'rgb(154, 159, 147)'}, 12)}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-3 h-3 rounded-full bg-white/60 ${selectedPaletteIndex === 12 ? '' : 'hidden'}`}></div>
                    </div>
                  </div>
                  <div className="flex-1 h-full cursor-pointer relative" title="Color 14" style={{backgroundColor: 'rgb(234, 236, 124)'}} onClick={() => handlePaletteClick({hex: '#eaec7c', rgb: 'rgb(234, 236, 124)'}, 13)}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-3 h-3 rounded-full bg-white/60 ${selectedPaletteIndex === 13 ? '' : 'hidden'}`}></div>
                    </div>
                  </div>
                  <div className="flex-1 h-full cursor-pointer relative" title="Color 15" style={{backgroundColor: 'rgb(211, 194, 29)'}} onClick={() => handlePaletteClick({hex: '#d3c21d', rgb: 'rgb(211, 194, 29)'}, 14)}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-3 h-3 rounded-full bg-white/60 ${selectedPaletteIndex === 14 ? '' : 'hidden'}`}></div>
                    </div>
                  </div>
                  <div className="flex-1 h-full cursor-pointer relative" title="Color 16" style={{backgroundColor: 'rgb(115, 101, 9)'}} onClick={() => handlePaletteClick({hex: '#736509', rgb: 'rgb(115, 101, 9)'}, 15)}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-3 h-3 rounded-full bg-white/60 ${selectedPaletteIndex === 15 ? '' : 'hidden'}`}></div>
                    </div>
                  </div>
                  <div className="flex-1 h-full cursor-pointer relative" title="Color 17" style={{backgroundColor: 'rgb(225, 219, 77)'}} onClick={() => handlePaletteClick({hex: '#e1db4d', rgb: 'rgb(225, 219, 77)'}, 16)}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-3 h-3 rounded-full bg-white/60 ${selectedPaletteIndex === 16 ? '' : 'hidden'}`}></div>
                    </div>
                  </div>
                  <div className="flex-1 h-full cursor-pointer relative" title="Color 18" style={{backgroundColor: 'rgb(165, 213, 12)'}} onClick={() => handlePaletteClick({hex: '#a5d50c', rgb: 'rgb(165, 213, 12)'}, 17)}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-3 h-3 rounded-full bg-white/60 ${selectedPaletteIndex === 17 ? '' : 'hidden'}`}></div>
                    </div>
                  </div>
                  <div className="flex-1 h-full cursor-pointer relative" title="Color 19" style={{backgroundColor: 'rgb(69, 7, 9)'}} onClick={() => handlePaletteClick({hex: '#450709', rgb: 'rgb(69, 7, 9)'}, 18)}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-3 h-3 rounded-full bg-white/60 ${selectedPaletteIndex === 18 ? '' : 'hidden'}`}></div>
                    </div>
                  </div>
                  <div className="flex-1 h-full cursor-pointer relative" title="Color 20" style={{backgroundColor: 'rgb(188, 199, 178)'}} onClick={() => handlePaletteClick({hex: '#bcc7b2', rgb: 'rgb(188, 199, 178)'}, 19)}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-3 h-3 rounded-full bg-white/60 ${selectedPaletteIndex === 19 ? '' : 'hidden'}`}></div>
                    </div>
                  </div>
                  <div className="flex-1 h-full cursor-pointer relative" title="Color 21" style={{backgroundColor: 'rgb(240, 251, 208)'}} onClick={() => handlePaletteClick({hex: '#f0fbd0', rgb: 'rgb(240, 251, 208)'}, 20)}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-3 h-3 rounded-full bg-white/60 ${selectedPaletteIndex === 20 ? '' : 'hidden'}`}></div>
                    </div>
                  </div>
                  <div className="flex-1 h-full cursor-pointer relative" title="Color 22" style={{backgroundColor: 'rgb(184, 68, 85)'}} onClick={() => handlePaletteClick({hex: '#b84455', rgb: 'rgb(184, 68, 85)'}, 21)}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-3 h-3 rounded-full bg-white/60 ${selectedPaletteIndex === 21 ? '' : 'hidden'}`}></div>
                    </div>
                  </div>
                  <div className="flex-1 h-full cursor-pointer relative" title="Color 23" style={{backgroundColor: 'rgb(138, 199, 220)'}} onClick={() => handlePaletteClick({hex: '#8ac7dc', rgb: 'rgb(138, 199, 220)'}, 22)}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-3 h-3 rounded-full bg-white/60 ${selectedPaletteIndex === 22 ? '' : 'hidden'}`}></div>
                    </div>
                  </div>
                  <div className="flex-1 h-full cursor-pointer relative" title="Color 24" style={{backgroundColor: 'rgb(93, 139, 165)'}} onClick={() => handlePaletteClick({hex: '#5d8ba5', rgb: 'rgb(93, 139, 165)'}, 23)}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-3 h-3 rounded-full bg-white/60 ${selectedPaletteIndex === 23 ? '' : 'hidden'}`}></div>
                    </div>
                  </div>
                  <div className="flex-1 h-full cursor-pointer relative" title="Color 25" style={{backgroundColor: 'rgb(146, 170, 79)'}} onClick={() => handlePaletteClick({hex: '#92aa4f', rgb: 'rgb(146, 170, 79)'}, 24)}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-3 h-3 rounded-full bg-white/60 ${selectedPaletteIndex === 24 ? '' : 'hidden'}`}></div>
                    </div>
                  </div>
                  <div className="flex-1 h-full cursor-pointer relative" title="Color 26" style={{backgroundColor: 'rgb(242, 148, 23)'}} onClick={() => handlePaletteClick({hex: '#f29417', rgb: 'rgb(242, 148, 23)'}, 25)}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-3 h-3 rounded-full bg-white/60 ${selectedPaletteIndex === 25 ? '' : 'hidden'}`}></div>
                    </div>
                  </div>
                  <div className="flex-1 h-full cursor-pointer relative" title="Color 27" style={{backgroundColor: 'rgb(46, 79, 57)'}} onClick={() => handlePaletteClick({hex: '#2e4f39', rgb: 'rgb(46, 79, 57)'}, 26)}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-3 h-3 rounded-full bg-white/60 ${selectedPaletteIndex === 26 ? '' : 'hidden'}`}></div>
                    </div>
                  </div>
                  <div className="flex-1 h-full cursor-pointer relative" title="Color 28" style={{backgroundColor: 'rgb(62, 89, 61)'}} onClick={() => handlePaletteClick({hex: '#3e593d', rgb: 'rgb(62, 89, 61)'}, 27)}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-3 h-3 rounded-full bg-white/60 ${selectedPaletteIndex === 27 ? '' : 'hidden'}`}></div>
                    </div>
                  </div>
                  <div className="flex-1 h-full cursor-pointer relative" title="Color 29" style={{backgroundColor: 'rgb(63, 98, 74)'}} onClick={() => handlePaletteClick({hex: '#3f624a', rgb: 'rgb(63, 98, 74)'}, 28)}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-3 h-3 rounded-full bg-white/60 ${selectedPaletteIndex === 28 ? '' : 'hidden'}`}></div>
                    </div>
                  </div>
                  <div className="flex-1 h-full cursor-pointer relative" title="Color 30" style={{backgroundColor: 'rgb(27, 26, 21)'}} onClick={() => handlePaletteClick({hex: '#1b1a15', rgb: 'rgb(27, 26, 21)'}, 29)}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-3 h-3 rounded-full bg-white/60 ${selectedPaletteIndex === 29 ? '' : 'hidden'}`}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Icons</h3>
          <div className="flex justify-center">
            <div className="hidden lg:flex gap-6">
              {iconItems.map((icon) => (
                <div key={icon.id} className="text-center flex-shrink-0">
                  <div className="flex justify-center mb-2">
                    <Image
                      src={icon.path}
                      alt={`Icon ${icon.id}`}
                      width={60}
                      height={60}
                      className="object-contain cursor-pointer hover:scale-110 transition-transform"
                      priority={icon.id <= 6}
                      onClick={() => handleIconClick(icon.color)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Grid layout for smaller screens */}
          <div className="grid grid-cols-3 gap-1 max-w-md mx-auto lg:hidden">
            {iconItems.map((icon) => (
              <div key={`grid-${icon.id}`} className="text-center">
                <div className="flex justify-center mb-2">
                  <Image
                    src={icon.path}
                    alt={`Icon ${icon.id}`}
                    width={60}
                    height={60}
                    className="object-contain cursor-pointer hover:scale-110 transition-transform"
                    priority={icon.id <= 6}
                    onClick={() => handleIconClick(icon.color)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
