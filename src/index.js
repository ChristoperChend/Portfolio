import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppBar from "./AppBar/AppBar";
import reportWebVitals from "./reportWebVitals";
import HomePage from "./Home/Home";
import AboutMe from "./AboutMe/AboutMe";
import Project from "./Project/Project";
import Certificate from './Certificate/Certificate';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import ParticlesComponent from './Component/Particles';

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom';
import { Main } from '@tsparticles/engine';

function Layout() {
  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <AppBar />
        <main className='flex-grow'>
          <Outlet />
        </main>
        <Footer />
        <ParticlesComponent id="particles" />
      </div>
    </>
  );
}

function NotFound() {
  return <div>404 - Page Not Found!</div>;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutMe />,
      },
      {
        path: "project",
        element: <Project />,
      },
      {
        path: "certificate",
        element: <Certificate />,
      },
      {
        path: "contact",
        element: <Contact />,
      }
    ],
    errorElement: <NotFound />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
