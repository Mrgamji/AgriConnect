import React from 'react';
import { 
  Users, 
  Package, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle,
  XCircle,
  Eye,
  BarChart3,
  Calendar,
  MessageSquare
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const AdminDashboard: React.FC = () => {
  const { user } = useAuth();

  const stats = [
    {
      title: 'Total Users',
      value: '2,847',
      change: '+12% from last month',
      icon: <Users className="h-6 w-6 text-blue-600" />,
      color: 'bg-blue-50'
    },
    {
      title: 'Active Listings',
      value: '1,205',
      change: '+8% from last month',
      icon: <Package className="h-6 w-6 text-green-600" />,
      color: 'bg-green-50'
    },
    {
      title: 'Monthly Revenue',
      value: '$45,250',
      change: '+15% from last month',
      icon: <TrendingUp className="h-6 w-6 text-purple-600" />,
      color: 'bg-purple-50'
    },
    {
      title: 'Pending Reviews',
      value: '23',
      change: '5 urgent',
      icon: <AlertTriangle className="h-6 w-6 text-yellow-600" />,
      color: 'bg-yellow-50'
    }
  ];

  const categoryStats = [
    { name: 'Seeds', count: 342, percentage: 28 },
    { name: 'Crops', count: 289, percentage: 24 },
    { name: 'Tools & Equipment', count: 234, percentage: 19 },
    { name: 'Farmland', count: 198, percentage: 16 },
    { name: 'Farm Labor', count: 142, percentage: 13 }
  ];

  const pendingListings = [
    {
      id: '1',
      title: 'Premium Organic Seeds Collection',
      farmer: 'Green Valley Farms',
      category: 'Seeds',
      price: '$125.00',
      submitted: '2 hours ago',
      status: 'pending'
    },
    {
      id: '2',
      title: 'Professional Grade Irrigation System',
      farmer: 'AgroTech Solutions',
      category: 'Tools',
      price: '$2,500.00',
      submitted: '4 hours ago',
      status: 'pending'
    },
    {
      id: '3',
      title: '100 Acre Premium Farmland',
      farmer: 'Midwest Holdings',
      category: 'Land',
      price: '$3,200/month',
      submitted: '1 day ago',
      status: 'under_review'
    }
  ];

  const recentActivity = [
    {
      id: '1',
      type: 'user_registered',
      message: 'New farmer Sarah Johnson registered',
      time: '10 minutes ago',
      icon: <Users className="h-4 w-4 text-green-600" />
    },
    {
      id: '2',
      type: 'listing_approved',
      message: 'Listing "Organic Tomato Seeds" approved',
      time: '25 minutes ago',
      icon: <CheckCircle className="h-4 w-4 text-green-600" />
    },
    {
      id: '3',
      type: 'listing_rejected',
      message: 'Listing "Used Farming Equipment" rejected',
      time: '1 hour ago',
      icon: <XCircle className="h-4 w-4 text-red-600" />
    },
    {
      id: '4',
      type: 'inquiry_created',
      message: 'New inquiry on "Premium Wheat Seeds"',
      time: '2 hours ago',
      icon: <MessageSquare className="h-4 w-4 text-blue-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-600">
            Manage users, listings, and platform analytics
          </p>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2 font-medium">
              <Eye className="h-5 w-5" />
              <span>Review Listings</span>
            </button>
            <button className="bg-white text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2 font-medium border border-gray-300">
              <Users className="h-5 w-5" />
              <span>Manage Users</span>
            </button>
            <button className="bg-white text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2 font-medium border border-gray-300">
              <BarChart3 className="h-5 w-5" />
              <span>Analytics</span>
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
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
              <p className="text-xs text-green-600">{stat.change}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Pending Listings */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">Pending Listings</h2>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm font-medium">
                    {pendingListings.length} pending
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {pendingListings.map((listing) => (
                    <div key={listing.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900 mb-1">{listing.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span>{listing.farmer}</span>
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                            {listing.category}
                          </span>
                          <span className="font-semibold text-green-600">{listing.price}</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Submitted {listing.submitted}</p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
                          Approve
                        </button>
                        <button className="px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium">
                          Reject
                        </button>
                        <button className="px-3 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors text-sm font-medium">
                          Review
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Category Distribution */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Listing Distribution</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {categoryStats.map((category) => (
                    <div key={category.name} className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700">{category.name}</span>
                          <span className="text-sm text-gray-600">{category.count} listings</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-green-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${category.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 p-2 bg-gray-100 rounded-full">
                        {activity.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900">{activity.message}</p>
                        <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Quick Stats</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Farmers</span>
                    <span className="font-semibold text-gray-900">1,432</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Buyers</span>
                    <span className="font-semibold text-gray-900">1,415</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Active Today</span>
                    <span className="font-semibold text-gray-900">487</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">New This Week</span>
                    <span className="font-semibold text-green-600">+89</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;