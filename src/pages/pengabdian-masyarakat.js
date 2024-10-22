import React from 'react';
import { Link } from 'react-router-dom';

const PengabdianMasyarakat = () => {
  return (
    <div className="bg-gradient-to-br from-green-100 to-teal-100 min-h-screen pl-[15%] pt-16 relative">
      <div className="container mx-auto p-8 pb-20">
        <h1 className="text-5xl font-extrabold text-green-800 mb-8 text-center">PKM Pengabdian Masyarakat</h1>
        
        <article className="bg-white rounded-2xl shadow-xl p-10 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-600 mb-6 border-b-2 border-green-200 pb-3">Tentang PKM Pengabdian Masyarakat</h2>
          
          <p className="text-gray-700 mb-8 text-lg leading-relaxed">
            PKM Pengabdian Masyarakat adalah program yang bertujuan untuk menerapkan ilmu pengetahuan, teknologi, dan seni dalam upaya meningkatkan kesejahteraan masyarakat. Program ini memungkinkan mahasiswa untuk berkontribusi langsung dalam menyelesaikan masalah-masalah yang ada di masyarakat.
          </p>
          
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">Fokus Utama PKM Pengabdian Masyarakat</h3>
            
            <ul className="list-none text-gray-700 mb-6 space-y-3">
              {['Peningkatan kualitas hidup masyarakat', 'Penerapan teknologi tepat guna', 'Pemberdayaan ekonomi masyarakat', 'Pelestarian lingkungan', 'Peningkatan kesehatan masyarakat'].map((item, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-6 h-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">Manfaat PKM Pengabdian Masyarakat</h3>
            
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Program ini memberikan kesempatan bagi mahasiswa untuk mengaplikasikan ilmu yang diperoleh di kampus, mengembangkan kepekaan sosial, dan meningkatkan soft skills seperti kepemimpinan, kerja tim, dan komunikasi.
            </p>
          </div>
          
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">Tahapan PKM Pengabdian Masyarakat</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: 'Identifikasi Masalah', desc: 'Menganalisis kebutuhan dan permasalahan masyarakat' },
                { name: 'Perencanaan Program', desc: 'Merancang solusi dan program yang akan dilaksanakan' },
                { name: 'Implementasi', desc: 'Melaksanakan program yang telah dirancang' },
                { name: 'Evaluasi', desc: 'Menilai dampak dan efektivitas program' }
              ].map((step, index) => (
                <div key={index} className="bg-green-50 rounded-lg p-4 shadow-md">
                  <h4 className="text-xl font-semibold text-green-700 mb-2">{step.name}</h4>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-200 to-teal-200 rounded-xl p-8 mb-10">
            <h4 className="text-2xl font-bold text-green-800 mb-4">Tips Sukses PKM Pengabdian Masyarakat</h4>
            <ol className="list-decimal list-inside text-gray-700 space-y-3">
              {[
                'Lakukan survei dan analisis kebutuhan masyarakat dengan cermat',
                'Libatkan masyarakat dalam perencanaan dan pelaksanaan program',
                'Manfaatkan teknologi dan inovasi dalam solusi yang ditawarkan',
                'Jalin kerjasama dengan pihak-pihak terkait untuk keberlanjutan program',
                'Dokumentasikan setiap tahapan program dengan baik'
              ].map((tip, index) => (
                <li key={index} className="text-lg">{tip}</li>
              ))}
            </ol>
          </div>
          
          <p className="text-gray-700 text-lg leading-relaxed">
            PKM Pengabdian Masyarakat membuka peluang bagi mahasiswa untuk berkontribusi nyata dalam pembangunan masyarakat. Melalui program ini, mahasiswa tidak hanya mengembangkan diri, tetapi juga memberikan dampak positif bagi masyarakat.
          </p>
        </article>
      </div>
      
      <Link 
        to="/pkm" 
        className="fixed bottom-8 right-8 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 flex items-center"
      >
        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        Kembali ke PKM
      </Link>
    </div>
  );
};

export default PengabdianMasyarakat;
