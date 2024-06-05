"use client"

import Image from "next/image"
import Link from "next/link"
import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion"

export const Hero = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center justify-self-start text-center sm:text-left">
          <h1 className="mb-4 text-4xl font-extrabold sm:text-5xl lg:text-7xl lg:leading-normal">
            <span className="bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Lasse",
                1000,
                "SlickYeet",
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
          <p className="prose sm:prose-lg lg:prose-xl mb-6 text-balance bg-gradient-to-br from-muted-foreground to-muted bg-clip-text text-transparent">
            I&apos;m a BCIT Computer Information Systems Administration (CISA)
            alumni with a passion for IT and web development.
          </p>
          <div>
            <Link
              href="#about"
              className="mr-4 inline-block w-full rounded-full bg-gradient-to-br from-primary to-primary-foreground px-1 py-1 text-text sm:w-fit">
              <span className="block rounded-full bg-transparent from-primary to-primary-foreground px-5 py-2 hover:bg-background">
                About Me
              </span>
            </Link>
            <Link
              href="#contact"
              className="mt-3 inline-block w-full rounded-full bg-gradient-to-br from-primary to-primary-foreground px-1 py-1 text-text sm:w-fit">
              <span className="block rounded-full bg-background from-primary to-primary-foreground px-5 py-2 hover:bg-gradient-to-br">
                Contact
              </span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 mt-4 place-self-center lg:mt-0">
          <div className="relative h-[250px] w-[250px] rounded-full bg-gradient-to-br from-primary to-primary-foreground lg:h-[350px] lg:w-[350px]">
            <Image
              src="https://github.com/SlickYeet.png"
              alt="lasse"
              width={300}
              height={300}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
