import React, { useState } from 'react';
import { MapPin, DollarSign, Calendar } from 'lucide-react';

const ListingFilters: React.FC = () => {
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [location, setLocation] = useState('');
  const [dateRange, setDateRange] = useState('');

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Price Range */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <DollarSign className="h-4 w-4 inline mr-1" />
          Price Range
        </label>
        <div className="flex space-x-2">
          <input
            type="number"
            placeholder="Min"
            value={priceRange.min}
            onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          <input
            type="number"
            placeholder="Max"
            value={priceRange.max}
            onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Location */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <MapPin className="h-4 w-4 inline mr-1" />
          Location
        </label>
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
      </div>

      {/* Date Range */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <Calendar className="h-4 w-4 inline mr-1" />
          Date Posted
        </label>
        <select
          value={dateRange}
          onChange={(e) => setDateRange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
        >
          <option value="">Any time</option>
          <option value="today">Today</option>
          <option value="week">This week</option>
          <option value="month">This month</option>
          <option value="quarter">Last 3 months</option>
        </select>
      </div>
    </div>
  );
};

export default ListingFilters;