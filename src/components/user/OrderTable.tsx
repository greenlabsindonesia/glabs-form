import { useState } from "react";
import { FaEye, FaTrash, FaSpinner } from "react-icons/fa";
import { MdOutlineCheckCircle } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const OrderTable = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([
    {
      id: "ORD-001",
      serviceType: "Analisis Tanah",
      registrationDate: "2024-02-10",
      customerName: "Budi Santoso",
      institution: "Dinas Pertanian",
      status: "Selesai",
    },
    {
      id: "ORD-002",
      serviceType: "Uji Hara",
      registrationDate: "2024-02-11",
      customerName: "Siti Aminah",
      institution: "PT Agro Sejahtera",
      status: "Diproses",
    },
    {
      id: "ORD-003",
      serviceType: "Uji Kualitas Air",
      registrationDate: "2024-02-12",
      customerName: "Rudi Hartono",
      institution: "Universitas Mataram",
      status: "Selesai",
    },
  ]);

  const handleDelete = (id: string) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  return (
    <div className="w-full">
      <div>
        <div className="border border-gray-200 rounded-sm shadow-md bg-white overflow-x-auto">
          <table className="w-full">
            {/* Header */}
            <thead className="bg-gray-100 ">
              <tr>
                <th className="px-2 py-3 text-xs lg:text-sm font-bold text-gray-600 uppercase text-center">
                  No
                </th>
                <th className="px-6 py-3 text-xs lg:text-sm font-bold text-gray-600 uppercase text-center">
                  No. Order
                </th>
                <th className="px-6 py-3 text-xs lg:text-sm font-bold text-gray-600 uppercase text-center">
                  Jenis Layanan
                </th>
                <th className="px-6 py-3 text-xs lg:text-sm font-bold text-gray-600 uppercase text-center">
                  Tanggal Registrasi
                </th>
                <th className="px-6 py-3 text-xs lg:text-sm font-bold text-gray-600 uppercase text-center">
                  Nama Pemberi Order
                </th>
                <th className="px-6 py-3 text-xs lg:text-sm font-bold text-gray-600 uppercase text-center">
                  Instansi
                </th>
                <th className="px-6 py-3 text-xs lg:text-sm font-bold text-gray-600 uppercase text-center">
                  Status
                </th>
                <th className="px-6 py-3 text-xs lg:text-sm font-bold text-gray-600 uppercase text-center">
                  Tanggal
                </th>
                <th className="px-6 py-3 text-xs lg:text-sm font-bold text-gray-600 uppercase text-center">
                  Action
                </th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {orders.map((order, index) => (
                <tr key={order.id} className="border-b border-gray-200">
                  <td className="px-2 py-3 text-xs lg:text-sm text-gray-700 text-center">{`${
                    index + 1
                  }.`}</td>
                  <td className="px-6 py-3 text-xs lg:text-sm text-gray-700 text-center">
                    {order.id}
                  </td>
                  <td className="px-6 py-3 text-xs lg:text-sm text-gray-700 text-center">
                    {order.serviceType}
                  </td>
                  <td className="px-6 py-3 text-xs lg:text-sm text-gray-700 text-center">
                    {order.registrationDate}
                  </td>
                  <td className="px-6 py-3 text-xs lg:text-sm text-gray-700 text-center">
                    {order.customerName}
                  </td>
                  <td className="px-6 py-3 text-xs lg:text-sm text-gray-700 text-center">
                    {order.institution}
                  </td>

                  {/* Status */}
                  <td className="px-6 py-3 text-xs lg:text-sm font-semibold">
                    {order.status === "Selesai" ? (
                      <span className="text-green-600 flex items-center justify-center gap-1">
                        <MdOutlineCheckCircle className="text-lg" /> Selesai
                      </span>
                    ) : (
                      <span className="text-yellow-600 flex items-center justify-center gap-1">
                        <FaSpinner className="animate-spin text-lg" /> Diproses
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-3 text-xs lg:text-sm text-gray-700 text-center">
                    {order.registrationDate}
                  </td>
                  {/* Action */}
                  <td className="px-6 py-3 text-sm text-center">
                    <div className="flex items-center justify-center gap-3">
                      <button className="text-blue-500 hover:text-blue-700 transition">
                        <FaEye className="text-lg" />
                      </button>
                      <button
                        onClick={() => handleDelete(order.id)}
                        className="text-red-500 hover:text-red-700 transition"
                      >
                        <FaTrash className="text-lg" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Total Order */}
          <div className="py-4 px-6 text-xs lg:text-sm font-bold text-gray-700">
            Total Order: {orders.length}
          </div>
        </div>
      </div>
      <button
        onClick={() => navigate(`${window.location.pathname}/instrument`)}
        className="flex items-center gap-2 mt-6 px-4 py-2 border border-gray-300 rounded-md bg-green-500 text-white font-medium hover:bg-green-600 transition"
      >
        <span className="text-lg">+</span>
        <span>Tambah</span>
      </button>
    </div>
  );
};

export default OrderTable;
