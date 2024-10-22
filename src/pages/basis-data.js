import React from 'react';
import { Link } from 'react-router-dom';

const BasisData = () => {
  return (
    <div className="bg-gradient-to-br from-red-100 to-pink-100 min-h-screen pl-[15%] pt-16 relative">
      <div className="container mx-auto p-8 pb-20">
        <h1 className="text-5xl font-extrabold text-red-800 mb-8 text-center">Basis Data</h1>
        
        <article className="bg-white rounded-2xl shadow-xl p-10 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-red-600 mb-6 border-b-2 border-red-200 pb-3">Pengantar Basis Data</h2>
          
          <p className="text-gray-700 mb-8 text-lg leading-relaxed">
            Basis data adalah kumpulan data yang terorganisir dan dapat diakses secara elektronik. Pemahaman tentang basis data sangat penting dalam pengembangan aplikasi modern dan pengelolaan informasi.
          </p>
          
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-red-600 mb-4">Konsep Utama dalam Basis Data</h3>
            
            <ul className="list-none text-gray-700 mb-6 space-y-3">
              {['Tabel dan Relasi', 'Kunci Primer dan Kunci Asing', 'Normalisasi', 'SQL (Structured Query Language)', 'Indeks dan Optimasi'].map((item, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-6 h-6 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-red-600 mb-4">Mengapa Belajar Basis Data?</h3>
            
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Pemahaman tentang basis data penting untuk mengelola dan menganalisis data secara efisien. Keterampilan ini diperlukan dalam berbagai bidang, termasuk pengembangan web, analisis data, dan manajemen sistem informasi.
            </p>
          </div>
          
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-red-600 mb-4">Sistem Manajemen Basis Data (DBMS) Populer</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: 'MySQL', desc: 'DBMS open-source yang populer untuk aplikasi web' },
                { name: 'PostgreSQL', desc: 'DBMS relasional yang kuat dengan fitur lanjutan' },
                { name: 'MongoDB', desc: 'Basis data NoSQL untuk data yang tidak terstruktur' },
                { name: 'Oracle', desc: 'DBMS enterprise untuk aplikasi skala besar' }
              ].map((dbms, index) => (
                <div key={index} className="bg-red-50 rounded-lg p-4 shadow-md">
                  <h4 className="text-xl font-semibold text-red-700 mb-2">{dbms.name}</h4>
                  <p className="text-gray-600">{dbms.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-red-200 to-pink-200 rounded-xl p-8 mb-10">
            <h4 className="text-2xl font-bold text-red-800 mb-4">Tips Belajar Basis Data</h4>
            <ol className="list-decimal list-inside text-gray-700 space-y-3">
              {[
                'Pelajari konsep dasar sebelum beralih ke topik lanjutan',
                'Praktikkan dengan membuat dan mengelola basis data sederhana',
                'Kuasai SQL untuk query dan manipulasi data',
                'Pelajari tentang desain basis data dan normalisasi',
                'Eksplorasi berbagai jenis DBMS untuk memahami perbedaannya'
              ].map((tip, index) => (
                <li key={index} className="text-lg">{tip}</li>
              ))}
            </ol>
          </div>
          
          <p className="text-gray-700 text-lg leading-relaxed">
            Dengan memahami basis data, Anda akan memiliki keterampilan yang sangat dicari dalam era big data dan analitik ini.
          </p>
        </article>
      </div>
      
      <Link 
        to="/pendidikan" 
        className="fixed bottom-8 right-8 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 flex items-center"
      >
        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        Kembali ke Pendidikan
      </Link>
    </div>
  );
};

export default BasisData;
