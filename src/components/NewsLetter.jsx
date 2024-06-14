import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
export default function NewsLetter() {
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto py-16 bg-neutralSilver">
      <div className="flex items-center justify-center lg:w-2/5 mx-auto">
        <div className="text-center">
          <h2 className="lg:text-5xl text-3xl text-black font-semibold mb-4 leading-snug">
            Pellentesque suscipit fringilla
            <br /> libero eu.
          </h2>
          <div className="flex items-center justify-center gap-8">
            <button className="btn-primary text-white">
              Get a Demo
              <FaArrowRightLong className="inline-block ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
