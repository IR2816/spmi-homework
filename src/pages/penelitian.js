import React from 'react';
import { Link } from 'react-router-dom';

const Penelitian = () => {
  return (
    <div className="bg-gradient-to-br from-purple-100 to-indigo-100 min-h-screen pl-[15%] pt-16 relative">
      <div className="container mx-auto p-8 pb-20">
        <h1 className="text-5xl font-extrabold text-purple-800 mb-8 text-center">PKM Penelitian</h1>
        
        <article className="bg-white rounded-2xl shadow-xl p-10 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-purple-600 mb-6 border-b-2 border-purple-200 pb-3">Tentang PKM Penelitian</h2>
          
          <p className="text-gray-700 mb-8 text-lg leading-relaxed">
            PKM Penelitian adalah program yang bertujuan untuk mengembangkan kemampuan mahasiswa dalam melakukan penelitian ilmiah. Program ini memfasilitasi mahasiswa untuk mengidentifikasi masalah, merumuskan hipotesis, merancang dan melaksanakan penelitian, serta menganalisis dan menyimpulkan hasil penelitian.
          </p>
          
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-purple-600 mb-4">Tujuan PKM Penelitian</h3>
            
            <ul className="list-none text-gray-700 mb-6 space-y-3">
              {[
                'Meningkatkan kemampuan analisis dan sintesis mahasiswa',
                'Mengembangkan keterampilan penelitian ilmiah',
                'Mendorong inovasi dan kreativitas dalam pemecahan masalah',
                'Melatih penulisan karya ilmiah yang baik dan benar',
                'Mempersiapkan mahasiswa untuk studi lanjut atau karir di bidang penelitian'
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-6 h-6 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-purple-600 mb-4">Tahapan PKM Penelitian</h3>
            
            <ol className="list-decimal list-inside text-gray-700 space-y-3 pl-4">
              {[
                'Identifikasi masalah dan perumusan hipotesis',
                'Perancangan metodologi penelitian',
                'Pengumpulan dan analisis data',
                'Interpretasi hasil penelitian',
                'Penyusunan laporan dan artikel ilmiah'
              ].map((step, index) => (
                <li key={index} className="text-lg">{step}</li>
              ))}
            </ol>
          </div>
          
          <div className="bg-gradient-to-r from-purple-200 to-indigo-200 rounded-xl p-8 mb-10">
            <h4 className="text-2xl font-bold text-purple-800 mb-4">Tips Sukses PKM Penelitian</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-3">
              {[
                'Pilih topik penelitian yang inovatif dan relevan',
                'Lakukan studi literatur yang komprehensif',
                'Konsultasikan ide penelitian dengan dosen pembimbing',
                'Ikuti metodologi penelitian dengan ketat',
                'Manfaatkan sumber daya dan fasilitas kampus secara optimal'
              ].map((tip, index) => (
                <li key={index} className="text-lg">{tip}</li>
              ))}
            </ul>
          </div>
          
          <p className="text-gray-700 text-lg leading-relaxed">
            PKM Penelitian membuka peluang bagi mahasiswa untuk berkontribusi pada perkembangan ilmu pengetahuan dan teknologi. Dengan mengikuti program ini, mahasiswa tidak hanya mengembangkan keterampilan penelitian, tetapi juga mempersiapkan diri untuk karir di dunia akademis dan industri.
          </p>
        </article>
      </div>
      
      <Link 
        to="/pkm" 
        className="fixed bottom-8 right-8 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 flex items-center"
      >
        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        Kembali ke PKM
      </Link>
    </div>
  );
};

export default Penelitian;
