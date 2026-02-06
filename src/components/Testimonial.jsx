import Image from "next/image";
import React from "react";

const Testimonial = () => {
  return (
    <div className="flex flex-col py-10 md:py-15 lg:py-20 gap-10 md:gap-16 lg:gap-25 pb-12 md:pb-15 lg:pb-18 px-8 md:px-18 lg:px-30">
      <h1 className="text-base lg:text-xl font-figtree-semibold uppercase text-neutral-100">
        &#8600; &nbsp; Testimonials
      </h1>
      {/* First */}
      <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-[8vw]">
        <div className="w-full lg:w-1/2 flex items-start md:justify-start lg:justify-center">
          <div className="relative w-full sm:w-100 h-60  lg:w-full lg:h-80 rounded-2xl overflow-hidden">
            <Image
              src={"/0-testi-1.jpg"}
              alt="About us"
              className="object-cover"
              fill
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 text-neutral-100 lg:text-right">
          <h1 className="text-3xl font-figtree-regular leading-[1.08] xl:text-[2.8rem]">
            “This year was a watershed moment for SCIEX, you can see just how
            high our bar has got. There&apos;s something in our relationship
            with Boulder that nobody else has.”
          </h1>
          <div className="mt-6 font-figtree-regular text-neutral-300 text-lg uppercase">
            <p>Kerry Larkin, VP of Global Marketing</p>
            <p>SCIEX</p>
          </div>
        </div>
      </div>

      {/* Second */}
      <div className="flex flex-col lg:flex-row-reverse lg:items-center gap-10 lg:gap-[8vw]">
        <div className="w-full lg:w-1/2 flex items-start md:justify-start lg:justify-center">
          <div className="relative w-full sm:w-100 h-60  lg:w-full lg:h-80 rounded-2xl overflow-hidden">
            <Image
              src={"/0-testi-2.jpg"}
              alt="About us"
              className="object-cover"
              fill
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 text-neutral-100">
          <h1 className="text-3xl font-figtree-regular leading-[1.08] xl:text-[2.8rem]">
            “It never felt like working with an agency with Boulder, more like having a true partner in our corner ”
          </h1>
          <div className="mt-6 font-figtree-regular text-neutral-300 text-lg uppercase">
            <p>DAVE KING</p>
            <p>MARKETING DIRECTOR, PTS</p>
          </div>
        </div>
      </div>

      {/* Third */}
      <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-[8vw]">
        <div className="w-full lg:w-1/2 flex items-start md:justify-start lg:justify-center">
          <div className="relative w-full sm:w-100 h-60  lg:w-full lg:h-80 rounded-2xl overflow-hidden">
            <Image
              src={"/0-testi-3.png"}
              alt="About us"
              className="object-cover"
              fill
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 text-neutral-100 lg:text-right">
          <h1 className="text-3xl font-figtree-regular leading-[1.08] xl:text-[2.8rem]">
            “We’re so proud of what we’ve achieved together. A big shout-out to Boulder for their creativity and attention to detail”
          </h1>
          <div className="mt-6 font-figtree-regular text-neutral-300 text-lg uppercase">
            <p>Jen Garside</p>
            <p>Global Head of Marketing, YouGov</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
