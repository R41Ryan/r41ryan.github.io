import "./Footer.css";

function Footer({ sectionRefs }) {
  const scrollToSection = (section) => {
    if (section === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const sectionRef = sectionRefs[section];
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer>
      <div className="footer-left-content">
        <h1>Ryan Huynh</h1>
        <h2>Software Engineer</h2>
        <h3>
          Web developer who builds fast, functional, and user-friendly web apps.
        </h3>
      </div>
      <div className="footer-right-content">
        <ul className="footer-navbar">
          <li onClick={() => {scrollToSection("home")}} className="footer-navlink">Home</li>
          <li onClick={() => {scrollToSection("aboutMe")}} className="footer-navlink">About me</li>
          <li onClick={() => {scrollToSection("skills")}} className="footer-navlink">My Skills</li>
          <li onClick={() => {scrollToSection("projects")}} className="footer-navlink">My Projects</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
