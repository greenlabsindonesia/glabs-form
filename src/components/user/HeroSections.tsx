import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import bg from "../../assets/gambar.jpeg";
import Logo from "../../assets/Logo.png";

const navigation = [
  { name: "Home", path: "/" },
  { name: "Form", path: "/form" },
  { name: "FAQ", path: "/marketplace" },
];

export default function HeroSections() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-[100vh]">
      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={bg}
        style={{ filter: "brightness(0.7)" }}
        alt="Background"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navbar */}
        <header className="flex items-center justify-between px-6 py-4 lg:px-10">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <img src={Logo} alt="Logo" className="h-8 w-auto" />
            <p className="text-[#49EB09] text-xl font-bold">
              <span className="text-white">Green</span>Labs
            </p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <p
                key={item.name}
                onClick={() => navigate(item.path)}
                className="text-sm font-semibold text-white hover:text-[#49EB09] cursor-pointer transition"
              >
                {item.name}
              </p>
            ))}
            <p
              onClick={() => navigate("/login")}
              className="px-4 py-2 text-sm font-medium text-white bg-[#06D001] hover:bg-[#04A700] rounded-md shadow cursor-pointer transition"
            >
              Log in
            </p>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden text-white"
          >
            <Bars3Icon className="w-6 h-6" />
          </button>
        </header>

        {/* Mobile Menu */}
        <Dialog
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70"></div>
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-3/4 bg-white shadow-lg">
          <div className="flex items-center justify-between p-4 border-b">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => {
                navigate("/");
                setMobileMenuOpen(false);
              }}
            >
              <img src={Logo} alt="Logo" className="h-8 w-auto" />
              <p className="text-[#49EB09] text-xl font-bold">
                <span className="text-black">Green</span>Labs
              </p>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-700"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>
          <nav className="space-y-4 px-6 py-6">
            {navigation.map((item) => (
              <p
                key={item.name}
                onClick={() => {
                  navigate(item.path);
                  setMobileMenuOpen(false);
                }}
                className="block text-base font-semibold text-gray-900 hover:bg-gray-100 rounded-md px-3 py-2 cursor-pointer"
              >
                {item.name}
              </p>
            ))}
            <p
              onClick={() => {
                navigate("/login");
                setMobileMenuOpen(false);
              }}
              className="block text-base font-semibold text-white bg-[#06D001] hover:bg-[#04A700] rounded-md px-3 py-2 text-center cursor-pointer"
            >
              Log in
            </p>
          </nav>
        </DialogPanel>
      </Dialog>

        {/* Hero Content */}
        <div className="flex flex-col items-center justify-center text-center px-6 h-[calc(100vh-70px)]">
          <h1 className="text-4xl sm:text-6xl font-bold text-white">
            Data to enrich your online business
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
          </p>
          <div className="mt-8 flex space-x-4">
            <button
              onClick={() => navigate("/get-started")}
              className="px-6 py-3 text-white bg-[#06D001] hover:bg-[#04A700] rounded-md font-medium"
            >
              Get Started
            </button>
            <button
              onClick={() => navigate("/learn-more")}
              className="px-6 py-3 text-[#06D001] bg-white hover:bg-gray-100 rounded-md font-medium"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
