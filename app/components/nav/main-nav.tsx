import { NAV } from "../../lib/constants";
const MainNav = () => {
  return (
    <nav className="hidden sm:flex">
      {NAV.navItems.map((item) => (
        <div key={item}>
          <a href={`/${item.toLowerCase()}`}>{item}</a>
        </div>
      ))}
    </nav>
  );
};

export { MainNav };
