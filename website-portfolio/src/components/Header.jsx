import "./Header.css";
import { useEffect, useRef, useState } from "react";

function Header({sectionRefs}) {

  const [isHidden, setIsHidden] = useState(false);
  const pastScrollHeight = useRef(0);
  
  const scrollToSection = (section) => {
    if (section === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const sectionRef = sectionRefs[section];
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth"});
    }
  };

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
      <div onClick={() => {scrollToSection("home")}} className="header-left-content navlink">
        <h1>Ryan Huynh</h1>
        <h2>Software Engineer</h2>
      </div>
      <div className="header-right-content">
        <ul className="navbar">
          <li onClick={() => {scrollToSection("aboutMe")}} className="navlink">About me</li>
          <li onClick={() => {scrollToSection("skills")}} className="navlink">My Skills</li>
          <li onClick={() => {scrollToSection("projects")}} className="navlink">My Projects</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;