import React, { useState, useEffect } from 'react';
import SignUp from '../pages/SignUp';

const Content = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen pt-16 pl-[15%] relative">
      <div className="fixed top-20 right-4 bg-purple-600 text-white p-2 rounded-lg shadow-md z-50">
        <p className="text-lg font-bold">
          {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
        </p>
        <p className="text-xs">
          {currentTime.toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>
      <div className="max-w-7xl mx-auto p-8 pb-24">
        <h1 className="text-4xl font-extrabold text-purple-800 mb-8">Selamat Datang di Sistem Informasi Penelitian dan Pengabdian Masyarakat</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <h2 className="text-2xl font-semibold text-purple-600 mb-4">Penelitian Terbaru</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Pengembangan Teknologi Energi Terbarukan</li>
              <li>Studi Dampak Perubahan Iklim pada Ekosistem Lokal</li>
              <li>Inovasi dalam Pengolahan Limbah Plastik</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <h2 className="text-2xl font-semibold text-purple-600 mb-4">Program Pengabdian Masyarakat</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Pelatihan Kewirausahaan untuk UMKM</li>
              <li>Edukasi Kesehatan Masyarakat di Daerah Terpencil</li>
              <li>Pemberdayaan Petani melalui Teknologi Pertanian</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-purple-100 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-purple-800 mb-4">Pengumuman Penting</h2>
          <p className="text-gray-700 mb-4">Pendaftaran untuk Program Penelitian dan Pengabdian Masyarakat tahun 2023 telah dibuka. Batas akhir pengumpulan proposal: 30 September 2023.</p>
          <button 
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300"
            onClick={() => setShowSignUp(true)}
          >
            Daftar Sekarang
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-purple-600 mb-4">Statistik Penelitian</h3>
            <p className="text-3xl font-bold text-gray-800">250+</p>
            <p className="text-gray-600">Penelitian Aktif</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-purple-600 mb-4">Dana Hibah</h3>
            <p className="text-3xl font-bold text-gray-800">Rp 10M+</p>
            <p className="text-gray-600">Total Dana Tersalurkan</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-purple-600 mb-4">Mitra Kerjasama</h3>
            <p className="text-3xl font-bold text-gray-800">50+</p>
            <p className="text-gray-600">Institusi Mitra</p>
          </div>
        </div>
      </div>
      {showSignUp && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <SignUp />
            <button 
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
              onClick={() => setShowSignUp(false)}
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Content;
