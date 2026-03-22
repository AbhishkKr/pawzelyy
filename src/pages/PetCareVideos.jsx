// src/pages/PetCareVideos.jsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const videos = [
  {
    title: "How to Train Your Dog",
    url: "https://www.youtube.com/embed/gYjnAPtID1w"
  },
  {
    title: "Cat Care Basics",
    url: "https://www.youtube.com/embed/zPOAaDUzVDY"
  },
  {
    title: "Pet Grooming Guide",
    url: "https://www.youtube.com/embed/Ni1yyrD2Bi0"
  },
  {
    title: "Dog Exercise Tips",
    url: "https://www.youtube.com/embed/cXN8Obr1yss"
  }
];

export default function PetCareVideos() {
  return (
    <>
      <Navbar />

      <section className="px-4 sm:px-6 md:px-10 lg:px-16 pt-24 sm:pt-28 pb-12 sm:pb-16 md:pb-20 max-w-7xl mx-auto">

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6">
          Pet Care Videos
        </h1>

        <p className="text-gray-600 text-sm sm:text-base text-center max-w-md sm:max-w-xl md:max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-16 leading-relaxed">
          Watch helpful videos about pet care, training, grooming,
          and keeping your pets healthy and happy.
        </p>

        {/* Video Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">

          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden"
            >

              {/* Responsive Video */}
              <div className="relative w-full aspect-video">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="p-4 sm:p-5 md:p-6">

                <h3 className="text-base sm:text-lg md:text-xl font-semibold">
                  {video.title}
                </h3>

              </div>

            </div>
          ))}

        </div>

      </section>

      <Footer />
    </>
  );
}