import React from 'react';
import { 
  Plus, 
  TrendingUp, 
  Eye, 
  MessageSquare, 
  Package,
  DollarSign,
  Users,
  BarChart3
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const FarmerDashboard: React.FC = () => {
  const { user } = useAuth();

  const stats = [
    {
      title: 'Active Listings',
      value: '12',
      change: '+2 this week',
      icon: <Package className="h-6 w-6 text-green-600" />,
      color: 'bg-green-50'
    },
    {
      title: 'Total Views',
      value: '2,847',
      change: '+15% from last month',
      icon: <Eye className="h-6 w-6 text-blue-600" />,
      color: 'bg-blue-50'
    },
    {
      title: 'Inquiries',
      value: '28',
      change: '5 new today',
      icon: <MessageSquare className="h-6 w-6 text-purple-600" />,
      color: 'bg-purple-50'
    },
    {
      title: 'Revenue',
      value: '$12,450',
      change: '+8% from last month',
      icon: <DollarSign className="h-6 w-6 text-green-600" />,
      color: 'bg-green-50'
    }
  ];

  const recentListings = [
    {
      id: '1',
      title: 'Premium Organic Tomato Seeds',
      category: 'Seeds',
      price: '$25.99',
      status: 'Active',
      views: 142,
      inquiries: 8
    },
    {
      id: '2',
      title: 'John Deere Tractor',
      category: 'Equipment',
      price: '$45,000',
      status: 'Active',
      views: 89,
      inquiries: 12
    },
    {
      id: '3',
      title: '50 Acre Farmland',
      category: 'Land',
      price: '$1,200/month',
      status: 'Pending',
      views: 203,
      inquiries: 15
    }
  ];

  const recentInquiries = [
    {
      id: '1',
      buyer: 'John Smith',
      listing: 'Premium Organic Tomato Seeds',
      message: 'Interested in bulk pricing for 100 packets...',
      time: '2 hours ago',
      status: 'new'
    },
    {
      id: '2',
      buyer: 'Sarah Johnson',
      listing: 'John Deere Tractor',
      message: 'Is this tractor still available? Can I schedule a viewing?',
      time: '4 hours ago',
      status: 'responded'
    },
    {
      id: '3',
      buyer: 'Mike Davis',
      listing: '50 Acre Farmland',
      message: 'What is included in the monthly rent?',
      time: '1 day ago',
      status: 'responded'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.full_name}!
          </h1>
          <p className="text-gray-600">
            Manage your listings and connect with buyers
          </p>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2 font-medium">
              <Plus className="h-5 w-5" />
              <span>Create New Listing</span>
            </button>
            <button className="bg-white text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2 font-medium border border-gray-300">
              <BarChart3 className="h-5 w-5" />
              <span>View Analytics</span>
            </button>
            <button className="bg-white text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2 font-medium border border-gray-300">
              <MessageSquare className="h-5 w-5" />
              <span>Messages</span>
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  {stat.icon}
                </div>
                <TrendingUp className="h-4 w-4 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
              <p className="text-xs text-green-600">{stat.change}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Listings */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">Recent Listings</h2>
                <button className="text-green-600 hover:text-green-700 font-medium text-sm">
                  View All
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentListings.map((listing) => (
                  <div key={listing.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 mb-1">{listing.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span>{listing.category}</span>
                        <span className="font-semibold text-green-600">{listing.price}</span>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          listing.status === 'Active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {listing.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{listing.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageSquare className="h-4 w-4" />
                        <span>{listing.inquiries}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Inquiries */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">Recent Inquiries</h2>
                <button className="text-green-600 hover:text-green-700 font-medium text-sm">
                  View All
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentInquiries.map((inquiry) => (
                  <div key={inquiry.id} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <Users className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{inquiry.buyer}</p>
                          <p className="text-sm text-gray-600">{inquiry.listing}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          inquiry.status === 'new' 
                            ? 'bg-blue-100 text-blue-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {inquiry.status}
                        </span>
                        <span className="text-xs text-gray-500">{inquiry.time}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">{inquiry.message}</p>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700 transition-colors">
                        Reply
                      </button>
                      <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm hover:bg-gray-300 transition-colors">
                        Mark as Read
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerDashboard;