export default async function Projects() {
  const customH3 = ({ children }: { children?: React.ReactNode }) => {
    return <h3 className="text-[#f38ba3]">{children}</h3>;
  };

  const overrideComponents = {
    h3: customH3,
  };

  return (
    <div className="w-full flex flex-col gap-6 px-8 text-[#f9f4da] pb-8">
      <div className="font-bricolage font-extrabold  text-4xl flex justify-center mt-8">
        Projects
      </div>
      <div className="width-full flex flex-row justify-center">
        <div className="bg-[#231f20] p-8  rounded-lg">수정 중..! 🚧</div>
      </div>
    </div>
  );
}
