import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppBar from "./AppBar/AppBar";
import reportWebVitals from "./reportWebVitals";
import HomePage from "./Home/Home";
import AboutMe from "./AboutMe/AboutMe";
import Project from "./Project/Project";
import ParticlesComponent from './Component/Particles';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Certificate from './Certificate/Certificate'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <AppBar />
      <HomePage />
      <AboutMe />
      <Project />
      <Certificate/>
      <Contact />
      <Footer />
      <ParticlesComponent id="particles" />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
