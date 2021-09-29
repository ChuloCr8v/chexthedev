import About from '../comps/About'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'
const aboutme = () => {
      useEffect(() => {
    Aos.init({duration: 500});
  }) 
  return(
    <div className="mt-56" data-aos="fade-up" >
        <About />
    </div>
    )
}

export default aboutme