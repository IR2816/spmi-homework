import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const [showPendidikanSubMenu, setShowPendidikanSubMenu] = useState(false);
  const [showDesiminasiSubMenu, setShowDesiminasiSubMenu] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = (menu, path) => {
    setActiveMenu(menu === activeMenu ? '' : menu);
    if (path) {
      navigate(path);
    }
  };

  const toggleSubMenu = (subMenu) => {
    if (subMenu === 'pendidikan') {
      setShowPendidikanSubMenu(!showPendidikanSubMenu);
    } else if (subMenu === 'desiminasi') {
      setShowDesiminasiSubMenu(!showDesiminasiSubMenu);
    }
  };

  return (
    <nav className="bg-gray-900 w-[15%] fixed top-[64px] left-0 bottom-0 shadow-xl z-10 overflow-y-auto border-r-4 border-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-600 flex flex-col justify-between">
      <div className="flex flex-col justify-start pt-6">
        <ul className="flex flex-col space-y-2 px-4">
          <li>
            <Link to="/" className={`flex items-center text-white hover:text-yellow-300 transition duration-300 px-4 py-3 rounded-xl ${activeMenu === 'beranda' ? 'bg-gray-800 bg-opacity-50 shadow-inner' : 'hover:bg-gray-800 hover:bg-opacity-30'}`} onClick={() => handleMenuClick('beranda', '/')}>
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
              <span className="text-lg font-medium">Beranda</span>
            </Link>
          </li>
          <li>
            <div className="relative">
              <div className="flex items-center justify-between">
                <Link to="/pendidikan" onClick={() => handleMenuClick('pendidikan', '/pendidikan')} className={`flex-grow flex items-center text-white hover:text-yellow-300 transition duration-300 px-4 py-3 rounded-xl ${activeMenu === 'pendidikan' ? 'bg-gray-800 bg-opacity-50 shadow-inner' : 'hover:bg-gray-800 hover:bg-opacity-30'}`}>
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
                  </svg>
                  <span className="text-lg font-medium">Pendidikan</span>
                </Link>
                <button onClick={() => toggleSubMenu('pendidikan')} className="px-3 py-3 text-white hover:text-yellow-300">
                  <span className={`transform transition-transform duration-300 inline-block ${showPendidikanSubMenu ? 'rotate-180' : ''}`}>▼</span>
                </button>
              </div>
              <ul className={`mt-2 space-y-1 overflow-hidden transition-all duration-300 ease-in-out ${showPendidikanSubMenu ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <li><Link to="/uploadproposal" className="block text-sm text-white hover:text-yellow-300 hover:bg-gray-800 hover:bg-opacity-30 transition duration-300 px-7 py-2 rounded-lg">Upload Proposal</Link></li>
                <li><Link to="/uploadhasilreview" className="block text-sm text-white hover:text-yellow-300 hover:bg-gray-800 hover:bg-opacity-30 transition duration-300 px-7 py-2 rounded-lg">Upload Hasil Review P3MK</Link></li>
                <li><Link to="/uploadprogrespenelitian" className="block text-sm text-white hover:text-yellow-300 hover:bg-gray-800 hover:bg-opacity-30 transition duration-300 px-7 py-2 rounded-lg">Upload Progres Penelitian</Link></li>
                <li>
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <Link to="/desiminasihasilpenelitian" onClick={() => handleMenuClick('desiminasi', '/desiminasihasilpenelitian')} className="flex-grow text-sm text-white hover:text-yellow-300 hover:bg-gray-800 hover:bg-opacity-30 transition duration-300 px-7 py-2 rounded-lg">
                        Diseminasi Hasil Penelitian
                      </Link>
                      <button onClick={() => toggleSubMenu('desiminasi')} className="px-2 py-2 text-white hover:text-yellow-300">
                        <span className={`transform transition-transform duration-300 inline-block ${showDesiminasiSubMenu ? 'rotate-180' : ''}`}>▼</span>
                      </button>
                    </div>
                    <ul className={`mt-1 space-y-1 overflow-hidden transition-all duration-300 ease-in-out ${showDesiminasiSubMenu ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <li><Link to="/uploadsertifikatdesiminasi" className="block text-xs text-white hover:text-yellow-300 hover:bg-gray-800 hover:bg-opacity-20 transition duration-300 px-10 py-2 rounded-lg">Upload Sertifikat Diseminasi</Link></li>
                    </ul>
                  </div>
                </li>
                <li><Link to="/uploadlaporanpenelitian" className="block text-sm text-white hover:text-yellow-300 hover:bg-gray-800 hover:bg-opacity-30 transition duration-300 px-7 py-2 rounded-lg">Upload Laporan Penelitian</Link></li>
              </ul>
            </div>
          </li>
          <li>
            <Link to="/pkm" className={`flex items-center text-white hover:text-yellow-300 transition duration-300 px-4 py-3 rounded-xl ${activeMenu === 'pkm' ? 'bg-gray-800 bg-opacity-50 shadow-inner' : 'hover:bg-gray-800 hover:bg-opacity-30'}`} onClick={() => handleMenuClick('pkm', '/pkm')}>
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
              <span className="text-lg font-medium">PKM</span>
            </Link>
          </li>
        </ul>
      </div>
      <footer className="bg-gray-800 p-4 text-center text-white text-sm">
        <p>&copy; 2024 IR2816. All rights reserved.</p>
      </footer>
    </nav>
  );
};

export default Navbar;
