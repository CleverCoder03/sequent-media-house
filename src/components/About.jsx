import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col gap-15 md:gap-20 lg:gap-35 pb-12 md:pb-15 lg:pb-18">
      {/* First */}
      <div className="flex flex-col lg:flex-row px-8 md:px-18 lg:px-30 lg:gap-[5vw] xl:gap-[15vw]">
        <div className="w-full lg:w-1/2 text-neutral-100">
          <h1 className="text-3xl uppercase font-figtree-semibold leading-[0.98] lg:text-4xl w-[80%]">
            Our UAE Ad-tech powerhouse
          </h1>
          <div className="mt-6 font-figtree-regular text-neutral-300 text-lg">
            <p>We operate as a unified ad-tech ecosystem delivering premium DOOH, large-format outdoor, and indoor retail screen networks.
Powered by centralised screen management, real-time content automation, and proof-of-play analytics.
Programmatic-ready and monetisation-focused, built for rapid, scalable deployment across the UAE and India.
</p>
          </div>
        </div>
        <div className="mt-8 lg:mt-0 w-full lg:w-1/2 flex items-center md:justify-start lg:justify-center">
          <div className="relative w-full sm:w-100 h-60  lg:w-full lg:h-80 rounded-2xl overflow-hidden">
            <Image
              src={"/0-about-1.jpeg"}
              alt="About us"
              className="object-cover"
              fill
            />
          </div>
        </div>
      </div>

      {/* Second */}
      <div className="flex flex-col lg:flex-row-reverse px-8 md:px-18 lg:px-30 lg:gap-[5vw] xl:gap-[15vw]">
        <div className="w-full lg:w-1/2 text-neutral-100">
          <h1 className="text-3xl uppercase font-figtree-semibold leading-[0.98] lg:text-4xl w-2/3">
            OOH Advertising
          </h1>
          <div className="mt-6 font-figtree-regular text-neutral-300 text-lg">
            <p>
              When your brand needs to own the skyline, we deliver bold, high-impact outdoor storytelling across India and the UAE.
From digital billboards and retail networks to malls and airport clusters, our campaigns are designed to be unmissable.
Powered by DOOH, hybrid takeovers, experiential formats, and data-led targeting, we turn visibility into impact.

            </p>
          </div>
        </div>
        <div className="mt-8 lg:mt-0 w-full lg:w-1/2 flex items-center md:justify-start lg:justify-center">
          <div className="relative w-full sm:w-100 h-60  lg:w-full lg:h-80 rounded-2xl overflow-hidden">
            <Image
              src={"/0-about-2.jpeg"}
              alt="About us"
              className="object-cover"
              fill
            />
          </div>
        </div>
      </div>

      {/* Third */}
      <div className="flex flex-col lg:flex-row px-8 md:px-18 lg:px-30 lg:gap-[5vw] xl:gap-[15vw]">
        <div className="w-full lg:w-1/2 text-neutral-100">
          <h1 className="text-3xl uppercase font-figtree-semibold leading-[0.98] lg:text-4xl w-2/3">
            Every screen is a story and every play is proof
          </h1>
          <div className="mt-6 font-figtree-regular text-neutral-300 text-lg">
            <p>
              Our next-gen Centralised Screen Management platform transforms retail screens into revenue engines through real-time control, automation, and analytics.
With one dashboard across locations, proof-of-play reporting, dynamic content triggers, and partner monetisation, we turn screens into measurable performance media.
            </p>
          </div>
        </div>
        <div className="mt-8 lg:mt-0 w-full lg:w-1/2 flex items-center md:justify-start lg:justify-center">
          <div className="relative w-full sm:w-100 h-60  lg:w-full lg:h-80 rounded-2xl overflow-hidden">
            <Image
              src={"/0-about-3.jpeg"}
              alt="About us"
              className="object-cover"
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
