import "./Header.css";

function Header() {
  return (
    <header>
      <div className="header-left-content navlink">
        <h1>Ryan Huynh</h1>
        <h2>Software Engineer</h2>
      </div>
      <div className="header-right-content">
        <ul className="navbar">
          <li className="navlink">About me</li>
          <li className="navlink">My Skills</li>
          <li className="navlink">My Portfolio</li>
          <li className="navlink">Contact me</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;