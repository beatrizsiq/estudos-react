import styles from '../style/Title.module.css' 

// Age como um objeto com classes

const Title = () => {
  return (
    <div>
        <h1 className={styles.my_title}>Título CSS Module</h1>
    </div>
  )
}

export default Title