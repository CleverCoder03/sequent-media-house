import Image from "next/image";
import { motion } from "motion/react";
import { TextMask } from "./TextMask";
import { TextMask2 } from "./TextMask2";

const About = () => {
  return (
    <div className="flex flex-col gap-15 md:gap-20 lg:gap-35 pb-12 md:pb-15 lg:pb-18">
      {/* First */}
      <div className="flex flex-col lg:flex-row px-8 md:px-18 lg:px-30 lg:gap-[5vw] xl:gap-[15vw]">
        <div className="w-full lg:w-1/2 text-neutral-100">
          <h1 className="text-3xl uppercase font-figtree-semibold leading-[0.98] lg:text-4xl w-[80%]">
            <TextMask
              text="Our UAE Ad-tech"
              delay={0.1}
              stagger="0.12"
              once={false}
            /><span className="font-playfair-semibold-italic text-lime-theme lowercase">powerhouse</span>
          </h1>
          <div className="mt-6 font-figtree-regular text-neutral-300 text-lg overflow-hidden">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3, once: false }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              className="text-neutral-300"
            >
              We operate as a unified ad-tech ecosystem delivering premium DOOH,
              large-format outdoor, and indoor retail screen networks. Powered
              by centralised screen management, real-time content automation,
              and proof-of-play analytics. Programmatic-ready and
              monetisation-focused, built for rapid, scalable deployment across
              the UAE and India.
            </motion.p>
          </div>
        </div>
        <div className="mt-8 lg:mt-0 w-full lg:w-1/2 flex items-center md:justify-start lg:justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.9 }}
            transition={{ duration: 0.8, ease: [0.83, 0, 0.17, 1] }}
            className="relative w-full sm:w-100 h-60 lg:w-full lg:h-80 rounded-2xl overflow-hidden"
          >
            <Image
              src={"/0-about-1.png"}
              alt="About us"
              className="object-cover"
              fill
            />
          </motion.div>
        </div>
      </div>

      {/* Second */}
      <div className="flex flex-col lg:flex-row-reverse px-8 md:px-18 lg:px-30 lg:gap-[5vw] xl:gap-[15vw]">
        <div className="w-full lg:w-1/2 text-neutral-100">
          <h1 className="text-3xl uppercase font-figtree-semibold leading-[0.98] lg:text-4xl w-2/3">
          <TextMask
              text="OOH"
              delay={0.1}
              stagger="0.12"
              once={false}
            /><span className="font-playfair-semibold-italic text-lime-theme lowercase">advertising</span>
          </h1>
          <div className="mt-6 font-figtree-regular text-neutral-300 text-lg">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.9 }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              className="text-neutral-300"
            >
              When your brand needs to own the skyline, we deliver bold,
              high-impact outdoor storytelling across India and the UAE. From
              digital billboards and retail networks to malls and airport
              clusters, our campaigns are designed to be unmissable. Powered by
              DOOH, hybrid takeovers, experiential formats, and data-led
              targeting, we turn visibility into impact.
            </motion.p>
          </div>
        </div>
        <div className="mt-8 lg:mt-0 w-full lg:w-1/2 flex items-center md:justify-start lg:justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.83, 0, 0.17, 1] }}
            className="relative w-full sm:w-100 h-60 lg:w-full lg:h-80 rounded-2xl overflow-hidden"
          >
            <Image
              src={"/0-about-2.png"}
              alt="About us"
              className="object-cover"
              fill
            />
          </motion.div>
        </div>
      </div>

      {/* Third */}
      <div className="flex flex-col lg:flex-row px-8 md:px-18 lg:px-30 lg:gap-[5vw] xl:gap-[15vw]">
        <div className="w-full lg:w-1/2 text-neutral-100">
            <h1 className="text-3xl uppercase font-figtree-semibold leading-[0.98] lg:text-4xl w-2/3">
          <TextMask2>
          Every screen is a <span className="font-playfair-semibold-italic text-lime-theme lowercase">story&nbsp;</span>
          and every play is <span className="font-playfair-semibold-italic text-lime-theme lowercase">proof</span>
          </TextMask2>
          </h1>
          <div className="mt-6 font-figtree-regular text-neutral-300 text-lg">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.9 }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              className="text-neutral-300"
            >
              Our next-gen Centralised Screen Management platform transforms
              retail screens into revenue engines through real-time control,
              automation, and analytics. With one dashboard across locations,
              proof-of-play reporting, dynamic content triggers, and partner
              monetisation, we turn screens into measurable performance media.
            </motion.p>
          </div>
        </div>
        <div className="mt-8 lg:mt-0 w-full lg:w-1/2 flex items-center md:justify-start lg:justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.83, 0, 0.17, 1] }}
            className="relative w-full sm:w-100 h-60 lg:w-full lg:h-80 rounded-2xl overflow-hidden"
          >
            <Image
              src={"/0-about-3.png"}
              alt="About us"
              className="object-cover"
              fill
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
