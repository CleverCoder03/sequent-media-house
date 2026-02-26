// "use client"
import Image from "next/image";
import { motion } from "motion/react";
import Copy from "./Copy";
import { TextMask } from "./TextMask";

const Testimonial = () => {
  return (
    <div className="flex flex-col py-10 md:py-15 lg:py-20 gap-10 md:gap-16 lg:gap-25 pb-12 md:pb-15 lg:pb-18 px-8 md:px-18 lg:px-30">
      <h1 className="text-base lg:text-xl font-figtree-semibold uppercase text-neutral-100">
        &#8600; &nbsp; Testimonials
      </h1>
      {/* First */}
      <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-[8vw]">
        <div className="w-full lg:w-1/2 flex items-start md:justify-start lg:justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.83, 0, 0.17, 1] }}
            className="relative w-full sm:w-100 h-60 lg:w-full lg:h-80 rounded-2xl overflow-hidden"
          >
            <Image
              src={"/0-testi-1.jpg"}
              alt="About us"
              className="object-cover"
              fill
            />
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2 text-neutral-100 lg:text-right">
            <motion.h1 initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }} className="text-3xl font-figtree-regular leading-[1.08] xl:text-[2.8rem]">
              “This year was a watershed moment for SCIEX, you can see just how
              high our bar has got. There&apos;s something in our relationship
              with Boulder that nobody else has.”
            </motion.h1>
          <div className="mt-6 font-figtree-regular text-neutral-300 text-lg uppercase">
            <TextMask
              text="Kerry Larkin, VP of Global Marketing"
              delay={0.1}
              stagger="0.12"
              once={false}
            /> <br />
            <TextMask
              text="SCIEX"
              delay={0.1}
              stagger="0.12"
              once={false}
            />
          </div>
        </div>
      </div>

      {/* Second */}
      <div className="flex flex-col lg:flex-row-reverse lg:items-center gap-10 lg:gap-[8vw]">
        <div className="w-full lg:w-1/2 flex items-start md:justify-start lg:justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.83, 0, 0.17, 1] }}
            className="relative w-full sm:w-100 h-60 lg:w-full lg:h-80 rounded-2xl overflow-hidden"
          >
            <Image
              src={"/0-testi-2.jpg"}
              alt="About us"
              className="object-cover"
              fill
            />
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2 text-neutral-100">
            <motion.h1 initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }} className="text-3xl font-figtree-regular leading-[1.08] xl:text-[2.8rem]">
              “It never felt like working with an agency with Boulder, more like
              having a true partner in our corner ”
            </motion.h1>
          <div className="mt-6 font-figtree-regular text-neutral-300 text-lg uppercase">
            <TextMask
              text="DAVE KING"
              delay={0.1}
              stagger="0.12"
              once={false}
            /> <br />
            <TextMask
              text="MARKETING DIRECTOR, PTS"
              delay={0.1}
              stagger="0.12"
              once={false}
            />
          </div>
        </div>
      </div>

      {/* Third */}
      <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-[8vw]">
        <div className="w-full lg:w-1/2 flex items-start md:justify-start lg:justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.83, 0, 0.17, 1] }}
            className="relative w-full sm:w-100 h-60 lg:w-full lg:h-80 rounded-2xl overflow-hidden"
          >
            <Image
              src={"/0-testi-3.png"}
              alt="About us"
              className="object-cover"
              fill
            />
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2 text-neutral-100 lg:text-right">
            <motion.h1 initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }} className="text-3xl font-figtree-regular leading-[1.08] xl:text-[2.8rem]">
              “We’re so proud of what we’ve achieved together. A big shout-out
              to Boulder for their creativity and attention to detail”
            </motion.h1>
          <div className="mt-6 font-figtree-regular text-neutral-300 text-lg uppercase">
            <TextMask
              text="Jen Garside"
              delay={0.1}
              stagger="0.12"
              once={false}
            /> <br />
            <TextMask
              text="Global Head of Marketing, YouGov"
              delay={0.1}
              stagger="0.12"
              once={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
