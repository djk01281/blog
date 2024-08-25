"use client";

import { Avatar } from "../components/avatar";
import { motion } from "framer-motion";

const quote = '" 가치를 만들어내는 개발자 "';

export default function Intro() {
  return (
    <>
      <div>
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center p-6 sm:p-12"
        >
          <Avatar />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full flex gap-2 items-center flex-col text-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold  font-pretendard">
            {"안녕하세요 ✋🏻"}
          </h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold  font-pretendard">
            <span className="text-[#f38ba3]">프론트엔드 개발자 </span>
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
                stroke-width="3"
                stroke-linecap="round"
              ></path>
            </svg>
          </h1>
        </motion.div>
      </div>
      <div className="w-full flex flex-col gap-1.5 items-center text-xl">
        <div className="bg-[#4e89ff] flex flex-col text-white p-12 font-semibold rounded-3xl">
          {quote}
        </div>
        <p className="text-[#d6d6d6] font-medium text-sm">
          매일 성장을 위해 노력합니다.
        </p>
      </div>
    </>
  );
}
