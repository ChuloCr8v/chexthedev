import styles from '../styles/About.module.scss'
import Link from 'next/link'
import Heading from './Heading'
import Logo from '../public/logocrop.png'
import Image from 'next/image'
import {FaBolt, FaPenNib, FaPalette, FaLightbulb} from 'react-icons/fa'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'


const About = () => {
    
     useEffect(() => {
        Aos.init({duration: 1000});
     })
      
  return(
    <div data-aos="slide-up" className={styles.about}>
      <div className={styles.headingcontainer} >
        <Heading text={'About Me'} />
      </div>
      <div className={styles.container} >
      <div className={styles.description} >
        <p> 
          I am a front-end developer currently working with <span className={styles.one}>JavaScript,</span> <span>React.js</span> and <span className={styles.three}>Next.js.</span> I am an aspiring full-stack developer with interest in Nodejs and Python. I am <span className={styles.four}>Dedicated</span> to Learning, open to opportunities and always willing to take up a <span className={styles.two}>challenge. </span>I am passionate about <span>writing</span> as much as I am about building things and designing concepts. I am always <span  className={styles.one}>willing to learn</span> new concepts and can <span className={styles.three}>fit</span> into any environment. 
         </p>

         <p data-aos="slide-up">
          I am Nkematu Bonaventure. Besides my being passionate about writing, I have always had a flair for designs and building stuffs. And then I thought, where else to better implement these skills if not here. Now, I am interested in helping individuals and companies proffer solutions to their online business needs.
        </p>
      </div>
      
      <h1 className={styles.head}> Core Strengths </h1>
      <div className={styles.list} > 
          
           
         <div data-aos="slide-left" className={styles.item} >
           <div className={styles.logocontainer1}>
              <div className={styles.logocontainer2}>
                <FaPalette className={styles.logo} />
               </div>
           </div>
           <div className={styles.subhead}>
              <h1> Design Enthusiast </h1>
           </div>
           <div className={styles.details}>
              <p> I have keen eyes for simple and powerful designs, and fancy user interfaces. </p>
           </div>
          
        </div>
         
         <div data-aos="slide-right" className={styles.item} >
           <div className={styles.logocontainer1}>
              <div className={styles.logocontainer2}>
                <FaBolt className={styles.logo} />
               </div>
           </div>
           <div className={styles.subhead}>
              <h1 className={styles.h1}> Fast Learner </h1>
           </div>
           <div className={styles.details}>
              <p className={styles.p}> I can get the details with just a few explanations. I have a good imagination and can develop amazing concepts and design from your instructions. </p>
           </div>
        </div>
         
         <div data-aos="slide-up"  className={styles.item} >
           <div className={styles.logocontainer1}>
              <div className={styles.logocontainer2}>
                <FaPenNib className={styles.logo} />
               </div>
           </div>
           <div className={styles.subhead}>
              <h1 className={styles.h2}> Word Smith </h1>
           </div>
           <div className={styles.details}>
              <p className={styles.p}>I have the perfect contents to help your business reach out to your intended clients. I have worked with over 150 clients and created over 500 contents with my total word count ranging into 100s of thousands.</p>
           </div>
        </div>
        
           <div data-aos="slide-left" className={styles.item} >
           <div className={styles.logocontainer1}>
              <div className={styles.logocontainer2}>
                <FaLightbulb className={styles.logo} />
               </div>
           </div>
           <div className={styles.subhead}>
              <h1 class={styles.h3}> Creative Powers</h1>
           </div>
           <div className={styles.details}>
              <p> I possess the ability to critically analyze concepts while turning them into creative outputs.</p>
           </div>
          
        </div>
        </div>
        </div>
    </div>
    )
}

export default About 