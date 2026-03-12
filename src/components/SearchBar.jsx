// src/components/SearchBar.jsx
export default function SearchBar() {
  return (
    <div className="mx-4 md:mx-auto -mt-10 max-w-4xl rounded-2xl md:rounded-full bg-white shadow-lg p-3">

      <div className="flex flex-col md:flex-row">

        <input
          type="text"
          placeholder="Enter your location"
          className="flex-1 px-6 py-3 outline-none rounded-lg md:rounded-l-full"
        />

        <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-0 mt-3 md:mt-0">
          <button className="px-4 md:px-6 py-2 font-medium">
            Find a dog
          </button>

          <button className="px-4 md:px-6 py-2 font-medium">
            Find a cat
          </button>

          <button className="px-4 md:px-6 py-2 font-medium md:rounded-r-full">
            Other pets
          </button>
        </div>

      </div>

    </div>
  );
}
