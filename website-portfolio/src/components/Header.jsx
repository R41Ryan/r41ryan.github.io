function Header() {
  return (
    <div className="header">
      <div className="header-left-content">
        <h1>Ryan Huynh</h1>
        <h2>Software Engineer</h2>
      </div>
      <div className="header-right-content navbar">
        <ul className="navbar-list">
          <li className="navlink">Home</li>
          <li className="navlink">Learn About me</li>
          <li className="navlink">See my Skills</li>
          <li className="navlink">Check out my projects</li>
          <li className="navlink">Contact me</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;