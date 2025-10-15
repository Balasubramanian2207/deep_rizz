// src/components/Features.jsx
const features = [
    {
      title: "AI-Powered Reply Suggestions",
      desc: "Get context-aware, smooth, and flirty responses instantly.",
      emoji: "💬",
    },
    {
      title: "Tone & Emotion Analysis",
      desc: "Make sure you’re saying the right thing the right way.",
      emoji: "🧠",
    },
    {
      title: "Date Night Ideas & Plans",
      desc: "Impress them with personalized date ideas.",
      emoji: "🌃",
    },
    {
      title: "Real-Time Text Assistant",
      desc: "Never run out of things to say. Ever.",
      emoji: "⚡",
    },
  ];
  
  export default function Features() {
    return (
      <section className="py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to Impress
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Deep Rizz helps you build better conversations, boost confidence, and make genuine connections.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-pink-50 p-6 rounded-2xl text-left shadow-sm hover:shadow-lg transition">
                <div className="text-4xl mb-4">{feature.emoji}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  