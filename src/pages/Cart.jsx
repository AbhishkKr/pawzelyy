import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <Navbar />

      <section className="px-10 py-20 max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold mb-10">Your Cart</h1>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.name}
              className="flex justify-between items-center border-b py-4"
            >
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-gray-500">₹{item.price}</p>
              </div>

              <button
                onClick={() => removeFromCart(item.name)}
                className="text-red-500"
              >
                Remove
              </button>
            </div>
          ))
        )}

        <div className="mt-10 text-xl font-bold">
          Total: ₹{total}
        </div>

        <button className="mt-6 bg-[#381124] text-white px-8 py-3 rounded-lg hover:bg-[#5a1a38] transition">
          Checkout
        </button>

      </section>

      <Footer />
    </>
  );
}