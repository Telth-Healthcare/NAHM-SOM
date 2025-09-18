import React from "react";

function Empty() {
  return (
    <div className="flex items-center justify-center min-h-screen relative overflow-hidden">
      {/* Background bubbles */}
      <div className="absolute w-72 h-72 bg-blue-300/30 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
      <div className="absolute w-96 h-96 bg-purple-300/30 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>

      {/* Content */}
      <div className="relative text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900">
          Coming Soon
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-600">
          We’re working to bring something amazing. Namo - Som
        </p>
      </div>
    </div>
  );
}

export default Empty;
