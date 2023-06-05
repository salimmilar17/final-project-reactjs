import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white-800 text-black py-4">
      {/* Konten Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          {/* Menu */}
          <div className="flex">
            <ul className="flex space-x-4">
              <li>
                <a
                  href="#"
                  className="text-Blue-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-Large"
                >
                  Kotak Kerja
                </a>
              </li>
              {/* Tambahkan item menu lainnya */}
            </ul>
          </div>
          {/* Item Baru di Pojok Kanan footer */}
          <div>
            <a
              href="#"
              className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Licensing
            </a>
            <a
              href="#"
              className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
