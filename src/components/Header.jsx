import React from 'react';

const Header = () => {
  return (
    <nav className="bg-white text-black py-4">
      {/* Konten Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
             {/* Logo */}
          {/* Menu */}
          <div className="flex">
            <ul className="flex space-x-4">
              <li>
                <a
                  href="#"
                  className="text-blue-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-large"
                >
                  Kotak Kerja
                </a>
              </li>
              {/* Tambahkan item menu lainnya */}
            </ul>
        </div>
        <div>
            <a
              href="#"
              className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
             Beranda
            </a>
          </div>
        </div>
        </div>
    </nav>
  );
};

export default Header;