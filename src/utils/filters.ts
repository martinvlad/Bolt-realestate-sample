import { Property } from '../types';
import { PropertyFilters } from '../types/filters';

export function filterProperties(properties: Property[], filters: PropertyFilters): Property[] {
  return properties.filter(property => 
    property.price >= filters.minPrice &&
    property.price <= filters.maxPrice &&
    (filters.type === 'all' || property.type === filters.type)
  );
}