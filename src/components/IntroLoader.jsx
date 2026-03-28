// src/components/IntroLoader.jsx

export default function IntroLoader() {
  return (
    <div className="fixed inset-0 z-999 bg-[#381124] flex items-center justify-center overflow-hidden">

      <div className="flex flex-col items-center gap-6">

        {/* 🐾 Paw Logo */}
        <img
          src="/image/paww.png"
          alt="paw"
          className="w-20 h-20 object-contain animate-pawEnter"
        />

        {/* ✨ Brand Text */}
        <h1 className="text-white text-xl tracking-[0.2em] opacity-0 animate-textReveal">
          PAWZELY
        </h1>

      </div>

    </div>
  );
}