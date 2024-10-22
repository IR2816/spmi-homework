import React from 'react';
import { Link } from 'react-router-dom';

const PemrogramanDasar = () => {
  return (
    <div className="bg-gradient-to-br from-purple-100 to-indigo-100 min-h-screen pl-[15%] pt-16 relative">
      <div className="container mx-auto p-8 pb-20">
        <h1 className="text-5xl font-extrabold text-purple-800 mb-8 text-center">Pemrograman Dasar</h1>
        
        <article className="bg-white rounded-2xl shadow-xl p-10 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-purple-600 mb-6 border-b-2 border-purple-200 pb-3">Pengantar Pemrograman Dasar</h2>
          
          <p className="text-gray-700 mb-8 text-lg leading-relaxed">
            Pemrograman dasar adalah langkah awal yang penting dalam perjalanan menjadi seorang programmer. Ini mencakup konsep-konsep fundamental yang akan menjadi dasar untuk pembelajaran lebih lanjut dalam dunia pemrograman.
          </p>
          
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-purple-600 mb-4">Konsep Utama dalam Pemrograman Dasar</h3>
            
            <ul className="list-none text-gray-700 mb-6 space-y-3">
              {['Variabel dan Tipe Data', 'Struktur Kontrol (if-else, loop)', 'Fungsi dan Prosedur', 'Array dan Struktur Data Sederhana', 'Input/Output Dasar'].map((item, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-6 h-6 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-purple-600 mb-4">Mengapa Belajar Pemrograman Dasar?</h3>
            
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Pemrograman dasar memberikan fondasi yang kuat untuk memahami logika pemrograman dan cara berpikir komputasional. Keterampilan ini penting tidak hanya untuk pengembangan perangkat lunak, tetapi juga untuk pemecahan masalah dalam berbagai bidang.
            </p>
          </div>
          
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-purple-600 mb-4">Bahasa Pemrograman untuk Pemula</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: 'Python', desc: 'Terkenal dengan sintaksisnya yang mudah dibaca' },
                { name: 'JavaScript', desc: 'Populer untuk pengembangan web' },
                { name: 'Java', desc: 'Banyak digunakan dalam pengembangan aplikasi enterprise' },
                { name: 'Scratch', desc: 'Bahasa visual yang bagus untuk anak-anak dan pemula' }
              ].map((lang, index) => (
                <div key={index} className="bg-purple-50 rounded-lg p-4 shadow-md">
                  <h4 className="text-xl font-semibold text-purple-700 mb-2">{lang.name}</h4>
                  <p className="text-gray-600">{lang.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-200 to-indigo-200 rounded-xl p-8 mb-10">
            <h4 className="text-2xl font-bold text-purple-800 mb-4">Tips Belajar Pemrograman Dasar</h4>
            <ol className="list-decimal list-inside text-gray-700 space-y-3">
              {[
                'Mulai dengan konsep sederhana dan tingkatkan secara bertahap',
                'Praktikkan secara teratur dengan menulis kode',
                'Ikuti tutorial online dan kursus interaktif',
                'Bergabung dengan komunitas pemrograman untuk belajar dan berbagi',
                'Jangan takut membuat kesalahan - itu bagian dari proses belajar'
              ].map((tip, index) => (
                <li key={index} className="text-lg">{tip}</li>
              ))}
            </ol>
          </div>
          
          <p className="text-gray-700 text-lg leading-relaxed">
            Dengan memahami dasar-dasar pemrograman, Anda akan memiliki keterampilan yang berharga dan fleksibel yang dapat diterapkan di berbagai bidang teknologi dan industri.
          </p>
        </article>
      </div>
      
      <Link 
        to="/pendidikan" 
        className="fixed bottom-8 right-8 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 flex items-center"
      >
        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        Kembali ke Pendidikan
      </Link>
    </div>
  );
};

export default PemrogramanDasar;
