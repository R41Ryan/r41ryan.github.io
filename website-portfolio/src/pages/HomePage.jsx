import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-page">
      <div className="home-page_content">
        <h1>Ryan Huynh</h1>
        <h2>Software Engineer</h2>
        <h3>
          Web developer who builds fast, functional, and user-friendly web apps.
        </h3>
        <a
          download
          href="documents/Ryan Huynh - Software Engineering Resume.pdf"
        >
          <button>
            <img src="images/box-arrow-down.svg" /> Download Resume
          </button>
        </a>
        <a href="mailto:ryanhuynh64@gmail.com">
          <button>
            <img src="images/envelope.svg" /> Email Me
          </button>
        </a>
        <a href="tel:+15874393288">
          <button>
            <img src="images/telephone.svg" /> Call Me
          </button>
        </a>
      </div>
      <div className="home-page_image">
        <img src="/images/profile_img.jpg" alt="Ryan Huynh" />
      </div>
    </div>
  );
}

export default HomePage;
