import { useEffect, useRef } from "react";

export default function PetFood() {
  const foods = [
    { name: "Pet Treats", image: "/image/food1.avif" },
    { name: "Veterinary Diet", image: "/image/food2.avif" },
    { name: "Cat Litter", image: "/image/food3.avif" },
    { name: "Purina Pro Plan", image: "/image/food4.avif" },
    { name: "Pet Treats", image: "/image/food1.avif" },
    { name: "Veterinary Diet", image: "/image/food2.avif" },
    { name: "Cat Litter", image: "/image/food3.avif" },
    { name: "Purina Pro Plan", image: "/image/food4.avif" },
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
    <section className="px-10 py-20">

      <div className="bg-[#EDE5DC] rounded-[40px] p-16">

        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <p className="text-purple-600 text-sm">Pets Food</p>
            <div className="w-10 h-1 bg-purple-600 mt-2 mb-4"></div>

            <h2 className="text-4xl font-bold text-purple-900 max-w-xl">
              Save an Extra 5-10% on Every Autoship Order
            </h2>
          </div>

          <button className="text-purple-700 font-semibold hover:underline">
            SEE MORE →
          </button>
        </div>

        {/* Auto Scroll Cards */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-4"
        >
          {foods.map((food) => (
            <div
              key={food.name}
              className="min-w-65 bg-white rounded-2xl p-6 text-center shadow-sm"
            >
              <img
                src={food.image}
                alt={food.name}
                className="h-32 mx-auto object-contain"
              />

              <p className="mt-4 font-semibold text-purple-900">
                {food.name}
              </p>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}