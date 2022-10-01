import {useContext} from "react";
import {MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import { ThemeContext } from "../App";
type DropdownProps={
    filter:string;
    setFilter:(filter:string)=>void;
    isDropedDown:boolean;
    setIsDropedDown:(isDropedDown:boolean)=>void;
}
export const Dropdown = ({filter,setFilter,isDropedDown,setIsDropedDown}:DropdownProps) => {
    const theme = useContext(ThemeContext);
    const dropDownClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    const {value}= e.currentTarget;
    setFilter(value === "none" ? "Filter By Region" : value);
    setIsDropedDown(false);
  };
  return (
    <div className="drop-down">
      <span className="value" style={{backgroundColor:theme.secondary.bgcolor, color:theme.color}} onClick={() => setIsDropedDown(!isDropedDown)}>
        {filter}
        {isDropedDown ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
      </span>
      <div
        className="drop-down-buttons"
        style={{ display: isDropedDown ? "flex" : "none",backgroundColor:theme.secondary.bgcolor }}
      >
        <button style={{color:theme.color}} value="none" onClick={dropDownClick}>
          None
        </button>
        <button style={{color:theme.color}} value="africa" onClick={dropDownClick}>
          Africa
        </button>
        <button style={{color:theme.color}} value="america" onClick={dropDownClick}>
          America
        </button>
        <button style={{color:theme.color}} value="asia" onClick={dropDownClick}>
          Asia
        </button>
        <button style={{color:theme.color}} value="europe" onClick={dropDownClick}>
          Europe
        </button>
        <button style={{color:theme.color}} value="oceania" onClick={dropDownClick}>
          oceania
        </button>
      </div>
    </div>
  );
};
