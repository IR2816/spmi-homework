import React from 'react';
import { Link } from 'react-router-dom';

const PengembanganWeb = () => {
  return (
    <div className="bg-gradient-to-br from-blue-100 to-teal-100 min-h-screen pl-[15%] pt-16 relative">
      <div className="container mx-auto p-8 pb-20">
        <h1 className="text-5xl font-extrabold text-blue-800 mb-8 text-center">Pengembangan Web</h1>
        
        <article className="bg-white rounded-2xl shadow-xl p-10 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-600 mb-6 border-b-2 border-blue-200 pb-3">Pengantar Pengembangan Web</h2>
          
          <p className="text-gray-700 mb-8 text-lg leading-relaxed">
            Pengembangan web adalah proses menciptakan dan memelihara situs web. Ini mencakup berbagai aspek seperti desain web, pengembangan konten, pemrograman sisi klien dan server, serta konfigurasi keamanan jaringan.
          </p>
          
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Teknologi Utama dalam Pengembangan Web</h3>
            
            <ul className="list-none text-gray-700 mb-6 space-y-3">
              {['HTML (Hypertext Markup Language)', 'CSS (Cascading Style Sheets)', 'JavaScript', 'Backend Languages (PHP, Python, Ruby, etc.)', 'Databases (MySQL, MongoDB, etc.)'].map((item, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-6 h-6 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Mengapa Belajar Pengembangan Web?</h3>
            
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Pengembangan web adalah keterampilan yang sangat dicari di era digital ini. Ini membuka pintu ke berbagai peluang karir, memungkinkan Anda untuk menciptakan solusi online yang inovatif, dan memberikan platform untuk mengekspresikan kreativitas Anda.
            </p>
          </div>
          
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Framework dan Library Populer</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: 'React', desc: 'Library JavaScript untuk membangun antarmuka pengguna' },
                { name: 'Angular', desc: 'Framework TypeScript yang dikembangkan oleh Google' },
                { name: 'Vue.js', desc: 'Framework JavaScript progresif untuk UI' },
                { name: 'Node.js', desc: 'Runtime JavaScript untuk pengembangan server-side' }
              ].map((tech, index) => (
                <div key={index} className="bg-blue-50 rounded-lg p-4 shadow-md">
                  <h4 className="text-xl font-semibold text-blue-700 mb-2">{tech.name}</h4>
                  <p className="text-gray-600">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-200 to-teal-200 rounded-xl p-8 mb-10">
            <h4 className="text-2xl font-bold text-blue-800 mb-4">Tips Belajar Pengembangan Web</h4>
            <ol className="list-decimal list-inside text-gray-700 space-y-3">
              {[
                'Mulai dengan dasar-dasar HTML, CSS, dan JavaScript',
                'Bangun proyek-proyek kecil untuk melatih keterampilan Anda',
                'Pelajari penggunaan alat pengembang browser',
                'Ikuti tren terbaru dalam desain dan teknologi web',
                'Berpartisipasi dalam komunitas pengembang web online'
              ].map((tip, index) => (
                <li key={index} className="text-lg">{tip}</li>
              ))}
            </ol>
          </div>
          
          <p className="text-gray-700 text-lg leading-relaxed">
            Pengembangan web adalah bidang yang terus berkembang. Dengan belajar dan mengasah keterampilan Anda secara konsisten, Anda dapat menjadi pengembang web yang kompeten dan sukses.
          </p>
        </article>
      </div>
      
      <Link 
        to="/pendidikan" 
        className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 flex items-center"
      >
        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        Kembali ke Pendidikan
      </Link>
    </div>
  );
};

export default PengembanganWeb;
