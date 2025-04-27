import { useRef } from "react";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
function App() {
  const sectionRefs = {
    aboutMe: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
  };

  return (
    <>
      <main>
        <Header sectionRefs={sectionRefs} />
        <MainPage sectionRefs={sectionRefs} />
      </main>
    </>
  );
}

export default App;
