import { MaxWidthWrapper } from "./components/wrapper/max-width-wrapper";
import RecentBlogs from "./components/recent-blogs";
import Intro from "./components/intro";
import TechStack from "./components/stack-icons";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <main className="w-full h-full flex flex-col gap-20 md:gap-28 lg:gap-32 items-center  px-4  text-[#f6f1d7]">
        <Intro>
          <TechStack />
        </Intro>
        <div className="w-full flex flex-col gap-4 bg-[#f9f4da] text-[#221e1f]  p-8 font-extrabold rounded-3xl text-3xl mb-4">
          <div className="flex flex-col gap-2">
            <span className="flex flex-col gap-3 text-xl">
              <span className="font-outline-1 text-[#ed203d] text-6xl font-black font-paytone">
                Blog{" "}
              </span>
              성장 기록을 확인 가능.
            </span>
            <a href="/blog" className="text-base font-semibold underline">
              더 읽으러 가기
            </a>
          </div>
          <div className="w-full lg:px-12">
            <RecentBlogs />
          </div>
        </div>
      </main>
    </MaxWidthWrapper>
  );
}
