import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { PropertyList } from './components/PropertyList';
import { SearchFilters } from './components/SearchFilters';
import { properties } from './data/properties';
import { filterProperties } from './utils/filters';
import { PropertyFilters } from './types/filters';

export default function App() {
  const [filteredProperties, setFilteredProperties] = useState(properties);
  
  const handleSearch = (filters: PropertyFilters) => {
    const filtered = filterProperties(properties, filters);
    setFilteredProperties(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Find Your Dream Home</h1>
        <SearchFilters onSearch={handleSearch} />
        <PropertyList properties={filteredProperties} />
      </main>
    </div>
  );
}