import "./HomePage.css"

function HomePage() {
  return (
    <div className="home-page">
      <div className="home-page_content">
        <h1>Ryan Huynh</h1>
        <h2>Software Engineer</h2>
        <h3>
          Web developer who builds fast, functional, and user-friendly web apps.
        </h3>
      </div>
      <div className="home-page_image">
        <img src="/images/profile_img.jpg" alt="Ryan Huynh" />
      </div>
    </div>
  );
}

export default HomePage;