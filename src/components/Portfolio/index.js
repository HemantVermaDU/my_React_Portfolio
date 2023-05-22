import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Layout from '../Layout'

import project1 from '../../assets/portfolio/project-1.png'
import project2 from '../../assets/portfolio/project-2.png'
import project3 from '../../assets/portfolio/project-3.png'
import project4 from '../../assets/portfolio/project-4.png'
import project5 from '../../assets/portfolio/project-5.png'
import project6 from '../../assets/portfolio/project-6.png'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
 

  useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  
  const projects = [
    {
      img: project1,
      name: "Personal Portfolio",
      github_link: "https://hemantvermadu.github.io/",
      live_link: "https://hemantvermadu.github.io/",
    },
    {
      img: project2,
      name: "JavaScript Weather Website",
      github_link: "https://github.com/HemantVermaDU/weather_app",
      live_link: "https://hemantvermadu.github.io/weather_app/",
    },
    {
      img: project3,
      name: "JavaScript Car Game ",
      github_link: "https://github.com/HemantVermaDU/Games",
      live_link: "https://hemantvermadu.github.io/Games/",
    },
    {
      img: project4,
      name: "JavaScript TODO ",
      github_link:
        "https://github.com/HemantVermaDU/JavaScript-Todo-List",
      live_link: "https://github.com/HemantVermaDU/JavaScript-Todo-List",
    },
    {
      img: project5,
      name: "Hulu Clone",
      github_link: "https://github.com/HemantVermaDU",
      live_link: "https://github.com/HemantVermaDU",
    },
    {
      img: project6,
      name: "Youtube Clone",
      github_link: "https://github.com/HemantVermaDU",
      live_link: "https://youtubehv.netlify.app/",
    },
  ];

 

  return (
    <>
    <Layout/>
      <div className="container portfolio-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'r','o','j','e','c','t','s']}
              idx={15}
            />
          </h1>
      
          
          <section id="projects" className="py-10 text-white">
     
      <div className="main">
        <div className=" ">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      rel="noreferrer"
                      className="btn text-cyan-600 bg-gray-800 px-6 py-3 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      rel="noreferrer"
                      className="btn text-cyan-600 bg-gray-800 px-6 py-3 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      
      </div>
    </section>
         
         
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
