import { IoIosStar } from "react-icons/io";

export default function Testimonial() {
    return (
        <section className="px-10 py-24">

            <div className="grid md:grid-cols-2 gap-20 items-center">

                {/* LEFT SIDE */}
                <div>

                    {/* Stars */}
                    <div className="flex gap-2 text-yellow-400 text-2xl mb-6">
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                    </div>

                    {/* Quote */}
                    <p className="text-2xl text-purple-900 leading-relaxed max-w-xl">
                        “There were funny parts (most of which were in the trailers),
                        but there were dark parts, too. If I had smaller kids younger
                        than 10 or so, I wouldn’t be seeing this movie.”
                    </p>

                    {/* Author */}
                    <div className="mt-8">
                        <h4 className="font-bold text-purple-900 text-lg">
                            Abhishek Ranjan 
                        </h4>

                        <p className="text-gray-500">
                            Founder and CEO @Pawzely
                        </p>
                    </div>

                </div>

                {/* RIGHT IMAGE */}
                <div className="flex justify-center">

                    <img
                        src="/image/testimonial.avif"
                        alt="testimonial"
                        className="rounded-3xl w-95 h-112.5 object-cover shadow-lg"
                    />

                </div>

            </div>

        </section>
    );
}
