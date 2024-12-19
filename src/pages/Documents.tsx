import React from 'react';
import { useLocation } from 'wouter';
import { ArrowLeft } from 'lucide-react';

export function Documents() {
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
      
      <h1 className="text-4xl font-bold mb-6">Documents</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Sample documents */}
        {['Project Proposal', 'Meeting Notes', 'Research Paper'].map((doc) => (
          <div
            key={doc}
            className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <h3 className="text-xl font-semibold mb-2">{doc}</h3>
            <p className="text-gray-400">Last modified: Today</p>
          </div>
        ))}
      </div>
    </div>
  );
}