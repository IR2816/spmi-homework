import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UploadProgressPenelitian = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logika untuk mengunggah file
    console.log('File yang diunggah:', file);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-center relative">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-2xl rounded-3xl overflow-hidden">
          <div className="px-6 py-8 sm:p-10">
            <div className="flex items-center space-x-5 mb-8">
              <div className="h-16 w-16 bg-purple-600 rounded-full flex flex-shrink-0 justify-center items-center text-white text-2xl font-bold">UP</div>
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900">Upload Progres Penelitian</h2>
                <p className="mt-1 text-sm text-gray-500">Unggah file progres penelitian Anda di sini.</p>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">File Progres Penelitian</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-xl transition-all duration-300 ease-in-out hover:border-purple-500 hover:bg-purple-50">
                  <div className="space-y-1 text-center">
                    <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="flex text-sm text-gray-600 justify-center">
                      <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-purple-500">
                        <span>Unggah file</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} accept=".pdf" required />
                      </label>
                      <p className="pl-1">atau seret dan lepas</p>
                    </div>
                    <p className="text-xs text-gray-500">PDF hingga 10MB</p>
                  </div>
                </div>
              </div>
              <div>
                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                  Unggah Progres Penelitian
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <Link 
        to="/pendidikan" 
        className="fixed bottom-8 right-8 bg-white text-purple-600 hover:bg-purple-600 hover:text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out flex items-center space-x-2 transform hover:-translate-y-1 hover:scale-110"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        <span>Kembali ke Pendidikan</span>
      </Link>
    </div>
  );
};

export default UploadProgressPenelitian;
