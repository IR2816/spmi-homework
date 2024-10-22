import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignUp from './SignUp';
import Popup from '../components/Popup';

const PKM = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen pl-[15%] pt-16">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-purple-800 mb-8">Program Kreativitas Mahasiswa (PKM)</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-2xl font-semibold text-purple-600 mb-4">PKM Penelitian</h3>
            <p className="text-gray-700 mb-4">Program penelitian yang bertujuan untuk mengidentifikasi faktor penentu mutu produk, menemukan hubungan sebab-akibat antara dua atau lebih faktor, mengujicobakan sebuah bentuk atau peralatan, merumuskan metode pembelajaran, atau melakukan inventarisasi sumber daya.</p>
            <Link to="/penelitian" className="text-purple-600 hover:text-purple-800 font-semibold text-lg">Pelajari lebih lanjut &rarr;</Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-2xl font-semibold text-purple-600 mb-4">PKM Kewirausahaan</h3>
            <p className="text-gray-700 mb-4">Program pengembangan ketrampilan mahasiswa dalam berwirausaha dan berorientasi pada profit. Komoditas usaha yang dihasilkan dapat berupa barang atau jasa yang selanjutnya merupakan salah satu modal dasar mahasiswa berwirausaha dan memasuki pasar.</p>
            <Link to="/kewirausahaan" className="text-purple-600 hover:text-purple-800 font-semibold text-lg">Pelajari lebih lanjut &rarr;</Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-2xl font-semibold text-purple-600 mb-4">PKM Pengabdian Masyarakat</h3>
            <p className="text-gray-700 mb-4">Program penerapan ilmu pengetahuan, teknologi dan seni dalam upaya peningkatan kinerja, membangun keterampilan usaha, penataan dan perbaikan lingkungan, penguatan kelembagaan masyarakat, sosialisasi penggunaan obat secara rasional, pengenalan dan pemahaman aspek hukum adat, upaya penyembuhan buta aksara dan lain-lain bagi masyarakat.</p>
            <Link to="/pengabdian-masyarakat" className="text-purple-600 hover:text-purple-800 font-semibold text-lg">Pelajari lebih lanjut &rarr;</Link>
          </div>
        </div>
        
        <div className="bg-purple-100 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-purple-800 mb-4">Pengumuman PKM</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Pendaftaran PKM 2023 telah dibuka! Batas akhir pengumpulan proposal: 30 September 2023</li>
            <li>Workshop penulisan proposal PKM akan diadakan pada tanggal 15 Agustus 2023</li>
            <li>Pengumuman pemenang PKM 2022 dapat dilihat di sini</li>
          </ul>
        </div>
        
        <div className="text-center">
          <button
            onClick={() => setShowSignUp(true)}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 inline-block"
          >
            Daftar PKM Sekarang
          </button>
        </div>
      </div>
      
      <Popup isOpen={showSignUp} onClose={() => setShowSignUp(false)}>
        <SignUp />
      </Popup>
    </div>
  );
};

export default PKM;
