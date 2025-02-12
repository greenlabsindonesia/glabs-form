import { GiNetworkBars } from "react-icons/gi";

const CardAnalysis = () => {
  const cardData = [
    {
      title: "Powder X-ray Diffraction (P-XRD)",
      priceResearch: "Rp 250K",
      priceIndustry: "Rp 600K",
    },
    {
      title: "Fourier Transform Infrared Spectroscopy (FTIR)",
      priceResearch: "Rp 200K",
      priceIndustry: "Rp 500K",
    },
    {
      title: "Scanning Electron Microscopy (SEM)",
      priceResearch: "Rp 300K",
      priceIndustry: "Rp 700K",
    },
    {
      title: "X-ray Fluorescence (XRF)",
      priceResearch: "Rp 280K",
      priceIndustry: "Rp 650K",
    },
    {
      title: "Gas Chromatography-Mass Spectrometry (GC-MS)",
      priceResearch: "Rp 350K",
      priceIndustry: "Rp 800K",
    },
    {
      title: "Nuclear Magnetic Resonance (NMR)",
      priceResearch: "Rp 400K",
      priceIndustry: "Rp 900K",
    },
  ];

  return (
    <div className="container mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-md hover:shadow-lg rounded-2xl border border-gray-200 p-6 flex flex-col justify-between h-full transition-all"
          >
            {/* Icon dalam lingkaran hijau */}
            <div className="flex flex-col items-center">
              <div className="flex justify-center items-center bg-green-100 w-16 h-16 rounded-full">
                <GiNetworkBars className="text-green-600 text-3xl" />
              </div>

              {/* Judul */}
              <h1 className="text-lg font-semibold text-gray-800 mt-4 text-center">
                {card.title}
              </h1>

              <p className="text-sm text-gray-600 mt-3 text-center">
                Cost per Sample:
              </p>

              {/* Harga */}
              <p className="text-sm text-gray-600 mt-2 text-center">
                <span className="font-medium text-gray-800">
                  {card.priceResearch}
                </span>{" "}
                (Research Institutes, Universities, Government)
              </p>
              <p className="text-sm text-gray-600 text-center">
                <span className="font-medium text-gray-800">
                  {card.priceIndustry}
                </span>{" "}
                (Industries) -
                <span className="text-red-500"> Exclude PPN 11%</span>
              </p>
            </div>

            {/* Link hasil contoh */}
            <button className="mt-5 text-green-600 font-medium hover:underline transition-all">
              Click for Result Example
            </button>

            {/* Tombol pemesanan */}
            <button className="mt-5 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition-all">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardAnalysis;
