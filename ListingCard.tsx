import React from 'react';
import { Heart, MapPin, User, Eye } from 'lucide-react';
import { Listing } from '../../types';

interface ListingCardProps {
  listing: Listing;
  viewMode: 'grid' | 'list';
}

const ListingCard: React.FC<ListingCardProps> = ({ listing, viewMode }) => {
  const formatPrice = (price: number, priceType: string, unit?: string) => {
    const formattedPrice = price.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    switch (priceType) {
      case 'per_unit':
        return `${formattedPrice}${unit ? ` per ${unit}` : ''}`;
      case 'per_day':
        return `${formattedPrice} per day`;
      case 'per_month':
        return `${formattedPrice} per month`;
      default:
        return formattedPrice;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'seeds':
        return 'bg-green-100 text-green-800';
      case 'farmland':
        return 'bg-blue-100 text-blue-800';
      case 'labor':
        return 'bg-purple-100 text-purple-800';
      case 'tools':
        return 'bg-orange-100 text-orange-800';
      case 'crops':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-200">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Image */}
          <div className="lg:w-48 lg:h-32 w-full h-48 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
            {listing.images && listing.images[0] ? (
              <img
                src={listing.images[0]}
                alt={listing.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <Eye className="h-8 w-8" />
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="flex justify-between items-start mb-2">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full capitalize ${getCategoryColor(listing.category)}`}>
                    {listing.category}
                  </span>
                  {listing.quantity && (
                    <span className="text-sm text-gray-500">
                      Qty: {listing.quantity}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-green-600 cursor-pointer">
                  {listing.title}
                </h3>
                <p className="text-gray-600 mb-3 line-clamp-2">
                  {listing.description}
                </p>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Heart className="h-5 w-5 text-gray-400 hover:text-red-500" />
              </button>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="mb-3 sm:mb-0">
                <p className="text-2xl font-bold text-green-600 mb-1">
                  {formatPrice(listing.price, listing.price_type, listing.unit)}
                </p>
                <div className="flex items-center text-gray-600 space-x-4">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{listing.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span className="text-sm">{listing.farmer?.full_name}</span>
                  </div>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="px-4 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors font-medium">
                  Contact Seller
                </button>
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-200">
      {/* Image */}
      <div className="relative h-48 bg-gray-200">
        {listing.images && listing.images[0] ? (
          <img
            src={listing.images[0]}
            alt={listing.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <Eye className="h-8 w-8" />
          </div>
        )}
        <button className="absolute top-3 right-3 p-2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full transition-colors">
          <Heart className="h-4 w-4 text-gray-600 hover:text-red-500" />
        </button>
        <div className="absolute top-3 left-3">
          <span className={`px-2 py-1 text-xs font-medium rounded-full capitalize ${getCategoryColor(listing.category)}`}>
            {listing.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 hover:text-green-600 cursor-pointer line-clamp-1">
          {listing.title}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {listing.description}
        </p>

        <div className="mb-3">
          <div className="flex items-center text-gray-600 text-sm mb-1">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="line-clamp-1">{listing.location}</span>
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <User className="h-4 w-4 mr-1" />
            <span className="line-clamp-1">{listing.farmer?.full_name}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <p className="text-lg font-bold text-green-600">
            {formatPrice(listing.price, listing.price_type, listing.unit)}
          </p>
          {listing.quantity && (
            <span className="text-sm text-gray-500">
              Qty: {listing.quantity}
            </span>
          )}
        </div>

        <div className="flex space-x-2">
          <button className="flex-1 px-3 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors text-sm font-medium">
            Contact
          </button>
          <button className="flex-1 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;