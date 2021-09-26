import styles from '../styles/Heading.module.scss' 

const Heading = ({text}) => {
  return(
    <div className={styles.heading}>
      <div className={styles.headingcontainer}>
        <h1>{text}</h1>
      </div>
    </div>
    )
}

export default Heading 