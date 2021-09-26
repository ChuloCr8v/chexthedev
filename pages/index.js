import {FaHome} from 'react-icons/fa'
import styles from '../styles/Index.module.scss'
import Image from 'next/image'
import Bg from '../public/bgimg.jpg'
import HeroSection from '../comps/HeroSection'
import About from '../comps/About'
import Skills from '../comps/Skills'
import Portfolio from '../comps/Portfolio'
import ContactSection from '../comps/ContactSection'

export default function Index() {
  return (
  <div class="" >
   <HeroSection />
   <About />
   <Skills />
   <Portfolio />
   <ContactSection />
  </div>
  )
}