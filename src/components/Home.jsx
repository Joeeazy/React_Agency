import React from "react";
import { Carousel } from "flowbite-react";
import illustration from "/images/Illustration.png";
export default function Home() {
  return (
    <div className="bg-neutralSilver" id="home">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen ">
        <Carousel className="w-full mx-auto">
          {/* slide 1 */}
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={illustration} alt="illustration" />
            </div>
            {/* illustration text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                Lessons and insights
                <br />{" "}
                <span className="text-brandPrimary leading-snug">
                  from 8 years
                </span>
              </h1>
              <p className="text-neutralDGrey text-base mb-8">
                Where to grow your business as a photographer: site or social
                media
              </p>
              <button className="btn-primary">Register</button>
            </div>
          </div>

          {/* slide 2 */}
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={illustration} alt="illustration" className="w-70" />
            </div>
            {/* illustration text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                Learn and Earn Money
                <br />{" "}
                <span className="text-brandPrimary leading-snug">
                  in 4 months
                </span>
              </h1>
              <p className="text-neutralDGrey text-base">
                Where to grow your business as a photographer: site or social
                media
              </p>
              <button className="btn-primary">Register</button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
