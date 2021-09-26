import styles from '../styles/Portfolio.module.scss' 
import Ports from './Port'
import Image from 'next/image'
import {FaGlobe, FaGithub} from 'react-icons/fa'

const Portfolio = () => {
  return(
    <div className={styles.portfolio}>
    <div className={styles.headingcontainer} >
      <h1> My Portfolio </h1>
    </div>
      <div className={styles.list}>
        {Ports.map(port => (
          <div className={styles.item}>
            <div className={styles.img}>
            <Image src={port.img} height={370} width={600} className={styles.img}/>
            </div>
            <div className={styles.description}>
              <h1>{port.title} </h1>
              <p>{port.description} </p>
              <h2>Features</h2>
              <ol className={styles.features}>
                <li>{port.featureOne} </li>
                <li>{port.featureTwo} </li>
                <li>{port.featureThree} </li>
                <li>{port.featureFour} </li>
              </ol>
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