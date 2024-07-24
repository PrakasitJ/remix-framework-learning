import NavButton from "./navbutton";
import NavIcon from "./navicon";

export default function Navbar() {
  return (
    <div className="w-full h-16 bg-genshin-nav-black/75 shadow-md">
      <div className="flex items-center">
        <NavIcon />
        <NavButton text="HOME" link="/genshin"/>
        <NavButton text="NEWS" link="/genshin"/>
        <NavButton text="CHARACTERS" link="/genshin"/>
        <NavButton text="EXPLORE" link="/genshin"/>
        <NavButton text="HoYoLAB" link="/genshin"/>
        <NavButton text="TOP-UP" link="/genshin"/>
        <NavButton text="REDEEM CODE" link="/genshin"/>
      </div>
    </div>
  );
}
