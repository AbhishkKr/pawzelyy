export default function HowItWorks() {
  return (
    <div className="px-10 py-20">

      <div className="max-w-5xl mx-auto">

        <div className="w-12 h-1 bg-purple-700 mb-6"></div>

        <h1 className="text-4xl font-bold text-purple-900 mb-6">
          Planning to Adopt a Pet?
        </h1>

        <p className="text-gray-600 mb-12">
          Dogs make for the best friends, and it's only right that we celebrate
          them for all the joy and love they’ve given us.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-6 rounded-2xl shadow">
            <h3 className="font-bold text-lg mb-2">1. Search Pets</h3>
            <p className="text-gray-600">
              Find dogs and cats near your location.
            </p>
          </div>

          <div className="p-6 rounded-2xl shadow">
            <h3 className="font-bold text-lg mb-2">2. Meet the Pet</h3>
            <p className="text-gray-600">
              Visit the shelter and meet your new companion.
            </p>
          </div>

          <div className="p-6 rounded-2xl shadow">
            <h3 className="font-bold text-lg mb-2">3. Adopt & Love</h3>
            <p className="text-gray-600">
              Complete adoption and welcome your pet home.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}