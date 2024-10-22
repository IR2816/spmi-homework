import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignUp from './SignUp';
import Popup from '../components/Popup';

const Pendidikan = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen pl-[15%] pt-16">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-purple-800 mb-8">Program Pendidikan dan Penelitian</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-2xl font-semibold text-purple-600 mb-4">Pemrograman Dasar</h3>
            <p className="text-gray-700 mb-4">Pelajari dasar-dasar pemrograman menggunakan bahasa populer seperti Python dan Java. Kursus ini cocok untuk pemula yang ingin memulai karir di bidang teknologi informasi.</p>
            <Link to="/pemrograman-dasar" className="text-purple-600 hover:text-purple-800 font-semibold text-lg">Pelajari lebih lanjut &rarr;</Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-2xl font-semibold text-purple-600 mb-4">Pengembangan Web</h3>
            <p className="text-gray-700 mb-4">Kuasai teknologi pengembangan web modern seperti HTML5, CSS3, dan JavaScript. Anda akan belajar membuat website yang responsif dan interaktif.</p>
            <Link to="/pengembangan-web" className="text-purple-600 hover:text-purple-800 font-semibold text-lg">Pelajari lebih lanjut &rarr;</Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-2xl font-semibold text-purple-600 mb-4">Basis Data</h3>
            <p className="text-gray-700 mb-4">Pelajari konsep dan implementasi basis data menggunakan SQL dan NoSQL. Anda akan memahami cara mengelola dan mengoptimalkan penyimpanan data.</p>
            <Link to="/basis-data" className="text-purple-600 hover:text-purple-800 font-semibold text-lg">Pelajari lebih lanjut &rarr;</Link>
          </div>
        </div>
        
        <div className="bg-purple-100 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-purple-800 mb-4">Pengumuman Penting</h2>
          <p className="text-gray-700 mb-4">Pendaftaran untuk Program Penelitian tahun 2023 telah dibuka. Batas akhir pengumpulan proposal: 30 September 2023.</p>
          <button 
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300"
            onClick={() => setShowSignUp(true)}
          >
            Daftar Sekarang
          </button>
        </div>
        
        <div className="grid grid-cols-5 gap-4 mb-8">
          <Link to="/uploadproposal" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-4 rounded transition duration-300 text-center flex items-center justify-center text-sm">
            Upload Proposal
          </Link>
          <Link to="/uploadhasilreview" className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-4 rounded transition duration-300 text-center flex items-center justify-center text-sm">
            Upload Hasil Review P3MK
          </Link>
          <Link to="/uploadprogrespenelitian" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 px-4 rounded transition duration-300 text-center flex items-center justify-center text-sm">
            Upload Progres Penelitian
          </Link>
          <Link to="/uploadsertifikatdesiminasi" className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-4 px-4 rounded transition duration-300 text-center flex items-center justify-center text-sm">
            Upload Sertifikat Desiminasi
          </Link>
          <Link to="/uploadlaporanpenelitian" className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-4 rounded transition duration-300 text-center flex items-center justify-center text-sm">
            Upload Laporan Penelitian
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-purple-600 mb-4">Statistik Penelitian</h3>
            <p className="text-3xl font-bold text-gray-800">100+</p>
            <p className="text-gray-600">Penelitian Aktif</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-purple-600 mb-4">Dana Penelitian</h3>
            <p className="text-3xl font-bold text-gray-800">Rp 5M+</p>
            <p className="text-gray-600">Total Dana Tersalurkan</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-purple-600 mb-4">Publikasi Ilmiah</h3>
            <p className="text-3xl font-bold text-gray-800">200+</p>
            <p className="text-gray-600">Jurnal dan Konferensi</p>
          </div>
        </div>
      </div>
      
      <Popup isOpen={showSignUp} onClose={() => setShowSignUp(false)}>
        <SignUp />
      </Popup>
    </div>
  );
};

export default Pendidikan;
