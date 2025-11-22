import "./MainPage.css";
import "./AboutMe.css";
import "./Skills.css";
import "./Projects.css";
import TextPanel from "../components/TextPanel";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function MainPage({ sectionRefs }) {
  const aboutMe = [
    {
      title: "📚 Early Interest in Coding",
      content:
        "I started coding in the 5th grade, when a teacher offered me school credit for completing a JavaScript course on Khan Academy. I didn't take it too seriously at the time, but it planted the seed. Since then, I've taken several extracurricular classes — including Scratch for object-oriented programming, HTML/CSS for web development, and high school computer science, where I learned the basics of C++ and Java. I even programmed robots using Processing in a robotics course. It wasn't until my first year of university that I realized I wanted to pursue software engineering seriously. Since then, I've been working hard to expand my knowledge and skills by building a range of projects — from a plagiarism checker for a professor to a video game and a website for a local business. I'm constantly looking for new opportunities to learn, grow, and explore what I can create.",
    },
    {
      title: "🛠️ Current Focus",
      content:
        "Right now, I'm looking for a full-time software engineering role. In the meantime, I'm focused on learning and loving web development, especially tools like React, Node.js, Express, and Supabase. I've been putting these skills into practice by creating web projects — including this portfolio site.",
    },
    {
      title: "🎯 Future Aspirations",
      content:
        "My goal is to become a software engineer and web developer who can solve real-world problems through creative and effective web solutions. I want to innovate and build practical products that help people and make a positive impact.",
    },
    {
      title: "🎮 Hobbies",
      content:
        "Outside of coding, I enjoy playing strategy games like Total War, coming up with fan-fiction ideas for my favorite games and movies, and spending time with friends and family. I also enjoy playing a bit of Dungeons & Dragons.",
    },
  ];

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/JSON/projects.json")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []);

  return (
    <main>
      <motion.section
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.0 }}
        viewport={{ once: true }}
        className="home-page"
      >
        <div className="home-page_content">
          <h1>Ryan Huynh</h1>
          <h2>Software Engineer</h2>
          <h3>
            Web developer who builds fast, functional, and user-friendly web
            apps.
          </h3>
          <div className="home-page_buttons">
            <a
              download
              href="https://docs.google.com/document/d/1bxwgpBafRQmT4_kXyMfCZKB9rrOzw6wu1wZE5hsw92w/export?format=pdf"
            >
              <button>
                <img src="images/box-arrow-down.svg" /> Download Resume
              </button>
            </a>
            <a href="mailto:ryanhuynh64@gmail.com">
              <button>
                <img src="images/envelope.svg" /> Email Me:
                ryanhuynh64@gmail.com
              </button>
            </a>
            <a href="tel:+15874393288">
              <button>
                <img src="images/telephone.svg" /> Call Me: 587 (439-3288)
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/ryan-huynh-7b5241194/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                <img src="images/linkedin.svg" /> LinkedIn
              </button>
            </a>
          </div>
        </div>
        <div className="home-page_image">
          <img src="/images/profile_img.jpg" alt="Ryan Huynh" />
        </div>
      </motion.section>
      <div ref={sectionRefs.aboutMe} id="about-me" className="about-me">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0 }}
          viewport={{ once: true }}
        >
          <h2>💻 About Me</h2>
          <p className="intro">
            I'm a software engineering graduate from the University of Calgary.
            I specialize in multiple programming languages, such as JavaScript
            and C++, with experience in both web and desktop application
            development. I enjoy solving problems through software and am always
            looking for opportunities to innovate and build practical tools —
            whether it's a website for a business or a game that helps train
            mental math skills.
          </p>
        </motion.div>
        <div className="about-me_content">
          {aboutMe.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.0 }}
              viewport={{ once: true }}
            >
              <TextPanel
                key={index}
                title={item.title}
                className="about-me_text-panel"
              >
                {item.content}
              </TextPanel>
            </motion.div>
          ))}
        </div>
      </div>
      <section ref={sectionRefs.skills} id="skills" className="skills">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0 }}
          viewport={{ once: true }}
        >
          🎓 Skills
        </motion.h2>
        <div className="skills_content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0 }}
            viewport={{ once: true }}
            className="languages"
          >
            <h3>
              <img src="./images/code-square.svg" />
              <div>Languages</div>
            </h3>
            <ul>
              <li>JavaScript</li>
              <li>Python</li>
              <li>C++</li>
              <li>Java</li>
              <li>HTML/CSS</li>
              <li>GDScript</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0 }}
            viewport={{ once: true }}
            className="technologies"
          >
            <h3>
              <img src="./images/gear.svg" />
              <div>Technologies</div>
            </h3>
            <ul>
              <li>Git, Github</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>React</li>
              <li>Supabase</li>
              <li>Godot</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0 }}
            viewport={{ once: true }}
            className="soft-skills"
          >
            <h3>
              <img src="./images/chat-fill.svg" />
              <div>Soft Skills</div>
            </h3>
            <ul>
              <li>Communicator</li>
              <li>Problem Solver</li>
              <li>Team Player</li>
              <li>Time Management</li>
              <li>Adaptable</li>
              <li>Creative Thinker</li>
              <li>Open to Feedback</li>
            </ul>
          </motion.div>
        </div>
      </section>
      <section ref={sectionRefs.projects} id="projects" className="projects">
        {projects.length > 0 ? (
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0 }}
            viewport={{ once: true }}
          >
            🌐 Projects
          </motion.h2>
        ) : (
          <h2>Loading Projects...</h2>
        )}
        <div className="projects_content">
          {projects.map((project) => (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.0 }}
              viewport={{ once: true }}
              key={project.id}
              className="project-panel"
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.images && (
                <div className="project-images">
                  {project.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Project ${project.id} image ${index + 1}`}
                    />
                  ))}
                </div>
              )}
              <div className="project-links">
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button>
                      <img src="images/github.svg" alt="GitHub" />{" "}
                      <div>View Code</div>
                    </button>
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button>
                      <img
                        src="images/box-arrow-up-right.svg"
                        alt="Live Demo"
                      />{" "}
                      <div>View Live</div>
                    </button>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default MainPage;
