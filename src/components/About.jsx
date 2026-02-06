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
            <p>Together, we operate as one integrated ecosystem:</p>
            <ul className="list-disc pl-5">
              <li>Premium DOOH networks</li>
              <li>Large-format outdoor advertising</li>
              <li>Indoor retail &amp; mall screen networks</li>
              <li>
                Centralised Screen Management (CSM) for multi-location brands
              </li>
              <li>Real-time content scheduling &amp; automation</li>
              <li>Proof-of-play &amp; analytics dashboards</li>
              <li>Programmatic-ready DOOH</li>
              <li>Monetisation-ready retail media</li>
              <li>Rapid deployment across the UAE &amp; India</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 w-full lg:w-1/2 flex items-center md:justify-start lg:justify-center">
          <div className="relative w-100 h-60  lg:w-full lg:h-80 rounded-2xl overflow-hidden">
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
              When your brand needs to own the skyline. We create bold,
              high-impact outdoor stories across India & the UAE, from digital
              billboards to retail networks to mall screens to airport clusters.
              Our OOH philosophy is simple: If people can’t ignore it, it works.
            </p>
            <p>We deliver:</p>
            <ul className="list-disc pl-5">
              <li>DOOH &amp; tech-enabled media</li>
              <li>Static + digital hybrid takeovers</li>
              <li>Experiential OOH installations</li>
              <li>Contextual campaigns</li>
              <li>Multi-city media planning</li>
              <li>Creative OOH storytelling</li>
              <li>Category-specific targeting</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 w-full lg:w-1/2 flex items-center md:justify-start lg:justify-center">
          <div className="relative w-100 h-60  lg:w-full lg:h-80 rounded-2xl overflow-hidden">
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
            Smart Screen Management
          </h1>
          <div className="mt-6 font-figtree-regular text-neutral-300 text-lg">
            <p>
              Every screen is a story. Every play is proof. We turn retail
              screens into revenue engines through our next-gen CMS: Centralised
              Screen Management by Bubblelit + Sequent.
            </p>{" "}
            <p>We offer:</p>
            <ul className="list-disc pl-5">
              <li>One dashboard. All locations.</li>
              <li>Instant content updates (minutes, not days)</li>
              <li>Real-time promos &amp; dynamic offers</li>
              <li>Category-level targeting</li>
              <li>Proof-of-play dashboards</li>
              <li>Stock-linked content triggers</li>
              <li>Partner ad monetisation (FMCG, banks, OEMs)</li>
              <li>Analytics-driven creative decisions</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 w-full lg:w-1/2 flex items-center md:justify-start lg:justify-center">
          <div className="relative w-100 h-60  lg:w-full lg:h-80 rounded-2xl overflow-hidden">
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
