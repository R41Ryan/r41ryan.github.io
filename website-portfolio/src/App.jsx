import { useRef } from "react";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import Footer from "./components/Footer";
function App() {
  const sectionRefs = {
    aboutMe: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
  };

  return (
    <>
        <Header sectionRefs={sectionRefs} />
        <MainPage sectionRefs={sectionRefs} />
        <Footer sectionRefs={sectionRefs} />
    </>
  );
}

export default App;
