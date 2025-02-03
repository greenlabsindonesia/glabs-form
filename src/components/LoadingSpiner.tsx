const LoadingSpiner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <svg
        className="w-16 h-16 animate-spin"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M50 10L56 20H44L50 10ZM50 90L44 80H56L50 90ZM90 50L80 56V44L90 50ZM10 50L20 44V56L10 50ZM76.5 23.5L69.5 30.5L65.5 20.5L76.5 23.5ZM23.5 76.5L30.5 69.5L20.5 65.5L23.5 76.5ZM76.5 76.5L65.5 79.5L69.5 69.5L76.5 76.5ZM23.5 23.5L30.5 30.5L20.5 34.5L23.5 23.5Z"
          fill="currentColor"
          className="text-gray-500 animate-spin"
        />
      </svg>
    </div>
  );
};

export default LoadingSpiner;
