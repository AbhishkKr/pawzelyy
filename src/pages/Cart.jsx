import { useState } from "react";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  const [showCheckout, setShowCheckout] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

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

        {/* Total */}
        <div className="mt-10 text-xl font-bold">
          Total: ₹{total}
        </div>

        {/* Checkout Button */}
        {cart.length > 0 && !showCheckout && !orderPlaced && (
          <button
            onClick={() => setShowCheckout(true)}
            className="mt-6 bg-[#381124] text-white px-8 py-3 rounded-lg hover:bg-[#5a1a38] transition"
          >
            Checkout
          </button>
        )}

        {/* Checkout Form */}
        {showCheckout && !orderPlaced && (
          <div className="mt-8 bg-gray-100 p-6 rounded-xl max-w-md">

            <h2 className="text-xl font-semibold mb-4">
              Delivery Details
            </h2>

            <input
              type="text"
              placeholder="Full Name"
              className="w-full mb-3 p-2 border rounded"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full mb-3 p-2 border rounded"
            />

            <textarea
              placeholder="Address"
              className="w-full mb-3 p-2 border rounded"
            />

            <button
              onClick={() => setOrderPlaced(true)}
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
            >
              Place Order
            </button>
          </div>
        )}

        {/* Success Message */}
        {orderPlaced && (
          <div className="mt-8 p-6 bg-green-100 rounded-xl">
            <h2 className="text-xl font-bold text-green-700">
              🎉 Order Placed Successfully!
            </h2>
            <p>Your order will be delivered soon.</p>
          </div>
        )}

      </section>

      <Footer />
    </>
  );
}