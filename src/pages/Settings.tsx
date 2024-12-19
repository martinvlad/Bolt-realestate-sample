import React from 'react';
import { useLocation } from 'wouter';
import { ArrowLeft, Moon, Sun, Volume2, Wifi } from 'lucide-react';

export function Settings() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <button
        onClick={() => setLocation('/')}
        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8"
      >
        <ArrowLeft size={20} />
        Back to Desktop
      </button>
      
      <h1 className="text-4xl font-bold mb-6">Settings</h1>
      <div className="space-y-6 max-w-2xl">
        <div className="p-6 bg-gray-800 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Moon size={24} />
              <span className="text-lg">Dark Mode</span>
            </div>
            <button className="w-12 h-6 bg-blue-600 rounded-full relative">
              <span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
            </button>
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Volume2 size={24} />
              <span className="text-lg">Sound</span>
            </div>
            <input
              type="range"
              className="w-32 h-2 bg-gray-700 rounded-lg appearance-none"
              min="0"
              max="100"
              defaultValue="80"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Wifi size={24} />
              <span className="text-lg">Wi-Fi</span>
            </div>
            <button className="w-12 h-6 bg-blue-600 rounded-full relative">
              <span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}