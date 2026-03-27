// src/pages/Orders.jsx

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { db, auth } from "../firebase";
import {
    collection,
    getDocs,
    query,
    where,
    orderBy
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

export default function Orders() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (!user) {
                setLoading(false);
                return;
            }

            try {
                const q = query(
                    collection(db, "orders"),
                    orderBy("createdAt", "desc")
                );
                const snapshot = await getDocs(q);

                const data = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));

                setOrders(data);

            } catch (error) {
                console.error("Error fetching orders:", error);
            } finally {
                setLoading(false);
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <>
            <Navbar />

            <section className="px-6 md:px-16 py-20 max-w-5xl mx-auto">

                <h1 className="text-3xl font-bold mb-10">My Orders</h1>

                {loading && <p className="text-gray-500">Loading orders...</p>}

                {!loading && orders.length === 0 && (
                    <p className="text-gray-500">No orders yet.</p>
                )}

                {!loading &&
                    orders.map((order) => (
                        <div key={order.id} className="bg-white shadow-lg rounded-2xl p-6 mb-6">

                            <div className="flex justify-between mb-4">
                                <div>
                                    <p className="text-sm text-gray-400">
                                        Order ID: {order.id.slice(0, 6)}
                                    </p>
                                    <p className="text-sm text-gray-400">
                                        {order.createdAt
                                            ? order.createdAt.toDate().toLocaleString()
                                            : "Just now"}
                                    </p>
                                </div>

                                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                                    {order.status}
                                </span>
                            </div>

                            <div className="mb-4 border-t pt-4">
                                <p><strong>Name:</strong> {order.customerName}</p>
                                <p><strong>Phone:</strong> {order.phone}</p>
                                <p><strong>Address:</strong> {order.address}</p>
                            </div>

                            <div className="mb-4 border-t pt-4">
                                <h3 className="font-semibold mb-2">Items:</h3>

                                {order.items.map((item, index) => (
                                    <div key={index} className="flex justify-between">
                                        <p>{item.name}</p>
                                        <p>₹{item.price}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t pt-4 text-lg font-bold">
                                Total: ₹{order.total}
                            </div>

                        </div>
                    ))}

            </section>

            <Footer />
        </>
    );
}