import { useState } from "react";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AboutMe from "./pages/AboutMe";
function App() {
  const pages = {
    home: <HomePage />,
    about: <AboutMe />,
  };

  const [page, setPage] = useState("home");

  return (
    <>
      <main>
        <Header setPage={setPage} />
        {pages[page]}
      </main>
    </>
  );
}

export default App;
