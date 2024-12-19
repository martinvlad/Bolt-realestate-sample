import React from 'react';
import { useLocation } from 'wouter';
import { ArrowLeft } from 'lucide-react';

export function Photos() {
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
      
      <h1 className="text-4xl font-bold mb-6">Photos</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[
          'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba',
          'https://images.unsplash.com/photo-1682687221038-404670f09ef1',
          'https://images.unsplash.com/photo-1682687220063-4742bd7fd538'
        ].map((url, index) => (
          <img
            key={index}
            src={`${url}?auto=format&fit=crop&w=500&q=80`}
            alt={`Gallery image ${index + 1}`}
            className="w-full h-64 object-cover rounded-lg hover:opacity-75 transition-opacity"
          />
        ))}
      </div>
    </div>
  );
}