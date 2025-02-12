import Header from "../../components/user/Header";
import Sidebar from "../../components/user/Sidebar";

const My = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 m-4 overflow-auto">
          <div className="w-full ">
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-green-500">
                Lab Service
              </p>
              <p className="text-base md:text-lg mt-10  ">
                Lab Service is our effort in fostering science & our partial
                community services to local researchers & industries. The
                service includes custom analyses for chemistry-based industries
                and regular analyses. The affordable charge is set to be
                accessible for academia and industries.
              </p>
              <div className="mt-10 text-center text-sm md:text-base">
                <p className="font-semibold pb-10 text-green-500 hover:underline hover:text-green-700 hover:cursor-pointer">
                  Click here for Greenlabs Catalog
                </p>
                <p className="font-semibold">How To Use</p>
                <ul className=" ml-5 mt-10 space-y-2 list-none text-gray-600">
                  <li>1. Fill in the form.</li>
                  <li>
                    2. Send samples to Greenlabs (Office & Beyond Bld. A3,
                    Cimanuk 6, Citarum, Bandung - 40115, Indonesia. Phone:
                    022-4205225).
                  </li>
                  <li>
                    3. The invoice will be emailed after completion of analyses.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default My;
