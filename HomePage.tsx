import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sprout, 
  Users, 
  TrendingUp, 
  Shield, 
  ArrowRight,
  CheckCircle,
  Star,
  MapPin
} from 'lucide-react';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: <Sprout className="h-8 w-8 text-green-600" />,
      title: 'Quality Seeds',
      description: 'Access premium seeds from verified suppliers with guaranteed quality and authenticity.'
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: 'Connect with Farmers',
      description: 'Direct connection between farmers and buyers, eliminating middlemen and increasing profits.'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
      title: 'Market Analytics',
      description: 'Real-time market prices and trends to help you make informed decisions.'
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: 'Secure Transactions',
      description: 'Protected transactions with verified users and secure payment methods.'
    }
  ];

  const categories = [
    {
      name: 'Seeds',
      description: 'Premium quality seeds for all crops',
      image: 'https://images.pexels.com/photos/4750344/pexels-photo-4750344.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: '/marketplace?category=seeds'
    },
    {
      name: 'Farmland',
      description: 'Rent or lease agricultural land',
      image: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: '/marketplace?category=farmland'
    },
    {
      name: 'Farm Labor',
      description: 'Skilled agricultural workers',
      image: 'https://images.pexels.com/photos/2112341/pexels-photo-2112341.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: '/marketplace?category=labor'
    },
    {
      name: 'Tools & Equipment',
      description: 'Modern farming tools and machinery',
      image: 'https://images.pexels.com/photos/4021315/pexels-photo-4021315.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: '/marketplace?category=tools'
    },
    {
      name: 'Crop Sales',
      description: 'Fresh produce direct from farms',
      image: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: '/marketplace?category=crops'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Organic Farmer',
      location: 'California',
      rating: 5,
      text: 'AgriConnect has transformed how I sell my produce. Direct connection with buyers means better prices and less waste.'
    },
    {
      name: 'Michael Chen',
      role: 'Restaurant Owner',
      location: 'New York',
      rating: 5,
      text: 'Finding fresh, local ingredients has never been easier. The quality is consistent and the farmers are reliable.'
    },
    {
      name: 'David Martinez',
      role: 'Farm Equipment Dealer',
      location: 'Texas',
      rating: 5,
      text: 'The platform has expanded my reach significantly. I can now connect with farmers across the region.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-blue-50 to-green-100 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Connecting Agriculture
              <span className="text-green-600 block">From Farm to Market</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join thousands of farmers and buyers on AgriConnect - the comprehensive marketplace 
              for seeds, farmland, labor, tools, and fresh produce. Build sustainable agricultural connections.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/auth/register"
                className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg"
              >
                Get Started Today
              </Link>
              <Link
                to="/marketplace"
                className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg border border-green-200"
              >
                Explore Marketplace
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose AgriConnect?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're building the future of agricultural commerce with innovative features designed for farmers and buyers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Our Marketplace
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From seeds to harvest, find everything you need for successful farming.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={category.link}
                className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="flex items-center text-green-600 font-medium">
                    <span>Explore {category.name}</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Thousands
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what our community members say about their AgriConnect experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <User className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <MapPin className="h-3 w-3 mr-1" />
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Agricultural Business?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Join AgriConnect today and connect with thousands of farmers and buyers across the agricultural value chain.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/auth/register"
              className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Start Free Today
            </Link>
            <Link
              to="/marketplace"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Browse Marketplace
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;