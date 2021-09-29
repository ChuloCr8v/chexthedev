import styles from '../styles/Skills.module.scss'
import Heading from './Heading'

const Skills = () => {
  return(
    <div className={styles.skills}>
      <div className={styles.heading}>
        <Heading text={"My Skills & Stacks"} />
      </div>
      <div className={styles.container}>
         <div className={styles.frontend}>
      <h5> Front-End Development </h5>
      
      <div className={styles.stacks}>
          <p> HTML5 </p>
          <p> CSS3 </p>
          <p> TailwindCss</p>
          <p> Sass </p>
          <p> JavaScript </p>
          <p> ReactJs</p>
          <p> NextJs</p>
          <p> Framer Motion </p>
          <p> Sanity Studio </p>
          <p> Github </p>
          <p> Blogger </p>
          <p> WordPress </p>
          <p> Elementor </p>
          <p> WooCommerce</p>
          <p> Photoshop </p>
          <p> Canva </p>
          <p> Figma </p>
          <p> Corel Draw </p>
        </div>
        </div>
    
      <div className={styles.content}>
      <h5> Content Creation </h5>
      <div className={styles.list}>
          <p> S.E.0 </p>
          <p> Storytelling </p>
          <p> Fiction </p>
          <p> Web Contents </p>
          <p> Non-Fiction </p>
          <p> Articles</p>
      </div>
      </div>
    </div>
    </div>
    )
}

export default Skills