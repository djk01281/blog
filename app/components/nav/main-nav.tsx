import { NAV } from "../../lib/constants";
const MainNav = () => {
  return (
    <nav className="hidden sm:flex text-[#f9f4da] font-semibold font-paytone gap-3 text-lg">
      {NAV.navItems.map((item) => (
        <div key={item}>
          <a href={`/${item.toLowerCase()}`}>{item}</a>
        </div>
      ))}
    </nav>
  );
};

export { MainNav };
