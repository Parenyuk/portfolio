import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Slogan from "./components/Slogan/Slogan";
import Footer from "./components/Footer/Footer";
import Particles from "react-particles-js";
import {Contact} from './components/Contact/Contact';



function App() {

    const particlesOptions = {
        particles: {
            number: {
                value: 50,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse"
                },
            }
        }
    }
  return (
    <div className='App'>
        <div className='container'>
            <Particles params={particlesOptions} className='particles' />
         <Header/>
         <Main/>
         <Skills title={'My Skills'}/>
         <Projects/>
         <Slogan title={'I am available for hire'}/>
            <Contact />
         {/*<ContactContainer/>*/}
         <Footer/>
        </div>
    </div>
  );
}

export default App;
