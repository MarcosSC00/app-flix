import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import { useState } from 'react'

export function Header() {
  const [menuIsClicked, setMenuIsClicked] = useState(false)
  function toggleMenu(){
    setMenuIsClicked(!menuIsClicked)
  }
  function handleLinkClick(){
    setMenuIsClicked(true)
  }
  return (
    <header className={styles.header}>
      <Link to="/" onClick={handleLinkClick}>
        <span>AppFlix</span>
      </Link>
      <nav className={`${styles.menu} ${menuIsClicked && styles['menu-actived']}`}>
        <div className={styles.links}>
          <Link to="/" onClick={handleLinkClick}>Home</Link>
          <Link to="/search" onClick={handleLinkClick}>Pesquisar</Link>
          <Link to="/favorites" onClick={handleLinkClick}>Favoritos</Link>
          <Link to="/cadastre" onClick={handleLinkClick}>Cadastrar</Link>
        </div>
        <div className={styles['hamburguer-menu']} onClick={toggleMenu}>
          <div className={`${styles['barra-menu']} ${styles.b1}`}></div>
          <div className={`${styles['barra-menu']} ${styles.b2}`}></div>
          <div className={`${styles['barra-menu']} ${styles.b3}`}></div>
        </div>
      </nav>
    </header>
  )
}
