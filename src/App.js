import React from "react";
import { Skills } from "./Components/Skills";
import { GithubCalendar } from "./Components/GithubCalendar";
import { Intro } from "./Components/Intro";
import { Navbar } from "./Components/Navbar";
import { Projects } from "./Components/Projects";
import { Contact } from "./Components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Skills />
      <Projects />
      <GithubCalendar />
      <Contact />
    </div>
  );
}

export default App;
