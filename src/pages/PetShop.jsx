// src/pages/PetShop.jsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const products = [
    { name: "Pet Treats", image: "/image/food1.avif", price: 299 },
    { name: "Veterinary Diet", image: "/image/food2.avif", price: 899 },
    { name: "Cat Litter", image: "/image/food3.avif", price: 499 },
    { name: "Purina Pro Plan", image: "/image/food4.avif", price: 999 },
    { name: "Pet Shampoo", image: "/image/shampoo.jpg", price: 349 },
    { name: "Dog Chew Toys", image: "/image/toys.jpg", price: 199 },
    { name: "Pet Grooming Kit", image: "/image/grooming.jpg", price: 699 },
    { name: "Automatic Pet Feeder", image: "/image/feeder.jpg", price: 1599 },
    { name: "Pet Bed", image: "/image/bed.jpg", price: 799 },
    { name: "Dog Collar & Leash", image: "/image/collar.jpg", price: 399 },
    { name: "Pet Water Fountain", image: "/image/fountain.jpg", price: 1299 },
    { name: "Pet Travel Carrier", image: "/image/carrier.jpg", price: 1499 }
];

export default function PetShop() {
    return (
        <>
            <Navbar />

            <section className="px-6 md:px-16 py-20 max-w-7xl mx-auto">

                <h1 className="text-4xl font-bold text-center mb-6">
                    Pet Care Products
                </h1>

                <p className="text-gray-600 text-center mb-16">
                    Everything your pet needs for a healthy and happy life.
                </p>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

                    {products.map((product) => (
                        <div
                            key={product.name}
                            className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition"
                        >

                            <img
                                src={product.image}
                                alt={product.name}
                                className="h-40 mx-auto object-contain"
                            />

                            <h3 className="mt-4 font-semibold text-lg">
                                {product.name}
                            </h3>

                            <p className="text-[#381124] font-bold mt-2">
                                ₹{product.price}
                            </p>

                            <div className="flex gap-3 mt-4">

                                {/* Add to Cart */}
                                <button className="flex-1 border border-[#381124] text-[#381124] py-2 rounded-lg hover:bg-[#381124] hover:text-white transition">
                                    Add to Cart
                                </button>

                                {/* Buy */}
                                <button className="flex-1 bg-[#381124] text-white py-2 rounded-lg hover:bg-[#5a1a38] transition">
                                    Buy
                                </button>

                            </div>

                        </div>
                    ))}

                </div>

            </section>

            <Footer />
        </>
    );
}