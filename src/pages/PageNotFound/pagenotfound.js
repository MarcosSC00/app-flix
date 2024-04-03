import { Container } from '../../components/Container/container'
import { Footer } from '../../components/Footer/footer'
import { Header } from '../../components/Header/header'
import styles from './PageNotFound.module.css'
import error404 from './erro404.png'
export function PageNotFound() {
  return (
    <>
      <Header />
      <Container>
        <section className={styles.container}>
          <h2>Ops! página não encontrada.</h2>
          <img src={error404} alt="not found page" />
        </section>
      </Container>
      <Footer />
    </>
  )
}
