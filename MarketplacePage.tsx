import React, { useState, useEffect } from 'react';
import { Search, Filter, Grid, List, MapPin, Star, Heart, Eye } from 'lucide-react';
import { Listing } from '../../types';
import ListingCard from './ListingCard';
import ListingFilters from './ListingFilters';

const MarketplacePage: React.FC = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [filteredListings, setFilteredListings] = useState<Listing[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [loading, setLoading] = useState(true);

  // Mock data - Replace with Supabase calls
  const mockListings: Listing[] = [
    {
      id: '1',
      title: 'Premium Organic Tomato Seeds',
      description: 'High-quality organic tomato seeds with 95% germination rate. Perfect for commercial farming.',
      category: 'seeds',
      price: 25.99,
      price_type: 'per_unit',
      unit: 'packet',
      quantity: 100,
      location: 'California, USA',
      farmer_id: '1',
      farmer: {
        id: '1',
        email: 'farmer@example.com',
        full_name: 'John Smith',
        role: 'farmer',
        location: 'California, USA',
        created_at: '2024-01-01',
        updated_at: '2024-01-01'
      },
      images: ['https://images.pexels.com/photos/4750344/pexels-photo-4750344.jpeg?auto=compress&cs=tinysrgb&w=400'],
      status: 'active',
      created_at: '2024-01-15',
      updated_at: '2024-01-15'
    },
    {
      id: '2',
      title: '50 Acre Fertile Farmland for Rent',
      description: 'Prime agricultural land with irrigation system. Suitable for row crops and vegetables.',
      category: 'farmland',
      price: 1200,
      price_type: 'per_month',
      location: 'Iowa, USA',
      farmer_id: '2',
      farmer: {
        id: '2',
        email: 'landowner@example.com',
        full_name: 'Sarah Johnson',
        role: 'farmer',
        location: 'Iowa, USA',
        created_at: '2024-01-01',
        updated_at: '2024-01-01'
      },
      images: ['https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=400'],
      status: 'active',
      created_at: '2024-01-10',
      updated_at: '2024-01-10'
    },
    {
      id: '3',
      title: 'Experienced Farm Workers Available',
      description: 'Team of 5 experienced farm workers available for seasonal work. Harvest specialists.',
      category: 'labor',
      price: 150,
      price_type: 'per_day',
      location: 'Texas, USA',
      farmer_id: '3',
      farmer: {
        id: '3',
        email: 'contractor@example.com',
        full_name: 'Mike Rodriguez',
        role: 'farmer',
        location: 'Texas, USA',
        created_at: '2024-01-01',
        updated_at: '2024-01-01'
      },
      images: ['https://images.pexels.com/photos/2112341/pexels-photo-2112341.jpeg?auto=compress&cs=tinysrgb&w=400'],
      status: 'active',
      created_at: '2024-01-12',
      updated_at: '2024-01-12'
    },
    {
      id: '4',
      title: 'John Deere Tractor - Excellent Condition',
      description: 'Well-maintained John Deere tractor, perfect for medium-scale farming operations.',
      category: 'tools',
      price: 45000,
      price_type: 'fixed',
      location: 'Nebraska, USA',
      farmer_id: '4',
      farmer: {
        id: '4',
        email: 'equipment@example.com',
        full_name: 'David Wilson',
        role: 'farmer',
        location: 'Nebraska, USA',
        created_at: '2024-01-01',
        updated_at: '2024-01-01'
      },
      images: ['https://images.pexels.com/photos/4021315/pexels-photo-4021315.jpeg?auto=compress&cs=tinysrgb&w=400'],
      status: 'active',
      created_at: '2024-01-08',
      updated_at: '2024-01-08'
    },
    {
      id: '5',
      title: 'Fresh Organic Carrots - Direct from Farm',
      description: 'Fresh, organic carrots harvested this week. Perfect for wholesale buyers.',
      category: 'crops',
      price: 2.50,
      price_type: 'per_unit',
      unit: 'lb',
      quantity: 500,
      location: 'Oregon, USA',
      farmer_id: '5',
      farmer: {
        id: '5',
        email: 'organic@example.com',
        full_name: 'Lisa Chen',
        role: 'farmer',
        location: 'Oregon, USA',
        created_at: '2024-01-01',
        updated_at: '2024-01-01'
      },
      images: ['https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=400'],
      status: 'active',
      created_at: '2024-01-14',
      updated_at: '2024-01-14'
    }
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setListings(mockListings);
      setFilteredListings(mockListings);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    let filtered = listings;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(listing =>
        listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        listing.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        listing.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(listing => listing.category === selectedCategory);
    }

    setFilteredListings(filtered);
  }, [listings, searchTerm, selectedCategory]);

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'seeds', label: 'Seeds' },
    { value: 'farmland', label: 'Farmland' },
    { value: 'labor', label: 'Farm Labor' },
    { value: 'tools', label: 'Tools & Equipment' },
    { value: 'crops', label: 'Crop Sales' },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading marketplace...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Agricultural Marketplace</h1>
          <p className="text-gray-600">
            Discover seeds, farmland, labor, tools, and fresh produce from trusted farmers
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search for products, locations, or farmers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Filter Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2"
            >
              <Filter className="h-5 w-5" />
              <span>Filters</span>
            </button>

            {/* View Mode Toggle */}
            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-3 ${viewMode === 'grid' ? 'bg-green-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'} transition-colors`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-3 ${viewMode === 'list' ? 'bg-green-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'} transition-colors`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Extended Filters */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <ListingFilters />
            </div>
          )}
        </div>

        {/* Results */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            Showing {filteredListings.length} of {listings.length} results
          </p>
          <select className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent">
            <option>Sort by: Newest</option>
            <option>Sort by: Price (Low to High)</option>
            <option>Sort by: Price (High to Low)</option>
            <option>Sort by: Location</option>
          </select>
        </div>

        {/* Listings Grid/List */}
        {filteredListings.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">No listings found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or filters</p>
          </div>
        ) : (
          <div className={viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' 
            : 'space-y-4'
          }>
            {filteredListings.map((listing) => (
              <ListingCard 
                key={listing.id} 
                listing={listing} 
                viewMode={viewMode}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MarketplacePage;