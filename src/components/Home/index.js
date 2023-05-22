import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import resume from '../../assets/portfolio/Resume.pdf'
import Logo from './Logo'
import './index.scss'
import Layout from '../Layout'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = [' ','H','e', 'm', 'a', 'n', 't','','V','e','r','m','a'] 
   

  useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
    <Layout/>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}> H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <span class="wave">👋</span>
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <br/>
            <AnimatedLetters 
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br/>
          </h1>
          <h2>Front End Developer / Php Laravel Developer</h2>
          <a href={resume} download className="flat-button">
            RESUME
          </a>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
