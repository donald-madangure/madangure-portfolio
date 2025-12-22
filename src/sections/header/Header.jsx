import { useEffect } from 'react'
import HeaderImage from '../../assets/about.jpg'
import data from './data'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './header.css'

const Header = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  return (
    <header id="header">      
      <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImage} alt="Header Portrait" />
        </div>
        <h3  data-aos="fade-up">Donald Madangure</h3>
        <p  data-aos="fade-up">
          Ready to launch your online presence? <b>Tell me about your project</b> and let's create <b>fast, modern, and fully mobile-responsive website or web application </b> including <b>cutting-edge AI Integration (eg VAPI) </b> to enhance user experience and functionality!          
        </p>
        <div className="header__cta"  data-aos="fade-up">
          <a href="#contact" className='btn primary'>Let's Talk</a>
          <a href="#portfolio" className='btn light'>My Work</a>
        </div>
        <div className="header__socials">
          {
            data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header