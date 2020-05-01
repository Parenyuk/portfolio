import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Slogan from "./components/Slogan/Slogan";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
        <div className="container">
         <Header/>
         <Main/>
         <Skills/>
         <Projects/>
         <Slogan/>
         <Contact/>
         <Footer/>
        </div>
    </div>
  );
}

export default App;
