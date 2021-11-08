import styles from '../styles/Portfolio.module.scss' 
import Ports from './Port'
import Image from 'next/image'
import Heading from './Heading'
import {FaGlobe, FaGithub} from 'react-icons/fa'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'


const Portfolio = () => {
    
     useEffect(() => {
        Aos.init({duration: 1000});
     })
     
  return(
    <div data-aos="slide-up" className={styles.portfolio}>
    <div className={styles.headingcontainer} >
      <Heading text={'My Portfolio'} />
    </div>
      <div className={styles.list}>
        {Ports.map(port => (
          <div data-aos="slide-left" className={styles.item}>
            <div className={styles.img}>
            <Image src={port.img} height={370} width={600} className={styles.img}/>
            </div>
            <div className={styles.description}>
              <h1>{port.title} </h1>
              <p>{port.description} </p>
              <div className={styles.stacks_container}>
                <h2>Stacks Used</h2>
                <ul className={styles.stacks}>
                  <li className={styles.stack}>{port.stackOne}</li>
                  <li className={styles.stack}>{port.stackTwo}</li>
                  <li className={styles.stack}>{port.stackThree}</li>
                  <li className={styles.stack}>{port.stackFour}</li>
                </ul>
              </div>
              <h2>Features</h2>
              <ul className={styles.features}>
                <li className={styles.feature}>{port.featureOne} </li>
                <li className={styles.feature}>{port.featureTwo} </li>
                <li className={styles.feature}>{port.featureThree} </li>
                <li className={styles.feature}>{port.featureFour} </li>
              </ul>
            </div>
              <div className={styles.icons}>
                <a href={port.demo} target="_blank" rel="noopener noreferrer">
                <FaGlobe className={styles.icon} />
                </a>
                <a href={port.github} target="_blank" rel="noopener noreferrer">
                <FaGithub className={styles.icon2} />
                </a>
              </div>
          </div>
       ))} 
      </div>
    </div>
    )
}

export default Portfolio 