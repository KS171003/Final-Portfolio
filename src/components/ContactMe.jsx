/* eslint-disable react/prop-types */
import { useRef } from "react";
import styles from "./bubble.module.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export const TextParallaxContentExample = () => {
  return (
    <div className="bg-white mt-20">
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1504610926078-a1611febcad3?q=80&w=2416&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading=""
        heading="Contact Me"
      >
        <ExampleContent />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 20;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[125vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const ExampleContent = () => (
  <div className="">
    <div className="grid mb-20 place-content-center bg-white">
      <BubbleText />
    </div>
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-18 pb-24 pt-10 md:grid-cols-12">
      <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
        Let’s connect and create something amazing together. Drop me a message!
      </h2>
      <div className="col-span-1 md:col-span-8 flex flex-row justify-center  ">
        <div className="mx-20">
          <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
            <a href="https://www.instagram.com/kunal_10.03?igsh=NnRqcGxoeXZwMHJ1&utm_source=qr">
              INSTAGRAM
            </a>
          </p>
          <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
            <a href="https://www.linkedin.com/in/kunal-sharma-9224a2300?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
              LINKED-IN
            </a>
          </p>
          <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
            <a href="https://github.com/KS171003">GITHUB</a>
          </p>
        </div>
        <a href="mailto:kunalkomal1710@gmail.com" className="flex justify-center">
          <button className="w-10 mx-20 pr-15 rounded bg-neutral-900 px-10 py-0 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
            Mail Me <FiArrowUpRight className="inline" />
          </button>
        </a>
      </div>
    </div>
  </div>
);

const BubbleText = () => {
  return (
    <h2 className="text-center text-8xl font-thin text-black">
      {"KUNAL SHARMA".split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};
