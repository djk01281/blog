"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="h-full flex flex-col items-center  p-4 sm:p-8 md:p-16 lg:p-24">
      <div className="w-full max-w-lg px-6 py-4 rounded-full bg-[#f2f2f2] flex flex-row sm:flex-row justify-between items-center">
        <div className="font-bold h-full align-middle flex items-center justify-center text-xl ">
          @djk01281
        </div>
        <div className="gap-4 h-full align-middle flex flex-row sm:flex-row font-medium">
          <div className="h-full flex-row align-middle  flex items-center justify-center sm:mb-0">
            Blog
          </div>
          <div className=" h-full flex-row align-middle  flex items-center justify-center sm:mb-0">
            Portfolio
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 48 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex justify-center p-6 sm:p-12"
      >
        <Image
          src="/avatar.png"
          width={200}
          height={200}
          sizes="100vw"
          alt="Emojis"
          className="rounded-full"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 48 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="w-full flex items-center flex-col text-center"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-8 font-pretendard">
          {"안녕하세요 ✋🏻"}
        </h1>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-8 font-pretendard">
          <span className="text-slate-600">프론트엔드 개발자 </span>
          김동준입니다.
        </h1>
      </motion.div>
    </main>
  );
}
