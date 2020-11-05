import "../global-styles";
import Link from "next/link";
import { useState } from "react";
const HomePage = () => {
  const [projects] = useState([
    {
      id: 3,
      imgUrl: "/edc.png",
      name: "EDC Learning Management System",
      position: "20% 80%",
      url: "https://main.edclearn.com/",
      description:
        "Multitenant Learning Management System  for the Endtrperise Development System.  Made with Vue and ❤️.",
    },
    // {
    //   id: 2,
    //   imgUrl: "/ste.png",
    //   name: "She Leads Africa Accelerator Program",
    //   position: "30% 80%",
    //   url: "https://www.securetech.com.ng/ste/",
    //   description: "The securetech training website. Made with Nuxt and ❤️.",
    // },
    {
      id: 4,
      imgUrl: "/mylaw.png",
      name: "Mylawlegal",
      position: "10% 0",
      url: "https://mylawlegal.com/",
      description:
        "A Legal Tech solution, allows you to perform Legal operations on the go, built with Nuxt, Node and ❤️.",
    },
    {
      id: 5,
      imgUrl: "/pricing-table.png",
      name: "Trove Investment Platform",
      position: "40% 80%",
      url: "https://codepen.io/AdePhil/full/povJzWO",
      description:
        "A crytocurrency pricing table. Made with Vanilla Js and ❤️.",
    },
    {
      id: 8,
      imgUrl: "/neya.png",
      name: "Lagos State Solution Hub",
      position: "20% 80%",
      url: "https://neya.tams.com.ng/",
      description:
        "The Nigerian employee of the year voting website. Made with Nuxt and ❤️.",
    },
  ]);
  return (
    <div className="">
      <div className="about container" id="about">
        <div className="about-text">
          <p className="intro">Benjamin Alamu. </p>
          <p>Software Engineer&nbsp;&bull;&nbsp;Technical Writer</p>
          <p className="description">
            I am a full stack software engineers building beautiful and usable
            applications across web, mobile and desktop platforms. <br />
            Using the best tools and practices out there, I create the client's
            desire without compromising standards
          </p>
        </div>
        <div className="socials">
          <a href="https://github.com/BenjaminAlamu" alt="Github">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 438.549 438.549"
            >
              <title>GitHub</title>
              <path d="M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365 c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63 c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996 c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136 c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559 c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559 c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997 c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851 c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136 c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41 c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126 c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817 c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994 c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849 c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24 c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979 c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146 c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995 c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906 C438.536,184.851,428.728,148.168,409.132,114.573z"></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/benjaminalamu/" alt="LinkedIn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 430.117 430.117"
            >
              <title>LinkedIn</title>
              <path d="M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707 c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21 v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824 C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463 c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z M5.477,420.56h92.184v-277.32H5.477V420.56z"></path>
            </svg>
          </a>
          <a href="https://twitter.com/Benjamin_Alamu" alt="twitter">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 612 612"
            >
              <title>Twitter</title>
              <path d="M612,116.258c-22.525,9.981-46.694,16.75-72.088,19.772c25.929-15.527,45.777-40.155,55.184-69.411 c-24.322,14.379-51.169,24.82-79.775,30.48c-22.907-24.437-55.49-39.658-91.63-39.658c-69.334,0-125.551,56.217-125.551,125.513 c0,9.828,1.109,19.427,3.251,28.606C197.065,206.32,104.556,156.337,42.641,80.386c-10.823,18.51-16.98,40.078-16.98,63.101 c0,43.559,22.181,81.993,55.835,104.479c-20.575-0.688-39.926-6.348-56.867-15.756v1.568c0,60.806,43.291,111.554,100.693,123.104 c-10.517,2.83-21.607,4.398-33.08,4.398c-8.107,0-15.947-0.803-23.634-2.333c15.985,49.907,62.336,86.199,117.253,87.194 c-42.947,33.654-97.099,53.655-155.916,53.655c-10.134,0-20.116-0.612-29.944-1.721c55.567,35.681,121.536,56.485,192.438,56.485 c230.948,0,357.188-191.291,357.188-357.188l-0.421-16.253C573.872,163.526,595.211,141.422,612,116.258z"></path>
            </svg>
          </a>
        </div>
      </div>
      {/* <div className="projects" id="projects">
        <div className="container projects-container">
          <h2 className="project-heading">Projects</h2>
          {projects.map(({ name, imgUrl, position, id, url, description }) => (
            <div
              key={id}
              className="project"
              style={{
                background: `url(${imgUrl}) no-repeat`,
                backgroundSize: "cover",
                backgroundPosition: `${position}`,
              }}
            >
              <div className="project-description">
                <div className="project-description-heading">
                  <h3>{name}</h3>
                  <Link href={url}>
                    <a className="nav-link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        viewBox="0 0 194.818 194.818"
                      >
                        <title>External</title>
                        <g>
                          <path d="M185.818,2.161h-57.04c-4.971,0-9,4.029-9,9s4.029,9,9,9h35.312l-86.3,86.3c-3.515,3.515-3.515,9.213,0,12.728 c1.758,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636l86.3-86.3v35.313c0,4.971,4.029,9,9,9s9-4.029,9-9v-57.04 C194.818,6.19,190.789,2.161,185.818,2.161z"></path>
                          <path d="M149,77.201c-4.971,0-9,4.029-9,9v88.456H18v-122h93.778c4.971,0,9-4.029,9-9s-4.029-9-9-9H9c-4.971,0-9,4.029-9,9v140 c0,4.971,4.029,9,9,9h140c4.971,0,9-4.029,9-9V86.201C158,81.23,153.971,77.201,149,77.201z"></path>
                        </g>
                      </svg>
                    </a>
                  </Link>
                </div>
                <div className="project-description-body">{description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
       */}
      <style jsx>
        {`
          .about {
            padding-top: 100px;
            min-height: 100vh;
            background: linear-gradient(
                rgb(10, 25, 47, 0.98),
                rgb(10, 25, 47, 0.98)
              ),
              url(/me.jpg) cover no-repeat;
            background-size: 140%;
            background-position: 0 0;
            display: flex;
            align-items: center;
            position: relative;
          }

          .about-text {
            margin-top: -150px;
            max-width: 440px;
          }
          .intro {
            color: hsl(158, 68%, 42%);
            font-size: 40px;
            margin: 0;
          }
          .description {
            line-height: 1.7;
            font-family: "Inconsolata", monospace;
          }
          .socials {
            position: absolute;
            width: 20px;
            bottom: 20px;
            display: flex;
            flex-direction: column;
            right: 0;
            align-aligns: center;
          }
          .socials::before {
            content: "";
            width: 2px;
            height: 50px;
            background-color: rgba(255, 255, 255, 0.6);
            position: absolute;
            bottom: -30px;
            left: 50%;
            transform: translateX(-50%);
          }
          .socials svg {
            width: 20px;
            margin-bottom: 20px;
            fill: rgba(255, 255, 255, 0.6);
            transition: 300ms ease;
          }
          .socials a:hover svg {
            fill: hsl(158, 68%, 42%);
          }
          .projects {
            padding-top: 50px;
            min-height: 100vh;
            background: #0f1e34;
            position: relative;
          }
          .projects-container {
            display: grid;
            grid-template-columns: repeat(3, minmax(200px, 1fr));
            grid-auto-rows: 50px;
            grid-auto-flow: dense;
            grid-column-gap: 30px;
            grid-row-gap: 20px;
          }
          .project-heading {
            grid-column: 1 / -1;
          }
          .project {
            background-size: cover;
            grid-row: span 5;
            position: relative;
          }
          .project:nth-child(2n) {
            grid-row: span 6;
          }
          .project::after {
            content: "";
            width: 100%;
            height: 100%;
            display: block;
            background-color: rgb(10, 25, 47, 0.98);
            position: absolute;
            top: 0;
            opacity: 0;
            transition: 250ms ease;
          }
          .project:hover::after {
            opacity: 0.98;
          }
          .project-description {
            position: absolute;
            padding: 10px;
            color: #fff;
            z-index: 5;
            opacity: 0;
            pointer-events: none;
            transform: translateY(20px);
            transition: 300ms ease;
          }

          .project-description-heading {
            display: flex;
            justify-content: space-between;
            width: 100%;
            align-items: center;
          }
          .project-description-body {
            font-family: "Inconsolata", monospace;
          }
          .project:hover .project-description {
            opacity: 1;
            transform: translateY(0);
            pointer-events: all;
          }
          .project-description svg {
            width: 20px;
            fill: #fff;
          }
        `}
      </style>
    </div>
  );
};

export default HomePage;
