import Icon from "../assets/Icon.svg";
import LoginFrame from "./LoginFrame";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="w-full  h-max absolute z-40 ">
      <div className="mx-5 min-h-10  flex justify-between items-center">
        <a href={""} className="flex justify-center items-center gap-2.5 cursor-default">
          <img src={Icon} alt="logo" />
          <span className="text-[1.325rem] font-semibold">Framer</span>
        </a>
        <Navbar />
        <LoginFrame />
      </div>
    </header>
  );
}
