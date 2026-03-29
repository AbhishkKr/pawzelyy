// src/pages/Cart.jsx

import { useState } from "react";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { db, auth } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function Cart() {
  const { cart, removeFromCart, setCart } = useCart();

  const [showCheckout, setShowCheckout] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handlePlaceOrder = async () => {
    const user = auth.currentUser;

    if (!user) {
      alert("Please login first");
      return;
    }

    if (!name || !phone || !address) {
      alert("Please fill all details");
      return;
    }

    try {
      setLoading(true);

      await addDoc(collection(db, "orders"), {
        userId: user.uid,
        userEmail: user.email,
        customerName: name,
        phone,
        address,
        items: cart,
        total: total,
        status: "placed",
        createdAt: serverTimestamp()
      });

      setCart([]);
      setOrderPlaced(true);
      setShowCheckout(false);

    } catch (error) {
      console.error("Error placing order:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <section className="px-6 md:px-10 py-24 max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold mb-10">Your Cart</h1>

        {/* Empty Cart */}
        {cart.length === 0 && !orderPlaced ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b py-4"
            >
              {/* LEFT */}
              <div className="flex items-center gap-4">

                {/*IMAGE */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-xl border shadow-sm hover:scale-105 transition"
                />

                {/* DETAILS */}
                <div>
                  <p className="font-semibold text-lg">{item.name}</p>
                  <p className="text-gray-500">₹{item.price}</p>
                </div>
              </div>

              {/* REMOVE */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          ))
        )}

        {/* TOTAL */}
        {cart.length > 0 && (
          <div className="mt-10 text-xl font-bold">
            Total: ₹{total}
          </div>
        )}

        {/* CHECKOUT BUTTON */}
        {cart.length > 0 && !showCheckout && !orderPlaced && (
          <button
            onClick={() => setShowCheckout(true)}
            className="mt-6 bg-[#381124] text-white px-8 py-3 rounded-lg hover:bg-[#5a1a38] transition"
          >
            Checkout
          </button>
        )}

        {/* CHECKOUT FORM */}
        {showCheckout && !orderPlaced && (
          <div className="mt-8 bg-gray-100 p-6 rounded-xl max-w-md">

            <h2 className="text-xl font-semibold mb-4">
              Delivery Details
            </h2>

            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mb-3 p-2 border rounded"
            />

            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full mb-3 p-2 border rounded"
            />

            <textarea
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full mb-3 p-2 border rounded"
            />

            <button
              onClick={handlePlaceOrder}
              disabled={loading}
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 disabled:opacity-50"
            >
              {loading ? "Placing Order..." : "Place Order"}
            </button>
          </div>
        )}

        {/* SUCCESS */}
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