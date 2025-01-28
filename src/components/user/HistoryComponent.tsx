import React from "react";

const HistoryComponent = () => {
  return (
    <div className="p-4">
      {/* Grid container */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
          <div className="p-5">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 truncate">
              Judul 1
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mt-2 line-clamp-2">
              Deskripsi singkat mengenai data atau informasi untuk card pertama.
            </p>
            <p className="text-sm text-gray-600 mt-2">Nama: John Doe</p>
            <p className="text-sm text-gray-600">Alamat: Jl. Merdeka No. 123</p>
            <p className="text-sm text-gray-600">Email: john.doe@example.com</p>
            <div className="flex justify-between sm:flex-row sm:items-center sm:justify-between mt-4 gap-3">
              <span
                className={`text-xs sm:text-sm font-medium px-3 py-1 rounded-full border bg-green-100 text-green-700`}
              >
                Approve
              </span>
              <button className="text-sm font-semibold text-blue-600 hover:text-blue-800 focus:outline-none focus:ring focus:ring-blue-200 rounded">
                Detail
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
          <div className="p-5">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 truncate">
              Judul 2
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mt-2 line-clamp-2">
              Deskripsi singkat mengenai data atau informasi untuk card kedua.
            </p>
            <p className="text-sm text-gray-600 mt-2">Nama: Jane Smith</p>
            <p className="text-sm text-gray-600">Alamat: Jl. Sudirman No. 45</p>
            <p className="text-sm text-gray-600">Email: jane.smith@example.com</p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4 gap-3">
              <span
                className={`text-xs sm:text-sm font-medium px-3 py-1 rounded-full border bg-yellow-100 text-yellow-700`}
              >
                Pending
              </span>
              <button className="text-sm font-semibold text-blue-600 hover:text-blue-800 focus:outline-none focus:ring focus:ring-blue-200 rounded">
                Detail
              </button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
          <div className="p-5">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 truncate">
              Judul 3
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mt-2 line-clamp-2">
              Deskripsi singkat mengenai data atau informasi untuk card ketiga.
            </p>
            <p className="text-sm text-gray-600 mt-2">Nama: Michael Brown</p>
            <p className="text-sm text-gray-600">Alamat: Jl. Thamrin No. 78</p>
            <p className="text-sm text-gray-600">Email: michael.brown@example.com</p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4 gap-3">
              <span
                className={`text-xs sm:text-sm font-medium px-3 py-1 rounded-full border bg-red-100 text-red-700`}
              >
                Rejected
              </span>
              <button className="text-sm font-semibold text-blue-600 hover:text-blue-800 focus:outline-none focus:ring focus:ring-blue-200 rounded">
                Detail
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryComponent;
