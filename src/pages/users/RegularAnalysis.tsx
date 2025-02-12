import Header from "../../components/user/Header";
import OrderTable from "../../components/user/OrderTable";
import Sidebar from "../../components/user/Sidebar";

const RegularAnalysis = () => {
  return (
    <div className="flex h-screen overflow-y-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-scroll scrollbar-hide">
        <Header />
        <div className="flex-1 m-4  scrollbar-hide">
          <p className="text-xl md:text-2xl mb-6 text-green-600 font-semibold">
            Regular Analysis
          </p>
          <p className="text-sm md:text-base mb-6 text-gray-600 font-semibold ">
            silakan klik tombol +Tambah, untuk memberikan informasi order
          </p>

          <div className="w-full ">
            <OrderTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegularAnalysis;
