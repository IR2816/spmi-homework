import React from 'react';
import { Link } from 'react-router-dom';

const Kewirausahaan = () => {
  return (
    <div className="bg-gradient-to-br from-yellow-100 to-orange-100 min-h-screen pl-[15%] pt-16 relative">
      <div className="container mx-auto p-8 pb-20">
        <h1 className="text-5xl font-extrabold text-orange-800 mb-8 text-center">PKM Kewirausahaan</h1>
        
        <article className="bg-white rounded-2xl shadow-xl p-10 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-orange-600 mb-6 border-b-2 border-orange-200 pb-3">Pengantar PKM Kewirausahaan</h2>
          
          <p className="text-gray-700 mb-8 text-lg leading-relaxed">
            PKM Kewirausahaan adalah program yang dirancang untuk mengembangkan keterampilan mahasiswa dalam berwirausaha. Program ini berfokus pada pengembangan produk atau jasa yang inovatif dan memiliki nilai komersial.
          </p>
          
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-orange-600 mb-4">Tujuan PKM Kewirausahaan</h3>
            
            <ul className="list-none text-gray-700 mb-6 space-y-3">
              {['Mengembangkan jiwa wirausaha mahasiswa', 'Menghasilkan karya kreatif dan inovatif', 'Meningkatkan keterampilan manajemen usaha', 'Mempersiapkan mahasiswa untuk masuk ke dunia bisnis', 'Menciptakan peluang usaha baru'].map((item, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-6 h-6 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-orange-600 mb-4">Komponen PKM Kewirausahaan</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: 'Analisis Pasar', desc: 'Identifikasi kebutuhan dan peluang pasar' },
                { name: 'Pengembangan Produk', desc: 'Merancang dan mengembangkan produk atau jasa inovatif' },
                { name: 'Rencana Bisnis', desc: 'Menyusun strategi dan rencana operasional bisnis' },
                { name: 'Implementasi', desc: 'Menjalankan usaha dalam skala terbatas' }
              ].map((comp, index) => (
                <div key={index} className="bg-orange-50 rounded-lg p-4 shadow-md">
                  <h4 className="text-xl font-semibold text-orange-700 mb-2">{comp.name}</h4>
                  <p className="text-gray-600">{comp.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-yellow-200 to-orange-200 rounded-xl p-8 mb-10">
            <h4 className="text-2xl font-bold text-orange-800 mb-4">Tips Sukses PKM Kewirausahaan</h4>
            <ol className="list-decimal list-inside text-gray-700 space-y-3">
              {[
                'Lakukan riset pasar yang mendalam',
                'Fokus pada inovasi dan nilai tambah produk',
                'Susun rencana bisnis yang realistis dan terukur',
                'Manfaatkan teknologi dalam pengembangan dan pemasaran',
                'Bangun jaringan dengan pelaku usaha dan mentor'
              ].map((tip, index) => (
                <li key={index} className="text-lg">{tip}</li>
              ))}
            </ol>
          </div>
          
          <p className="text-gray-700 text-lg leading-relaxed">
            PKM Kewirausahaan membuka peluang bagi mahasiswa untuk mengembangkan ide bisnis mereka menjadi kenyataan. Dengan mengikuti program ini, mahasiswa tidak hanya belajar tentang teori bisnis, tetapi juga mendapatkan pengalaman praktis dalam menjalankan usaha.
          </p>
        </article>
      </div>
      
      <Link 
        to="/pkm" 
        className="fixed bottom-8 right-8 bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 flex items-center"
      >
        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        Kembali ke PKM
      </Link>
    </div>
  );
};

export default Kewirausahaan;
