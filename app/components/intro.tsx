"use client";

import { motion } from "framer-motion";
import { useScroll, useTransform, AnimatePresence } from "framer-motion";
import { PropsWithChildren, useEffect, useRef, useState } from "react";

const quote = '"가치를 만들어내는 개발자"';

export default function Intro({ children }: PropsWithChildren<{}>) {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start", "end"],
  });

  const quoteProgress = useTransform(
    scrollYProgress,
    [0, 1],
    [0, quote.length]
  );

  useEffect(() => {
    quoteProgress.on("change", (v) => {
      setQuoteIndex(Math.floor(v * 1.5));
    });
  }, [quoteProgress]);

  return (
    <div className="flex flex-col mt-8 gap-12 lg:mt-4" ref={scrollRef}>
      <div className="flex flex-col  lg:gap-4">
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center p-6 sm:p-12"
        >
          {/* <Avatar /> */}
        </motion.div>
        <motion.div
          // initial={{ opacity: 0, y: 48 }}
          // animate={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.75 }}
          className="w-full flex gap-2 items-center flex-col text-center"
        >
          <motion.div
            initial="initial"
            whileHover="hovered"
            className="relative block overflow-hidden"
          >
            <motion.h1
              variants={{
                initial: {
                  y: 0,
                },
                hovered: {
                  y: "-100%",
                },
              }}
              className=" text-4xl sm:text-5xl lg:text-6xl font-extrabold  font-pretendard"
            >
              {"안녕하세요 👋🏻"}
            </motion.h1>
            <motion.h1
              variants={{
                initial: {
                  y: "100%",
                },
                hovered: {
                  y: 0,
                },
              }}
              className="absolute inset-0 text-4xl sm:text-5xl lg:text-6xl font-extrabold  font-pretendard"
            >
              {"안녕하세요 👋🏻"}
            </motion.h1>
          </motion.div>
          <h1 className="text-3xl sm:text-4xl  lg:text-5xl font-extrabold  font-pretendard ">
            {/* <span className="text-[#f38ba3] hidden sm:flex">
              프론트엔드 개발자{" "}
            </span> */}
            <span className="text-[#f38ba3]">FE 개발자 </span>
            김동준입니다.
            <svg
              viewBox="0 0 550 20"
              fill="none"
              stroke="#b1eeb5"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="sc-6080564e-5 sc-6080564e-7 jgJXjb dPcZdg"
            >
              <path
                d="M2.00024 1.5C14.5002 19.5 34.5 21 60.5 10C102.864 -7.92334 154.649 17.7997 200 17.5C267.5 17.0539 294.186 7.58925 337 5C379.814 2.41075 402.484 20.6688 445 15C482.5 10 495 10 510.5 13.5C526 17 545.5 15 548.5 2"
                stroke="#11b5e5"
                strokeWidth="3"
                strokeLinecap="round"
              ></path>
            </svg>
          </h1>
        </motion.div>
      </div>
      <div className="h-[400vh] relative">
        <div className="w-full flex flex-col gap-1.5 items-center text-xl sticky top-[30vh]">
          <div className="flex flex-col items-center">
            <AnimatePresence>
              {quoteIndex > 0 && (
                <motion.div
                  key="quote-container"
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  // transition={{ duration: 0.5 }}
                >
                  <motion.div
                    key="quote-content"
                    initial={{ scale: 0.75, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.75, opacity: 0, y: -88 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#4e89ff] flex flex-row text-white p-12 font-semibold rounded-3xl"
                  >
                    {quote.split("").map((char, i) => (
                      <motion.span
                        key={i}
                        className={`${quoteIndex > i ? "flex" : "hidden"} ${
                          char === " " ? "w-4" : ""
                        }`}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            <p className="text-[#d6d6d6] font-medium text-sm mt-4">
              매일 성장을 위해 노력합니다.
            </p>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
