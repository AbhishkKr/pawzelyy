import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function PetFood() {
  const foods = [
    { name: "Pet Treats", image: "/image/food1.avif" },
    { name: "Veterinary Diet", image: "/image/food2.avif" },
    { name: "Cat Litter", image: "/image/food3.avif" },
    { name: "Purina Pro Plan", image: "/image/food4.avif" },
    { name: "Pet Shampoo", image: "/image/shampoo.jpg" },
    { name: "Dog Chew Toys", image: "/image/toys.jpg" },
    { name: "Pet Grooming Kit", image: "/image/grooming.jpg" },
    { name: "Automatic Pet Feeder", image: "/image/feeder.jpg" },
    { name: "Pet Bed", image: "/image/bed.jpg" },
    { name: "Dog Collar & Leash", image: "/image/collar.jpg" },
    { name: "Pet Water Fountain", image: "/image/fountain.jpg" },
    { name: "Pet Travel Carrier", image: "/image/carrier.jpg" },
  ];

  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;

    const scroll = setInterval(() => {
      if (container) {
        container.scrollLeft += 1;

        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth
        ) {
          container.scrollLeft = 0;
        }
      }
    }, 20);

    return () => clearInterval(scroll);
  }, []);

  return (
    // FIX 1: Responsive horizontal padding and vertical padding
    <section className="px-4 sm:px-6 md:px-10 py-10 md:py-20">
      {/* FIX 2: Responsive inner padding and border-radius */}
      <div className="bg-[#EDE5DC] rounded-3xl md:rounded-[40px] p-6 sm:p-8 md:p-16">

        {/* Header */}
        {/* FIX 3: Allow header row to wrap on small screens; add gap */}
        <div className="flex flex-wrap justify-between items-start gap-4 mb-8 md:mb-12">
          <div>
            <p className="text-purple-600 text-sm">Pet Care Products</p>
            <div className="w-10 h-1 bg-purple-600 mt-2 mb-4"></div>

            {/* FIX 4: Responsive heading size */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-900 max-w-xs sm:max-w-sm md:max-w-xl">
              Save an Extra 5-10% on Every Autoship Order
            </h2>
          </div>

          {/* FIX 5: Ensure the link doesn't get squished */}
          <Link
            to="/shop-products"
            className="text-purple-700 font-semibold hover:underline whitespace-nowrap self-start"
          >
            SEE MORE →
          </Link>
        </div>

        {/* Auto Scroll Cards */}
        {/* FIX 6: Responsive gap between cards */}
        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-8 overflow-x-auto pb-4 scrollbar-hide"
        >
          {foods.map((food) => (
            <Link
              to="/shop-products"
              key={food.name}
              // FIX 7: Slightly smaller card on mobile; consistent min-width using bracket notation
              className="min-w-50 sm:min-w-55 md:min-w-65 bg-white rounded-2xl p-4 md:p-6 text-center shadow-sm
              hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block"
            >
              <img
                src={food.image}
                alt={food.name}
                className="h-24 md:h-32 mx-auto object-contain"
              />

              <p className="mt-3 md:mt-4 font-semibold text-purple-900 text-sm md:text-base">
                {food.name}
              </p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
