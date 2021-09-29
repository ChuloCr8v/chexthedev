import styles from '../styles/Skills.module.scss'
import Heading from './Heading'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'


const Skills = () => {
    
     useEffect(() => {
        Aos.init({duration: 1000});
     })
     
    
  return(
    <div data-aos="slide-up" className={styles.skills}>
      <div className={styles.heading}>
        <Heading text={"My Skills & Stacks"} />
      </div>
      <div className={styles.container}>
         <div className={styles.frontend}>
      <h5> Front-End Development </h5>
      
      <div className={styles.stacks}>
          <p data-aos="slide-left"> HTML5 </p>
          <p data-aos="slide-right"> CSS3 </p>
          <p data-aos="slide-left"> TailwindCss</p>
          <p data-aos="slide-right"> Sass </p>
          <p data-aos="slide-left"> JavaScript </p>
          <p data-aos="slide-right"> ReactJs</p>
          <p data-aos="slide-left"> NextJs</p>
          <p data-aos="slide-right"> Framer Motion </p>
          <p data-aos="slide-left"> Sanity Studio </p>
          <p data-aos="slide-right"> Github </p>
          <p data-aos="slide-left"> Blogger </p>
          <p data-aos="slide-right"> WordPress </p>
          <p data-aos="slide-left"> Elementor </p>
          <p data-aos="slide-right"> WooCommerce</p>
          <p data-aos="slide-left"> Photoshop </p>
          <p data-aos="slide-right"> Canva </p>
          <p data-aos="slide-left"> Figma </p>
          <p data-aos="slide-right"> Corel Draw </p>
        </div>
        </div>
    
      <div className={styles.content}>
      <h5  data-aos="slide-up"> Content Creation </h5>
      <div className={styles.list}>
          <p data-aos="slide-left"> S.E.0 </p>
          <p data-aos="slide-right"> Storytelling </p>
          <p data-aos="slide-left"> Fiction </p>
          <p data-aos="slide-right"> Web Contents </p>
          <p data-aos="slide-left"> Non-Fiction </p>
          <p data-aos="slide-right"> Articles</p>
      </div>
      </div>
    </div>
    </div>
    )
}

export default Skills