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
    <header id="header" className='mb-6'>      
      <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImage} alt="Header Portrait" />
        </div>
        <h3  data-aos="fade-up">Donald Madangure</h3>
        <p  data-aos="fade-up">
          Ready to launch your online presence? Tell me about your project and let's create a fast, modern, and fully mobile-responsive website or web application.
          I specialize in building <b>Progressive Web Apps (PWAs)</b>—giving your users a lightning-fast, app-like experience directly through their browser,
          complete with offline capabilities and push notifications. To further elevate your platform, I offer cutting-edge <b>AI Integration</b>
          to create intuitive, voice-enabled, and highly functional user experiences that set you apart from the competition!         
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