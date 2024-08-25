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
          className="w-full flex items-center flex-col text-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold  font-pretendard">
            {"안녕하세요 ✋🏻"}
          </h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold  font-pretendard">
            <span className="text-[#f38ba3]">프론트엔드 개발자 </span>
            김동준입니다.
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
