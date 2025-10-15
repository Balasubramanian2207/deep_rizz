// src/components/Navbar.jsx
export default function Navbar() {
    return (
      <nav className="flex justify-between items-center p-6 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-pink-600">Deep Rizz</h1>
        <div className="space-x-4">
          <a href="#" className="text-gray-700 hover:text-pink-600">Home</a>
          <a href="#" className="text-gray-700 hover:text-pink-600">Features</a>
          <a href="#" className="text-gray-700 hover:text-pink-600">Contact</a>
        </div>
      </nav>
    );
  }
  