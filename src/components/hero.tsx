"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { TypeAnimation } from "react-type-animation"

import DotPattern from "@/components/magicui/dot-pattern"
import GradualSpacing from "@/components/magicui/gradual-spacing"

export const Hero = () => {
  return (
    <section className="">
      <DotPattern className="z-[-20] [mask-image:radial-gradient(600px_circle_at_center,white,transparent)]" />

      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-8 place-self-center justify-self-start text-center sm:text-left">
          <h1 className="mb-4 text-xl font-extrabold sm:text-3xl lg:text-5xl lg:leading-normal xl:text-7xl">
            <GradualSpacing text="Hi, I'm Lasse" />
            <TypeAnimation
              sequence={[
                "AKA SlickYeet",
                1000,
                "A System Admin",
                1000,
                "A Network Engineer",
                1000,
                "A Web Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              deletionSpeed={69}
              repeat={Infinity}
            />
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}>
            <p className="prose mb-6 text-balance text-muted-foreground sm:prose-lg lg:prose-xl">
              I&apos;m a BCIT Computer Information Systems Administrator (CISA)
              graduate with a passion for IT and web development.
            </p>

            <div>
              <Link
                href="#about"
                className="mr-4 inline-block rounded-full bg-gradient-to-br from-muted-foreground to-secondary px-1 py-1 sm:w-fit">
                <span className="block rounded-full px-5 py-2 hover:bg-background">
                  About Me
                </span>
              </Link>
              <Link
                href="#contact"
                className="mt-3 inline-block rounded-full bg-gradient-to-br from-muted-foreground to-secondary px-1 py-1 sm:w-fit">
                <span className="block rounded-full bg-background px-5 py-2 hover:bg-gradient-to-br hover:from-muted-foreground hover:to-secondary">
                  Contact
                </span>
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="col-span-4 mt-16 place-self-center md:place-self-end lg:mt-0">
          <div className="relative h-[210px] w-[210px] rounded-full bg-gradient-to-br from-muted-foreground to-secondary lg:h-[315px] lg:w-[315px]">
            <Image
              src="https://github.com/SlickYeet.png"
              alt="lasse"
              width={300}
              height={300}
              className="absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 transform rounded-full lg:h-[300px] lg:w-[300px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
