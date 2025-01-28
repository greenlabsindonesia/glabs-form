import Header from "../../components/user/Header";
import HistoryComponent from "../../components/user/HistoryComponent";
import Sidebar from "../../components/user/Sidebar";


const History = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 m-4 overflow-auto ">
          {/* content */}
          <div className="w-full ">
            <HistoryComponent/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
