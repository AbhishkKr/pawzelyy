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

      <section className="px-6 md:px-16 py-20 max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-6">
          Pet Care Videos
        </h1>

        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Watch helpful videos about pet care, training, grooming,
          and keeping your pets healthy and happy.
        </p>

        {/* Video Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >

              <iframe
                className="w-full h-52"
                src={video.url}
                title={video.title}
                frameBorder="0"
                allowFullScreen
              ></iframe>

              <div className="p-6">

                <h3 className="text-lg font-semibold">
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