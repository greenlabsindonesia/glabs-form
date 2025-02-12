import CardAnalysis from "../../components/user/CardAnalysis";
import Header from "../../components/user/Header";
import Sidebar from "../../components/user/Sidebar";

const Instrument = () => {
  return (
    <div className="flex h-screen overflow-y-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-scroll scrollbar-hide">
        <Header />
        <div className="flex-1 m-4  scrollbar-hide">
          <p className="text-xl md:text-2xl mb-6 text-green-600 font-semibold">
            Regular Analysis
          </p>
          <div className="w-full ">
            <CardAnalysis />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instrument;
