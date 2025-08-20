'use client';

import { useState } from 'react';
import Image from 'next/image';

// API Configuration
const API_BASE_URL = 'https://14qltjpal3.execute-api.us-east-1.amazonaws.com/dev';

// API response interfaces
interface APIClipData {
  filename: string;
  path: string;
  presigned_url?: string; // Add presigned URL field
}

interface APIResponse {
  success: boolean;
  original_clip?: APIClipData;
  cloned_clip?: APIClipData;
  error?: string;
}

// API client function
const callAPI = async (endpoint: string): Promise<APIResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
};

// Helper function to construct audio URLs - now expects presigned URLs from API
const constructAudioURL = (path: string) => {
  // The API should return presigned URLs, so we don't need to construct them
  return path;
};

interface VoiceClip {
  filename: string;
  url: string;
  size: number;
  size_formatted: string;
  last_modified: string;
  s3_key: string;
}

interface TranscriptionData {
  original_transcription: string;
  generated_text: string;
  timestamp: string;
  source_file: string;
  speed_setting: number;
  whisper_result: {
    text: string;
    segments: Record<string, unknown>[];
    language: string;
  };
}

interface VoiceCloningData {
  original_clip: VoiceClip | null;
  cloned_clip: VoiceClip | null;
  transcription: TranscriptionData | null;
}



interface VoiceProfile {
  id: string;
  name: string;
  image: string;
  description: string;
}

const voiceProfiles: VoiceProfile[] = [
  {
    id: 'spongebob',
    name: 'SpongeBob SquarePants',
    image: '/voice-profiles/spongebob.jpg',
    description: ''
  },
  {
    id: 'peter_griffin',
    name: 'Peter Griffin',
    image: '/voice-profiles/peter griffin.jpg',
    description: ''
  }
];

export default function VoiceCloningContent({ onBackChange }: { onBackChange?: (showBack: boolean, onBack?: () => void) => void }) {
  const [, setVoiceClips] = useState<VoiceClip[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [playingClip, setPlayingClip] = useState<string | null>(null);
  const [selectedProfile, setSelectedProfile] = useState<VoiceProfile | null>(null);
  const [cloningData, setCloningData] = useState<VoiceCloningData | null>(null);

  const fetchVoiceClips = async (profileId: string) => {
    try {
      setLoading(true);
      setError(null);
      
      // Use the showcase path with query parameters
      const data = await callAPI(`/showcase?character=${profileId}`);
      
      if (data.success && data.original_clip && data.cloned_clip) {
        // Convert the API response to the format the component expects
        const voiceCloningData = {
          original_clip: {
            filename: data.original_clip.filename,
            url: data.original_clip.presigned_url || constructAudioURL(data.original_clip.path),
            size: 0,
            size_formatted: '0 KB',
            last_modified: new Date().toISOString(),
            s3_key: ''
          },
          cloned_clip: {
            filename: data.cloned_clip.filename,
            url: data.cloned_clip.presigned_url || constructAudioURL(data.cloned_clip.path),
            size: 0,
            size_formatted: '0 KB',
            last_modified: new Date().toISOString(),
            s3_key: ''
          },
          transcription: null
        };
        
        setCloningData(voiceCloningData);
        setVoiceClips([voiceCloningData.original_clip, voiceCloningData.cloned_clip]);
      } else {
        setError(data.error || 'Failed to fetch voice cloning data');
      }
    } catch (err) {
      setError('Unable to connect to API Gateway.');
      console.error('Error fetching voice cloning data:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleProfileClick = (profile: VoiceProfile) => {
    setSelectedProfile(profile);
    fetchVoiceClips(profile.id);
    if (onBackChange) {
      onBackChange(true, () => handleBackClick());
    }
  };

  const handleBackClick = () => {
    setSelectedProfile(null);
    setVoiceClips([]);
    setCloningData(null);
    setPlayingClip(null);
    if (onBackChange) {
      onBackChange(false);
    }
  };

  const handlePlayPause = (filename: string) => {
    if (playingClip === filename) {
      setPlayingClip(null);
    } else {
      setPlayingClip(filename);
    }
  };

  if (!selectedProfile) {
    return (
      <div className="space-y-4 max-w-4xl mx-auto">
        <div className="flex items-center mb-4">
          <div className="flex-grow h-px bg-black"></div>
          <h3 className="text-xl font-semibold text-gray-900 px-4">Select A Profile</h3>
          <div className="flex-grow h-px bg-black"></div>
        </div>

        <div className="flex justify-center">
          <div className="flex flex-wrap gap-4 max-w-lg justify-center">
              {voiceProfiles.map((profile) => (
                <div
                  key={profile.id}
                  onClick={() => handleProfileClick(profile)}
                  className="bg-white border border-gray-200 rounded-lg p-3 cursor-pointer hover:shadow-lg transition-shadow w-32"
                >
                  <div className="aspect-square mb-2">
                    <Image
                      src={profile.image}
                      alt={profile.name}
                      width={120}
                      height={120}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-center text-xs leading-tight">
                    {profile.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-8">
        <p className="text-red-600 mb-4">{error}</p>
        <button
          onClick={() => fetchVoiceClips(selectedProfile.id)}
          className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="max-w-4xl mx-auto">
        {/* Voice Profile Section */}
        <div>
          <div className="flex items-center mb-3">
            <div className="flex-grow h-px bg-black"></div>
            <h3 className="text-xl font-semibold text-gray-900 px-4">Selected Profile</h3>
            <div className="flex-grow h-px bg-black"></div>
          </div>
          <div className="flex justify-center">
            <div className="bg-white border border-gray-200 rounded-lg p-3 mb-8">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <Image
                    src={selectedProfile.image}
                    alt={selectedProfile.name}
                    width={60}
                    height={60}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{selectedProfile.name}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-4 border-gray-300 border-t-gray-700"></div>
          </div>
        ) : cloningData ? (
          <div className="space-y-8">
            {/* Sample Clip Section */}
            {cloningData.original_clip && (
              <div>
                <div className="flex items-center mb-3">
                  <div className="flex-grow h-px bg-black"></div>
                  <h3 className="text-xl font-semibold text-gray-900 px-4">Sample Clip</h3>
                  <div className="flex-grow h-px bg-black"></div>
                </div>
                <div className="flex justify-center">
                  <VoiceClipCard
                    clip={cloningData.original_clip}
                    isPlaying={playingClip === cloningData.original_clip.filename}
                    onPlayPause={() => handlePlayPause(cloningData.original_clip!.filename)}
                  />
                </div>
              </div>
            )}

            {/* Cloned Voice Section */}
            {cloningData.cloned_clip && (
              <div>
                <div className="flex items-center mb-3">
                  <div className="flex-grow h-px bg-black"></div>
                  <h3 className="text-xl font-semibold text-gray-900 px-4">Cloned Voice</h3>
                  <div className="flex-grow h-px bg-black"></div>
                </div>
                <div className="flex justify-center">
                  <VoiceClipCard
                    clip={cloningData.cloned_clip}
                    isPlaying={playingClip === cloningData.cloned_clip.filename}
                    onPlayPause={() => handlePlayPause(cloningData.cloned_clip!.filename)}
                  />
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-4 border-gray-300 border-t-gray-700"></div>
          </div>
        )}
      </div>
    </div>
  );
}

interface VoiceClipCardProps {
  clip: VoiceClip;
  isPlaying: boolean;
  onPlayPause: () => void;
}

function VoiceClipCard({ clip, isPlaying, onPlayPause }: VoiceClipCardProps) {
  const [duration, setDuration] = useState<string>('--:--');
  const [currentTime, setCurrentTime] = useState<string>('0:00');
  const [audioReady, setAudioReady] = useState(false);
  const [audioError, setAudioError] = useState(false);

  const handleLoadedMetadata = (e: React.SyntheticEvent<HTMLAudioElement>) => {
    const audio = e.currentTarget;
    const minutes = Math.floor(audio.duration / 60);
    const seconds = Math.floor(audio.duration % 60);
    setDuration(`${minutes}:${seconds.toString().padStart(2, '0')}`);
    setAudioReady(true);
    setAudioError(false);
  };

  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLAudioElement>) => {
    const audio = e.currentTarget;
    const minutes = Math.floor(audio.currentTime / 60);
    const seconds = Math.floor(audio.currentTime % 60);
    setCurrentTime(`${minutes}:${seconds.toString().padStart(2, '0')}`);
  };

  const handleEnded = () => {
    onPlayPause();
  };

  const handleError = (e: React.SyntheticEvent<HTMLAudioElement>) => {
    console.error('Audio loading error:', e);
    console.error('Audio URL:', clip.url);
    
    // Log the actual error details
    const audio = e.currentTarget;
    console.error('Audio error code:', audio.error?.code);
    console.error('Audio error message:', audio.error?.message);
    
    setAudioError(true);
    setAudioReady(false);
  };

  const handleCanPlay = () => {
    setAudioReady(true);
    setAudioError(false);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 transition-shadow w-full max-w-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button
            onClick={onPlayPause}
            disabled={!audioReady && !audioError}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
              audioReady || audioError
                ? 'bg-purple-500 hover:bg-purple-400 text-white' 
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            {isPlaying ? (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
              </svg>
            ) : (
              <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>

          <div className="text-sm text-gray-500">
            {audioError ? 'Error loading' : `${currentTime} / ${duration}`}
          </div>
        </div>

        <div className="flex-1 mx-4">
          <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-purple-500 transition-all duration-300"
              style={{ 
                width: audioReady && duration !== '--:--' ? 
                  `${(parseTime(currentTime) / parseTime(duration)) * 100}%` : '0%' 
              }}
            />
          </div>
        </div>
      </div>

      <audio
        src={clip.url}
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        onError={handleError}
        onCanPlay={handleCanPlay}
        onLoadStart={() => console.log('Audio load started for:', clip.url)}
        onLoadedData={() => console.log('Audio data loaded for:', clip.url)}
        preload="metadata"
        ref={(audio) => {
          if (audio) {
            // Log the audio element for debugging
            console.log('Audio element created with URL:', clip.url);
            
            if (isPlaying && audio.paused) {
              audio.play().catch((playError) => {
                console.error('Audio play error:', playError);
              });
            } else if (!isPlaying && !audio.paused) {
              audio.pause();
            }
          }
        }}
      />
    </div>
  );
}

function parseTime(timeString: string): number {
  const [minutes, seconds] = timeString.split(':').map(Number);
  return minutes * 60 + seconds;
}
