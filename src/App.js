import React from "react";
import ReviewSection from "./components/ReviewSection";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div
        className="top-section flex items-center justify-center text-white py-32 relative"
        style={{ backgroundColor: "#293339" }}
      >
        <div className="text-center max-w-4xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Reviews of Our <br />
            Services
          </h1>
          <p className="text-base md:text-lg mb-12">
            Our clients are at the center of everything we do. We consider each
            project not just a construction endeavor, but a collaborative
            journey with you.
          </p>
        </div>

        <div className="absolute top-0 bottom-0 left-24 transform -translate-x-1/2 border-l-[2px] border-gray-300 opacity-15"></div>
        <div className="absolute top-0 bottom-0 left-96 transform -translate-x-1/2 border-l-[2px] border-gray-300 opacity-15"></div>

        <div className="absolute top-0 bottom-0 right-24 transform -translate-x-1/2 border-l-[2px] border-gray-300 opacity-15"></div>

        <div className="absolute top-0 bottom-0 right-96 transform -translate-x-1/2 border-l-[2px] border-gray-300 opacity-15"></div>
        <div className="absolute top-0 bottom-0 right-108 transform -translate-x-1/2 border-l-[2px] border-gray-300 opacity-15"></div>
      </div>

      <ReviewSection />
    </div>
  );
};

export default App;
