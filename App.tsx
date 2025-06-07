import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import HomePage from './components/Home/HomePage';
import LoginForm from './components/Auth/LoginForm';
import RegisterForm from './components/Auth/RegisterForm';
import MarketplacePage from './components/Marketplace/MarketplacePage';
import FarmerDashboard from './components/Dashboard/FarmerDashboard';
import BuyerDashboard from './components/Dashboard/BuyerDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import ProtectedRoute from './components/Auth/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/auth/login" element={<LoginForm />} />
              <Route path="/auth/register" element={<RegisterForm />} />
              <Route path="/marketplace" element={<MarketplacePage />} />
              <Route
                path="/dashboard/farmer"
                element={
                  <ProtectedRoute requiredRole="farmer">
                    <FarmerDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/dashboard/buyer"
                element={
                  <ProtectedRoute requiredRole="buyer">
                    <BuyerDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/dashboard/admin"
                element={
                  <ProtectedRoute requiredRole="admin">
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;