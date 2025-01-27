import { useState } from "react";
import style from "./Accordion.module.scss";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";

export function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    // Skifter værdien af 'isOpen' fra true til false eller omvendt.
    // 'prev' repræsenterer den forrige værdi af 'isOpen', og '!prev' vender den om.
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={style.accordionContainer}>
      <button className={style.accordionHeader} onClick={toggleAccordion}>
        {title}
        <span>
          {isOpen ? (
            <MdOutlineKeyboardArrowDown />
          ) : (
            <MdOutlineKeyboardArrowRight />
          )}
        </span>
      </button>
      {isOpen && <div className={style.accordionContent}>{children}</div>}
    </div>
  );
}
