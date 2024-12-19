export interface PropertyFilters {
  minPrice: number;
  maxPrice: number;
  type: 'all' | 'house' | 'apartment' | 'condo';
}