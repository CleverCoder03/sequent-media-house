"use client"

import { motion } from "motion/react";
import Link from "next/link"

const Button = () => {
  return (
          <Link href={"/contact"}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden px-6 py-2 rounded-full
                        text-xs lg:text-sm font-bold uppercase tracking-widest
                        shadow-lg transition lg:px-8 
                        text-neutral-900 bg-lime-theme
                        cursor-pointer

                        before:content-['']
                        before:absolute before:inset-0
                        before:bg-neutral-100 before:rounded-full
                        before:scale-0 before:origin-center
                        before:transition-transform before:duration-300
                        before:z-0

                        hover:before:scale-100
                       "
            >
              <span className="relative z-10">Contact</span>
            </motion.button>
          </Link>
  )
}

export default Button