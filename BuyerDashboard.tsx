import React from 'react';
import { 
  Heart, 
  Search, 
  MessageSquare, 
  ShoppingCart,
  TrendingUp,
  Eye,
  Clock,
  Star
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const BuyerDashboard: React.FC = () => {
  const { user } = useAuth();

  const stats = [
    {
      title: 'Saved Items',
      value: '18',
      change: '3 new this week',
      icon: <Heart className="h-6 w-6 text-red-600" />,
      color: 'bg-red-50'
    },
    {
      title: 'Active Inquiries',
      value: '7',
      change: '2 responses pending',
      icon: <MessageSquare className="h-6 w-6 text-blue-600" />,
      color: 'bg-blue-50'
    },
    {
      title: 'Purchases',
      value: '12',
      change: '+3 this month',
      icon: <ShoppingCart className="h-6 w-6 text-green-600" />,
      color: 'bg-green-50'
    },
    {
      title: 'Spent',
      value: '$8,750',
      change: 'This year',
      icon: <TrendingUp className="h-6 w-6 text-purple-600" />,
      color: 'bg-purple-50'
    }
  ];

  const savedItems = [
    {
      id: '1',
      title: 'Premium Organic Tomato Seeds',
      farmer: 'John Smith Farms',
      price: '$25.99',
      location: 'California, USA',
      image: 'https://images.pexels.com/photos/4750344/pexels-photo-4750344.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'Available'
    },
    {
      id: '2',
      title: '50 Acre Fertile Farmland',
      farmer: 'Sarah Johnson',
      price: '$1,200/month',
      location: 'Iowa, USA',
      image: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'Available'
    },
    {
      id: '3',
      title: 'Fresh Organic Carrots',
      farmer: 'Lisa Chen Organics',
      price: '$2.50/lb',
      location: 'Oregon, USA',
      image: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'Low Stock'
    }
  ];

  const recentInquiries = [
    {
      id: '1',
      listing: 'John Deere Tractor',
      farmer: 'David Wilson',
      message: 'Interested in the tractor. Is it still available?',
      status: 'Responded',
      time: '2 hours ago'
    },
    {
      id: '2',
      listing: 'Experienced Farm Workers',
      farmer: 'Mike Rodriguez',
      message: 'Do you have workers available for harvest season?',
      status: 'Pending',
      time: '1 day ago'
    },
    {
      id: '3',
      listing: 'Premium Wheat Seeds',
      farmer: 'Tom Anderson',
      message: 'What is the minimum order quantity?',
      status: 'Responded',
      time: '2 days ago'
    }
  ];

  const recommendations = [
    {
      id: '1',
      title: 'High-Yield Corn Seeds',
      farmer: 'Green Valley Farms',
      price: '$45.00',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/4750344/pexels-photo-4750344.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '2',
      title: 'Organic Fertilizer',
      farmer: 'EcoGrow Solutions',
      price: '$32.99',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/4021315/pexels-photo-4021315.jpeg?auto=compress&cs=tinysrgb&w=400'
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
            Discover the best agricultural products and services
          </p>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2 font-medium">
              <Search className="h-5 w-5" />
              <span>Browse Marketplace</span>
            </button>
            <button className="bg-white text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2 font-medium border border-gray-300">
              <Heart className="h-5 w-5" />
              <span>Saved Items</span>
            </button>
            <button className="bg-white text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2 font-medium border border-gray-300">
              <MessageSquare className="h-5 w-5" />
              <span>My Inquiries</span>
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Saved Items */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">Saved Items</h2>
                <button className="text-green-600 hover:text-green-700 font-medium text-sm">
                  View All
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {savedItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600 mb-1">{item.farmer}</p>
                      <p className="text-sm text-gray-500">{item.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-green-600 mb-1">{item.price}</p>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        item.status === 'Available' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                        <Heart className="h-4 w-4 fill-current" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-green-600 transition-colors">
                        <Eye className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Recent Inquiries */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Recent Inquiries</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentInquiries.map((inquiry) => (
                    <div key={inquiry.id} className="p-3 bg-gray-50 rounded-lg">
                      <h4 className="font-medium text-gray-900 text-sm mb-1">{inquiry.listing}</h4>
                      <p className="text-xs text-gray-600 mb-2">{inquiry.farmer}</p>
                      <div className="flex items-center justify-between">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          inquiry.status === 'Responded' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {inquiry.status}
                        </span>
                        <span className="text-xs text-gray-500 flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {inquiry.time}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Recommended for You</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recommendations.map((item) => (
                    <div key={item.id} className="flex items-center space-x-3">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 text-sm mb-1">{item.title}</h4>
                        <p className="text-xs text-gray-600 mb-1">{item.farmer}</p>
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold text-green-600 text-sm">{item.price}</span>
                          <div className="flex items-center">
                            <Star className="h-3 w-3 text-yellow-400 fill-current" />
                            <span className="text-xs text-gray-600 ml-1">{item.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerDashboard;