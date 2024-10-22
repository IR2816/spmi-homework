import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('currentUser');
    if (loggedInUser) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (email, password) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      setIsLoggedIn(true);
      localStorage.setItem('currentUser', JSON.stringify(user));
      setShowLogin(false);
    } else {
      alert('Email atau password salah');
    }
  };

  const handleSignUp = (userData) => {
    setShowSignUp(false);
    alert('Pendaftaran berhasil! Silakan login.');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('currentUser');
    setShowDropdown(false);
    setShowLogoutConfirm(false);
  };

  return (
    <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white p-4 fixed top-0 left-0 right-0 z-20 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-4xl font-bold tracking-wider">
          <span className="text-yellow-300">Logo</span>
        </Link>
        <div className="flex space-x-4 items-center">
          {!isLoggedIn ? (
            <>
              <button 
                className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-purple-600 transition duration-300 transform hover:scale-105"
                onClick={() => setShowLogin(true)}
              >
                Masuk
              </button>
              <button 
                className="bg-yellow-300 text-purple-600 px-6 py-2 rounded-full hover:bg-yellow-400 transition duration-300 transform hover:scale-105"
                onClick={() => setShowSignUp(true)}
              >
                Daftar
              </button>
            </>
          ) : (
            <div className="relative">
              <button 
                className="flex items-center space-x-2 text-white hover:text-yellow-300 transition duration-300"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <img src="https://via.placeholder.com/40" alt="Profile" className="w-10 h-10 rounded-full border-2 border-white" />
                <span>Irfan Muhamad Ilham</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-xl py-1 z-50">
                  <button 
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-purple-100 transition duration-300"
                    onClick={() => setShowLogoutConfirm(true)}
                  >
                    Keluar
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md w-full">
            <Login onLogin={handleLogin} />
            <button 
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300 transform hover:scale-105"
              onClick={() => setShowLogin(false)}
            >
              Tutup
            </button>
          </div>
        </div>
      )}
      {showSignUp && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md w-full">
            <SignUp onSignUp={handleSignUp} />
            <button 
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300 transform hover:scale-105"
              onClick={() => setShowSignUp(false)}
            >
              Tutup
            </button>
          </div>
        </div>
      )}
      {showLogoutConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4 text-purple-600">Konfirmasi Keluar</h2>
            <p className="mb-6 text-gray-600">Apakah Anda yakin ingin keluar?</p>
            <div className="flex justify-end space-x-4">
              <button 
                className="bg-gray-300 text-gray-800 px-6 py-2 rounded-full hover:bg-gray-400 transition duration-300 transform hover:scale-105"
                onClick={() => setShowLogoutConfirm(false)}
              >
                Batal
              </button>
              <button 
                className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition duration-300 transform hover:scale-105"
                onClick={handleLogout}
              >
                Keluar
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
