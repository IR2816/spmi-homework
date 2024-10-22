import React, { useState, useEffect } from 'react';

const SignUp = ({ onSignUp }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [password, setPassword] = useState('');
  const [countdown, setCountdown] = useState(0);
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  const handleSignUp = (e) => {
    e.preventDefault();
    if (verificationCode !== '1234') {
      alert('Kode verifikasi salah. Kode yang benar adalah 1234.');
      return;
    }
    const userData = {
      email,
      username,
      password,
    };
    localStorage.setItem('users', JSON.stringify([...JSON.parse(localStorage.getItem('users') || '[]'), userData]));
    console.log('Pengguna baru terdaftar:', userData);
    
    setEmail('');
    setUsername('');
    setVerificationCode('');
    setPassword('');
    setIsCodeSent(false);
    
    if (onSignUp) {
      onSignUp(userData);
    }
  };

  const handleSendVerificationCode = () => {
    console.log('Mengirim kode verifikasi ke:', email);
    setIsCodeSent(true);
    setCountdown(30);
    alert('Kode verifikasi telah dikirim. Kode verifikasi adalah: 1234');
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-auto bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-xl">
      <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6 rounded-xl shadow-2xl w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Daftar</h1>
        <form onSubmit={handleSignUp} className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-1" htmlFor="email">
              Email
            </label>
            <input 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-black"
              id="email"
              type="email"
              placeholder="Masukkan email Anda"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-1" htmlFor="username">
              Username
            </label>
            <input 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-black"
              id="username"
              type="text"
              placeholder="Masukkan username Anda"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-1" htmlFor="verificationCode">
              Kode Verifikasi
            </label>
            <div className="flex space-x-2">
              <input 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-black"
                id="verificationCode"
                type="text"
                placeholder="Masukkan kode"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                required
              />
              <button 
                type="button"
                className={`bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-3 rounded-md transition duration-300 ease-in-out ${countdown > 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={handleSendVerificationCode}
                disabled={countdown > 0}
              >
                {countdown > 0 ? `${countdown}s` : 'Kirim'}
              </button>
            </div>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-1" htmlFor="password">
              Kata Sandi
            </label>
            <input 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-black"
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Masukkan kata sandi Anda"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="showPassword"
              checked={showPassword}
              onChange={toggleShowPassword}
              className="mr-2"
            />
            <label htmlFor="showPassword" className="text-sm text-gray-700">
              Tampilkan Kata Sandi
            </label>
          </div>
          <div> 
            <button 
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50" 
              type="submit"
            >
              Daftar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
