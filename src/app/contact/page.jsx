"use client";
import React, { useRef, useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Marquee from "react-fast-marquee";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import MarqueeIcon from "@/components/MarqueeIcon";

const ContactPage = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // 1. Get Form Data
    const formData = new FormData(e.target);
    const email = formData.get("user_email").trim();
    const phone = formData.get("user_phone").trim();

    // 2. Regex Patterns
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^\+?(\d[\d-. ]+)?(\([\d-. ]+\))?[\d-. ]+\d$/;

    // 3. Validation Logic
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return; // No need for setIsSending(false) here because it was set after validation in this flow
    }

    if (phone && !phoneRegex.test(phone)) {
      toast.error("Please enter a valid phone number.");
      return;
    }

    // Start the sending process ONLY after validation passes
    setIsSending(true);
    const toastId = toast.loading("Sending your message...");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          toast.success("Message sent! We'll get back to you shortly.", {
            id: toastId,
            duration: 5000,
          });
          setIsSending(false);
          e.target.reset();
        },
        (error) => {
          toast.error("Failed to send message.", { id: toastId });
          setIsSending(false);
        },
      );
  };

  return (
    <>
      <Navbar />
      <div className="h-[40dvh] w-full text-white flex justify-center items-center">
        <div className="relative w-full h-full flex justify-center items-center">
          <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
            >
              <source src="/footer-bg.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black/30"></div>
          </div>

          <Marquee
            speed={120}
            className="font-figtree-medium uppercase text-[10vw] lg:text-[8vw] text-neutral-100 my-5 lg:my-20"
          >
            Bring Your Idea to Life
          <MarqueeIcon variant={1} className="mx-5" /> Let’s Make It Iconic{" "}
          <MarqueeIcon variant={2} className="mx-5" /> Bring Your Idea to Life{" "}
          <MarqueeIcon variant={3} className="mx-5" /> Let’s Make It Iconic{" "}
          <MarqueeIcon variant={4} className="mx-5" /> Bring Your Idea to Life{" "}
          <MarqueeIcon variant={5} className="mx-5" /> Let’s Make It Iconic{" "}
          <MarqueeIcon variant={1} className="mx-5" />
          </Marquee>
        </div>
      </div>

      <div className="bg-[#121212] px-4 md:px-18 lg:px-30 pb-20">
        <h1 className="text-base lg:text-xl font-figtree-semibold uppercase text-neutral-100 py-10 md:py-15 lg:py-20">
          ↘ &nbsp; let&apos;s do this
        </h1>
        <div className="flex flex-col md:flex-row gap-20 md:gap-16 lg:gap-25">
          {/* LEFT SIDE: Heading & Info */}
          <div className="w-full md:w-1/3">
            <div className="text-neutral-400 space-y-6">
              <div>
                <h4 className="text-white uppercase text-xs font-bold tracking-widest mb-2">
                  Our Office
                </h4>
                <p>
                  Bengaluru, <br /> India
                </p>
              </div>
              <div>
                <h4 className="text-white uppercase text-xs font-bold tracking-widest mb-2">
                  Contact Info
                </h4>
                <p>hello@sequentmediahouse.com</p>
                <p>+91 6360 44420 | +91  96634 02870</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: The Form */}
          <div className="w-full md:w-2/3">
            <form ref={form} onSubmit={sendEmail} className="space-y-8">
              <div>
                <label className="block text-xs font-bold text-neutral-100 uppercase tracking-widest mb-3">
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  className="w-full bg-transparent border-b border-neutral-800 py-4 focus:outline-none focus:border-lime-theme transition-colors text-white"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Email Input */}
                <div>
                  <label className="block text-xs font-bold text-neutral-100 uppercase tracking-widest mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    required
                    className="w-full bg-transparent border-b border-neutral-800 py-4 focus:outline-none focus:border-lime-theme transition-colors text-white"
                    onInput={(e) =>
                      (e.target.value = e.target.value.toLowerCase().trim())
                    }
                  />
                </div>

                {/* Phone Input */}
                <div>
                  <label className="block text-xs font-bold text-neutral-100 uppercase tracking-widest mb-3">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="user_phone"
                    placeholder="Your Phone"
                    min={7}
                    maxLength={15}
                    className="w-full bg-transparent border-b border-neutral-800 py-4 focus:outline-none focus:border-lime-theme transition-colors text-white"
                    onInput={(e) =>
                      (e.target.value = e.target.value.replace(
                        /[^0-9+()\s-]/g,
                        "",
                      ))
                    }
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-100 uppercase tracking-widest mb-3">
                  Service
                </label>
                <select
                  name="service"
                  required
                  defaultValue="" // Managed by React here instead of 'selected' on option
                  className="w-full bg-[#1a1a1a] border border-neutral-800 p-4 focus:outline-none focus:border-lime-theme transition-colors text-neutral-400 appearance-none"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="Branding">Branding</option>
                  <option value="Photography">Photography</option>
                  <option value="Event Management">Event Management</option>
                  <option value="Weddings">Weddings</option>
                  <option value="Corporate gifting">Corporate gifting</option>
                  <option value="Consulting & Digital PR">Consulting & Digital PR</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-100 uppercase tracking-widest mb-3">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  required
                  className="w-full bg-transparent border-b border-neutral-800 py-4 focus:outline-none focus:border-lime-theme transition-colors text-white resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSending}
                className={`w-full font-bold py-5 px-6 transition duration-300 uppercase tracking-widest text-sm cursor-pointer ${
                  isSending
                    ? "bg-neutral-800 cursor-not-allowed text-neutral-500"
                    : "bg-lime-theme hover:bg-lime-500 text-neutral-900"
                }`}
              >
                {isSending ? "Processing..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
