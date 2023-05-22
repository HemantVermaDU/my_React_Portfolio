import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import {  faAddressCard, faEnvelope, faHandPointDown, faMobile,} from '@fortawesome/free-solid-svg-icons'
import Layout from '../Layout'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
    <Layout/>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
         Contact Me from here  <FontAwesomeIcon
              icon={faHandPointDown}
              color="#e83e8c"
              className="anchor-icon"
            />
          </p>
          <div className="contact-form">
            <form ref={form} action="https://formcarry.com/s/SYFpOIv-1VN" method='POST'>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li> 
                  <input type="submit" className="flat-button" value="SEND MESSAGE" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="contact-info">
        <div className="contact-info-item">
         <span><FontAwesomeIcon
              icon={faEnvelope}
              color="#e83e8c"
              className="anchor-icon"
            /> hemantverma618@gmail.com </span>
          </div>
          <div className="contact-info-item">
         <span><FontAwesomeIcon
              icon={faMobile}
              color="#e83e8c"
              className="anchor-icon"
            /> 9045015399</span>
          </div>
          <div className="contact-info-item">
         <span><FontAwesomeIcon
              icon={faAddressCard}
              color="#e83e8c"
              className="anchor-icon"
            /> Agra , Uttar Pradesh</span>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
