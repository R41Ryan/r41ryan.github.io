import "./MainPage.css";
import "./AboutMe.css"
import TextPanel from "../components/TextPanel";

function MainPage() {
  const aboutMe = [
    {
      title: "Early Interest in Coding",
      content:
        "I started coding in the 5th grade, when a teacher offered me school credit for completing a JavaScript course on Khan Academy. I didn't take it too seriously at the time, but it planted the seed. Since then, I've taken several extracurricular classes — including Scratch for object-oriented programming, HTML/CSS for web development, and high school computer science, where I learned the basics of C++ and Java. I even programmed robots using Processing in a robotics course. It wasn't until my first year of university that I realized I wanted to pursue software engineering seriously. Since then, I've been working hard to expand my knowledge and skills by building a range of projects — from a plagiarism checker for a professor to a video game and a website for a local business. I'm constantly looking for new opportunities to learn, grow, and explore what I can create.",
    },
    {
      title: "Current Focus",
      content:
        "Right now, I'm looking for a full-time software engineering role. In the meantime, I'm focused on learning and loving web development, especially tools like React, Node.js, Express, and Supabase. I've been putting these skills into practice by creating web projects — including this portfolio site.",
    },
    {
      title: "Future Aspirations",
      content:
        "My goal is to become a software engineer and web developer who can solve real-world problems through creative and effective web solutions. I want to innovate and build practical products that help people and make a positive impact.",
    },
    {
      title: "Hobbies",
      content:
        "Outside of coding, I enjoy playing strategy games like Total War, coming up with fan-fiction ideas for my favorite games and movies, and spending time with friends and family. I also enjoy playing a bit of Dungeons & Dragons.",
    },
  ];

  return (
    <div>
      <div className="home-page">
        <div className="home-page_content">
          <h1>Ryan Huynh</h1>
          <h2>Software Engineer</h2>
          <h3>
            Web developer who builds fast, functional, and user-friendly web
            apps.
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
      <div id="about-me" className="about-me">
        <h2>About Me</h2>
        <p className="intro">
          I'm a software engineering graduate from the University of Calgary. I
          specialize in multiple programming languages, such as JavaScript and
          C++, with experience in both web and desktop application development.
          I enjoy solving problems through software and am always looking for
          opportunities to innovate and build practical tools — whether it's a
          website for a business or a game that helps train mental math skills.
        </p>
        <div className="about-me_content">
          {aboutMe.map((item, index) => (
            <TextPanel
              key={index}
              title={item.title}
              className="about-me_text-panel"
            >
              {item.content}
            </TextPanel>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
