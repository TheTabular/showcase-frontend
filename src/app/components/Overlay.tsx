interface OverlayProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  fullHeight?: boolean;
  onBack?: () => void;
  showBackButton?: boolean;
  emoji?: string;
  title?: string;
}

export default function Overlay({ isOpen, onClose, children, fullHeight = false, onBack, showBackButton = false, emoji, title }: OverlayProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Content container */}
      {fullHeight ? (
        <div className="relative min-h-screen flex items-center justify-center p-8 bg-black/40 backdrop-blur-sm" onClick={onClose}>
          <div className="relative bg-white/95 backdrop-blur-md rounded-lg shadow-2xl max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            {/* Header with navigation buttons */}
            <div className="flex items-center p-4 mb-4">
              {showBackButton && onBack ? (
                <button
                  onClick={onBack}
                  className="bg-gray-700 hover:bg-gray-600 rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center transition-all cursor-pointer mr-2 md:mr-4"
                >
                  <svg className="w-3 h-3 md:w-4 md:h-4 text-white font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                </button>
              ) : null}
              
              {/* Emoji and title */}
              {emoji && title && (
                <div className="flex items-center space-x-2 md:space-x-4 flex-1 whitespace-nowrap">
                  <div className="text-2xl md:text-4xl">{emoji}</div>
                  <h1 className="text-xl md:text-3xl font-bold text-gray-900">{title}</h1>
                </div>
              )}
              
              {/* Spacer to push close button to the right */}
              <div className="flex-1"></div>
              
              <button
                onClick={onClose}
                className="bg-gray-700 hover:bg-gray-600 rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center transition-all cursor-pointer"
              >
                <svg className="w-3 h-3 md:w-4 md:h-4 text-white font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="px-4 pb-4">
              {children}
            </div>
          </div>
        </div>
      ) : (
        <div className="relative min-h-screen flex items-center justify-center p-8 bg-black/40 backdrop-blur-sm" onClick={onClose}>
          <div className="relative bg-white/95 backdrop-blur-md rounded-lg shadow-2xl max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            {/* Header with navigation buttons */}
            <div className="flex items-center p-4 mb-4">
              {showBackButton && onBack ? (
                <button
                  onClick={onBack}
                  className="bg-gray-700 hover:bg-gray-600 rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center transition-all cursor-pointer mr-2 md:mr-4"
                >
                  <svg className="w-3 h-3 md:w-4 md:h-4 text-white font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                </button>
              ) : null}
              
              {/* Emoji and title */}
              {emoji && title && (
                <div className="flex items-center space-x-2 md:space-x-4 flex-1 whitespace-nowrap">
                  <div className="text-2xl md:text-4xl">{emoji}</div>
                  <h1 className="text-xl md:text-3xl font-bold text-gray-900">{title}</h1>
                </div>
              )}
              
              {/* Spacer to push close button to the right */}
              <div className="flex-1"></div>
              
              <button
                onClick={onClose}
                className="bg-gray-700 hover:bg-gray-600 rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center transition-all cursor-pointer"
              >
                <svg className="w-3 h-3 md:w-4 md:h-4 text-white font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-4">
              {children}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}