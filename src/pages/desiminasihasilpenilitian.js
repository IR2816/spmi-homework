import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DesiminasiHasilPenelitian = () => {
  // Contoh data file yang telah diupload
  const [files, setFiles] = useState([
    { id: 1, name: 'Hasil Penelitian A.pdf', author: 'Mahasiswa A', date: '2023-08-01' },
    { id: 2, name: 'Laporan Desiminasi B.docx', author: 'Mahasiswa B', date: '2023-08-05' },
    { id: 3, name: 'Presentasi Hasil C.pptx', author: 'Mahasiswa C', date: '2023-08-10' },
    // Tambahkan lebih banyak file sesuai kebutuhan
  ]);

  return (
    <div className="bg-gray-100 min-h-screen pl-[15%] pt-16 relative">
      <div className="container mx-auto p-8 pb-20">
        <h1 className="text-4xl font-bold text-purple-800 mb-8">Galeri Diseminasi Hasil Penelitian</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {files.map((file) => (
            <div key={file.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-purple-600 mb-2">{file.name}</h3>
              <p className="text-gray-600 mb-1">Penulis: {file.author}</p>
              <p className="text-gray-500 text-sm mb-4">Tanggal Upload: {file.date}</p>
              <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded transition duration-300">
                Unduh File
              </button>
            </div>
          ))}
        </div>
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

export default DesiminasiHasilPenelitian;
