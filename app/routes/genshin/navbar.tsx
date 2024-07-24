import NavButton from "./navbutton";
import NavIcon from "./navicon";

export default function Navbar() {
  return (
    <div className="w-full h-16 bg-genshin-nav-black/75 shadow-md">
      <div className="flex items-center">
        <NavIcon />
        <NavButton text="HOME" link="/genshin/character"/>
        <NavButton text="NEWS" link="/genshin/character"/>
        <NavButton text="CHARACTERS" link="/genshin/character"/>
        <NavButton text="EXPLORE" link="/genshin/character"/>
        <NavButton text="HoYoLAB" link="/genshin/character"/>
        <NavButton text="TOP-UP" link="/genshin/character"/>
        <NavButton text="REDEEM CODE" link="/genshin/character"/>
      </div>
    </div>
  );
}
