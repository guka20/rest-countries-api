import { useContext } from "react";
import { ThemeContext } from "../App";
import { BsMoon, BsMoonFill } from "react-icons/bs";

type navbarProps = {
  isDark: true | false;
  setIsDark: (isDark: boolean) => void;
};
export const Navbar = ({ isDark, setIsDark }: navbarProps) => {
  const theme = useContext(ThemeContext);
  return (
    <nav
      className="navbar"
      style={{ backgroundColor: theme.secondary.bgcolor, color: theme.color }}
    >
      <div className="navbar_child">
        <h2>Where in the world?</h2>{" "}
        <div className="dark-mode" onClick={() => setIsDark(!isDark)}>
          {isDark ? <BsMoonFill /> : <BsMoon />} Dark Mode
        </div>
      </div>
    </nav>
  );
};
