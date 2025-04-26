import "./Header.css";
import { useEffect, useRef, useState } from "react";

function Header() {

  const [isHidden, setIsHidden] = useState(false);
  const pastScrollHeight = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > pastScrollHeight.current) {
        setIsHidden(true);
      }
      else if (scrollTop < pastScrollHeight.current) {
        setIsHidden(false);
      }
      pastScrollHeight.current = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])

  return (
    <header className={isHidden ? "hidden" : ""}>
      <div className="header-left-content navlink">
        <h1>Ryan Huynh</h1>
        <h2>Software Engineer</h2>
      </div>
      <div className="header-right-content">
        <ul className="navbar">
          <li className="navlink">About me</li>
          <li className="navlink">My Skills</li>
          <li className="navlink">My Projects</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;