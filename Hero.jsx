// src/components/Hero.jsx
export default function Hero() {
    return (
      <section className="flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-b from-pink-100 via-white to-white">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 max-w-3xl leading-tight">
          Master the Art of Conversation with <span className="text-pink-600">Deep Rizz</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-xl">
          Your AI-powered wingman for texting, flirting, dating, and meaningful relationships.
        </p>
        <button className="mt-8 px-6 py-3 bg-pink-600 text-white rounded-2xl text-lg font-medium hover:bg-pink-700 transition-all">
          Try it Now
        </button>
      </section>
    );
  }
  