// src/components/auth/Modal.jsx
import React, { useState } from 'react';

export default function Modal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    nim: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login data:', formData);
    // Handle login logic here
    alert(`Login attempted with NIM: ${formData.nim}`);
    onClose();
  };

  const handleClose = () => {
    setFormData({ nim: '', password: '' });
    onClose();
  };

  // Jika modal tidak open, return null
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-2xl shadow-2xl w-full max-w-md relative overflow-hidden">
        
        {/* Background Pattern/Decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 rounded-full -mr-16 -mt-16 opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-red-400 rounded-full -ml-12 -mb-12 opacity-20"></div>
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition duration-200 z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Content */}
        <div className="relative z-1 p-8">
          
          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-yellow-400 text-2xl font-bold mb-2">
              21.0G
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Silahkan Login terlebih dahulu
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-red-400 mx-auto mb-4"></div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* NIM/NIP Field */}
            <div>
              <label htmlFor="nim" className="block text-sm font-medium text-yellow-300 mb-2">
                <strong>Masukkan NIM/NIP Anda</strong>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="nim"
                  name="nim"
                  value={formData.nim}
                  onChange={handleChange}
                  placeholder="NIM/NIP"
                  className="block w-full pl-10 pr-3 py-4 bg-blue-800 border border-blue-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition duration-200"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-yellow-300 mb-2">
                <strong>Masukkan Password Anda</strong>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="block w-full pl-10 pr-3 py-4 bg-blue-800 border border-blue-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition duration-200"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-500 to-red-500 text-white py-4 px-4 rounded-lg font-bold text-lg hover:from-yellow-600 hover:to-red-600 transform hover:scale-105 transition duration-200 shadow-lg"
            >
              Login
            </button>
          </form>

          {/* Additional Info Sections */}
          <div className="mt-8 space-y-4">
            
            {/* Pablo Pico Section */}
            <div className="bg-blue-800 bg-opacity-50 p-4 rounded-lg border border-blue-600">
              <div className="flex items-center justify-between mb-2">
                <span className="text-yellow-300 font-semibold">Pablo Pico</span>
                <span className="text-gray-400 text-sm">1 day ago</span>
              </div>
              <p className="text-white text-sm">Sikimiri Ham Olympiad</p>
            </div>

            {/* Olympic Medal Section */}
            <div className="bg-yellow-500 bg-opacity-20 p-4 rounded-lg border border-yellow-400">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-semibold">2022 Num Olympiad</span>
                <span className="text-gray-300 text-sm">2 days ago</span>
              </div>
              <p className="text-yellow-200 font-bold">Gold Medal Winner</p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-blue-700">
            <p className="text-center text-blue-300 text-sm font-semibold">
              INTEGRITY, TRUST, COMPASSION
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}