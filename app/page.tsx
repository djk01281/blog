"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { MaxWidthWrapper } from "./components/nav/max-width-wrapper";
import { StackIcons } from "./components/nav/stack-icons";
import { Avatar } from "./components/nav/avatar";

const quote = '" 가치를 만들어내는 개발자 "';

export default function Home() {
  return (
    <MaxWidthWrapper>
      <main className="h-full flex flex-col gap-10 md:gap-12 lg:gap-16 items-center  px-4 md:px-16 lg:px-24 text-[#f6f1d7]">
        {/* <div className="w-full max-w-lg px-6 py-4 rounded-full bg-[#f2f2f2] flex flex-row sm:flex-row justify-between items-center">
          <div className="font-bold h-full align-middle flex items-center justify-center text-xl ">
            @djk01281
          </div>
          <div className="gap-4 h-full align-middle flex flex-row sm:flex-row font-medium">
            <div className="h-full flex-row align-middle  flex items-center justify-center sm:mb-0">
              Blog
            </div>k
            <div className=" h-full flex-row align-middle  flex items-center justify-center sm:mb-0">
              Portfolio
            </div>
          </div>
        </div> */}
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
        <StackIcons />
        {
          // Refactor the cards into a separate component
        }
        <div className="w-full flex flex-col gap-4 bg-[#231f20] p-8 font-semibold rounded-xl text-3xl text-[#ebedf0]">
          <div className="flex flex-col">
            <span>
              <span className="text-[#fcba29]">[포트폴리오]</span>에서는
            </span>
            <span>프로젝트와 구현을 확인 가능</span>
          </div>
          <div className="bg-[#bf8f8f] w-full h-[300px] rounded-md"></div>
        </div>
      </main>
    </MaxWidthWrapper>
  );
}
