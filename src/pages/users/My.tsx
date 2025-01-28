import Header from "../../components/user/Header";
import Sidebar from "../../components/user/Sidebar";


const My = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 m-4 overflow-auto ">
          {/* content */}
          <div className="w-full ">
            {/* <div className="">
              <Card />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default My