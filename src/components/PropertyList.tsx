import { PropertyCard } from './PropertyCard';
import { Property } from '../types';

interface PropertyListProps {
  properties: Property[];
}

export function PropertyList({ properties }: PropertyListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map(property => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}