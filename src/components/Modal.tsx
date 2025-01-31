import { useGlobalContext } from "../context/AppContext";
import { FaCircleCheck } from "react-icons/fa6";
import { modalType} from "../types/popUptype";

const Modal: React.FC<modalType> = ({ Icon, titleMessage, message }) => {
  const { state, stateHandle } = useGlobalContext();
  const handleClose = () => {
    stateHandle("toggle", !state.toggle);
  };

  return (
    <div className="">
  

      {!state.toggle && (
        <div
          className="fixed p-5 inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
          onClick={handleClose} // Close when clicking outside modal
        >
          <div
            className="relative p-4 w-full max-w-md bg-white rounded-lg shadow-md dark:bg-gray-800"
            onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside modal
          >
            <button
              onClick={handleClose}
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="p-5 text-center">
            <Icon/>
              <h3 className="mb-5 text-lg font-semibold text-gray-700 dark:text-gray-200">
                {titleMessage}
              </h3>
              <p className="mb-5 text-sm text-gray-500 dark:text-gray-400">
                {message}
              </p>
              <button
                onClick={handleClose}
                className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Oke
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
