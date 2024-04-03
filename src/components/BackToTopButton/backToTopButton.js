import styles from  './Button.module.css';

export function BackToTopButton(){
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    }
    )
  }

  return(
    <button className={styles.BackToTop} onClick={handleClick}>
      &#9650;
    </button>
  )
}