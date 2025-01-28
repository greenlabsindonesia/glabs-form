import React, { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

const SignaturePad: React.FC = () => {
  const sigPad = useRef<SignatureCanvas>(null);

  const clearSignature = () => {
    sigPad.current?.clear();
  };

  const saveSignature = () => {
    if (sigPad.current?.isEmpty()) {
      alert("Tanda tangan kosong!");
    } else {
      const dataURL = sigPad.current?.toDataURL() ?? ""; // Menghasilkan data dalam format Base64
      const link = document.createElement("a");
      link.href = dataURL;
      link.download = "signature.png"; // Nama file hasil download
      link.click(); // Memulai unduhan
    }
  };

  return (
    <div className="w-full max-w-[500px] mx-auto">
      <SignatureCanvas
        ref={sigPad}
        penColor="black"
        canvasProps={{
          width: 500,
          height: 200,
          className:
            "bg-white border border-gray-400 rounded-md w-full h-auto",
        }}
      />
      <div className="flex justify-between mt-4">
        <button
          onClick={clearSignature}
          className="text-sm text-red-600 bg-red-50 py-2 px-4 rounded-full shadow hover:bg-red-100 transition"
        >
          Bersihkan
        </button>
        <button
          onClick={saveSignature}
          className="text-sm text-blue-600 bg-blue-50 py-2 px-4 rounded-full shadow hover:bg-blue-100 transition"
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default SignaturePad;
