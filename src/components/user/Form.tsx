import React, { useRef, useState } from "react";
import {
  invoiceInformation,
  personal,
  sampleDescription,
  sectionFieldsbottom,
  sectionFieldsTop,
} from "../../types/type";
import signExample from "../../assets/writing.png";
import SignaturePad from "./SignaturePad";
const Form: React.FC = () => {
  const [formData, setFormData] = useState<any>({});
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [openSignature, setOpenSignature] = useState<boolean>(false);
  const today = new Date();
  const formattedDate = today.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleInputChange = (fieldName: string, value: string) => {
    setFormData((prev: any) => ({ ...prev, [fieldName]: value }));
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    console.log("Selected Image:", selectedImage);
  };
  return (
    <div className="">
      {/* Form Section */}
      <div className="max-w-4xl mx-auto bg-white shadow-md my-5 rounded-lg p-6 md:p-10 mt-6 border">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-8">
          Client Approval Form
        </h1>
        {/* Section I: Informasi Umum */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            I. Informasi Umum Perusahaan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sectionFieldsTop.map((field, index) => (
              <div key={index}>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  {field.label}
                </label>
                {field.type === "select" && field.options ? (
                  <select
                    onChange={(e) =>
                      handleInputChange(field.label, e.target.value)
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="" disabled selected>
                      {field.placeholder}
                    </option>
                    {field.options.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    onChange={(e) =>
                      handleInputChange(field.label, e.target.value)
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                )}
              </div>
            ))}
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Alamat
              </label>
              <textarea
                placeholder="Masukkan alamat perusahaan"
                rows={3}
                onChange={(e) => handleInputChange("address", e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>
            {sectionFieldsbottom.map((field, index) => (
              <div key={index}>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  {field.label}
                </label>
                {field.type === "select" && field.options ? (
                  <select
                    onChange={(e) =>
                      handleInputChange(field.label, e.target.value)
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="" disabled selected>
                      {field.placeholder}
                    </option>
                    {field.options.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    onChange={(e) =>
                      handleInputChange(field.label, e.target.value)
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                )}
              </div>
            ))}
          </div>
        </section>
        {/* Section II: Personel Penghubung */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            II. Personel Penghubung
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {personal.map((field) => (
              <div key={field.fieldName}>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  {field.label}
                </label>
                <input
                  onChange={(e) =>
                    handleInputChange(field.label, e.target.value)
                  }
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            ))}
          </div>
        </section>
        {/* Section III: Deskripsi Sampel */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            III. Informasi Penagihan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {invoiceInformation.map((field) => (
              <div key={field.fieldName}>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  {field.label}
                </label>
                <input
                  onChange={(e) =>
                    handleInputChange(field.label, e.target.value)
                  }
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            ))}
          </div>
        </section>
        {/* Section IV: Deskripsi Sampel */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            IV. Deskripsi Sampel
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sampleDescription.map((field, index) => (
              <div key={index}>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  {field.label}
                </label>
                {field.type === "select" && field.options ? (
                  <select
                    onChange={(e) =>
                      handleInputChange(field.label, e.target.value)
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="" disabled selected>
                      {field.placeholder}
                    </option>
                    {field.options.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    onChange={(e) =>
                      handleInputChange(field.label, e.target.value)
                    }
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                )}
              </div>
            ))}
          </div>
        </section>
        <div className="mb-8">
          <p className="text-sm">
            {" "}
            <span className="text-red-500">*</span>Syarat dan ketentuan berlaku
            / Term and condition applied
          </p>
          <p className="text-sm">
            <span className="text-red-500">*</span>Status uji regular, urgent,
            dan very urgent memiliki harga yang bereda / All services may vary
            in price
          </p>
        </div>
        <div className="mb-8 border rounded-md w-full p-5">
          <p>Dengan ini saya mengonfirmasi bahwa data di atas ialah benar</p>
          <p className="italic text-sm">
            I hereby confirm that the data above is true
          </p>
          <p className="py-5">Bandung, {formattedDate}</p>
          <div className="">
            {/* Bagian Preview Gambar */}
            <div className="w-full ">
              {selectedImage ? (
                <div className="my-5 w-1/3">
                  <img
                    src={selectedImage}
                    alt="Selected"
                    className="w-full max-w-sm max-h-64 object-cover rounded-lg"
                  />
                </div>
              ) : (
                <div className="my-5 w-1/3 ">
                  <img
                    src={signExample}
                    alt="Selected"
                    className="w-full max-w-sm max-h-64 object-cover rounded-lg"
                  />
                </div>
              )}
            </div>
            {/* Tombol Upload dan Input File */}
            <div className="flex gap-4">
              {/* Tombol untuk Memilih File */}
              <button
                onClick={triggerFileInput}
                className="text-sm text-blue-600 bg-blue-50 py-2 px-4 rounded-full shadow hover:bg-blue-100 transition"
              >
                Select Image
              </button>

              {/* Tombol untuk Submit */}
              <button
                onClick={() => setOpenSignature(!openSignature)}
                className="text-sm text-green-600 bg-green-50 py-2 px-4 rounded-full shadow hover:bg-green-100 transition"
              >
                Create Sign
              </button>
            </div>

            {/* Input File (Tersembunyi) */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>
        </div>
        <div
          className={`mb-8 border rounded-md w-full p-5 flex justify-center ${
            openSignature ? "" : "hidden"
          }`}
        >
          <div className="w-full">
            <div
              onClick={() => setOpenSignature(!openSignature)}
              className={`flex justify-end mb-3 cursor-pointer`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>
            <SignaturePad />
          </div>
        </div>
        <div className="text-center">
          <button
            onClick={handleSubmit}
            className="w-full md:w-1/3 px-6 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
