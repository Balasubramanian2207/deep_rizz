// src/components/ChatDemo.jsx
import { useState } from "react";

export default function ChatDemo() {
  const [userText, setUserText] = useState("");
  const [aiReply, setAiReply] = useState("");

  const handleGenerateReply = () => {
    if (userText.trim() === "") return;
    // Mock AI reply
    setAiReply("That's so sweet! I’d love to hear more. 😊");
  };

  return (
    <section className="py-20 bg-gray-100 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Try the Deep Rizz Vibe
        </h2>
        <p className="text-gray-600 mb-8">
          Type a message and see how Deep Rizz helps you keep it smooth.
        </p>

        <div className="bg-white p-6 rounded-xl shadow-md text-left">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your Message
          </label>
          <input
            type="text"
            value={userText}
            onChange={(e) => setUserText(e.target.value)}
            placeholder="Hey, how was your day?"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 mb-4"
          />
          <button
            onClick={handleGenerateReply}
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg font-semibold transition"
          >
            Generate Reply
          </button>

          {aiReply && (
            <div className="mt-6">
              <p className="text-sm text-gray-500 mb-1">Deep Rizz Suggests:</p>
              <div className="bg-pink-100 text-pink-800 p-4 rounded-lg">
                {aiReply}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
