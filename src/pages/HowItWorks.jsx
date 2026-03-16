import { Link } from "react-router-dom";

export default function HowItWorks() {

    const steps = [
        {
            title: "Search Pets",
            desc: "Browse hundreds of pets available for adoption near your location."
        },
        {
            title: "View Pet Details",
            desc: "Check the pet’s breed, age, personality, and adoption requirements."
        },
        {
            title: "Meet the Pet",
            desc: "Visit the shelter or connect with the owner to meet your future companion."
        },
        {
            title: "Adopt & Welcome Home",
            desc: "Complete the adoption process and give your new friend a loving home."
        }
    ];

    return (
        <section className="px-6 md:px-10 py-20 bg-gray-50">

            <div className="max-w-6xl mx-auto text-center">

                {/* top accent */}
                <div className="w-12 h-1 bg-purple-700 mx-auto mb-6"></div>

                <h1 className="text-4xl font-bold text-purple-900 mb-4">
                    Planning to Adopt a Pet?
                </h1>

                <p className="text-gray-600 max-w-2xl mx-auto mb-16">
                    Adopting a pet is a beautiful journey. Pawzely makes the process simple,
                    transparent, and safe so you can focus on welcoming your new best friend.
                </p>

                {/* Steps */}
                <div className="grid md:grid-cols-4 gap-8">

                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
                        >

                            {/* Step number */}
                            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-purple-100 text-purple-800 font-bold">
                                {index + 1}
                            </div>

                            <h3 className="font-bold text-lg mb-2">
                                {step.title}
                            </h3>

                            <p className="text-gray-600 text-sm">
                                {step.desc}
                            </p>

                        </div>
                    ))}

                </div>

                {/* CTA */}
                <div className="mt-16">
                    <Link
                        to="/pets"
                        className="bg-purple-700 text-white px-8 py-3 rounded-full hover:bg-purple-800 transition inline-block"
                    >
                        🐾 Start Your Adoption Journey
                    </Link>
                </div>

            </div>

        </section>
    );
}