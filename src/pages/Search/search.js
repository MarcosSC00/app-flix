import { Header } from '../../components/Header/header'
import { Container } from '../../components/Container/container'
import { Footer } from '../../components/Footer/footer'
import styles from './Search.module.css'
import videos from '../../json/videos.json'
import { SearchVideoList } from '../../components/SearchVideoList/searchVideoList'
import { BackToTopButton } from '../../components/BackToTopButton/backToTopButton'


export function Search() {
  return (
    <>
      <BackToTopButton />
      <Header />
      <Container>
        <section className={styles.search}>
          <SearchVideoList videos={videos} />
        </section>
      </Container>
      <Footer />
    </>
  )
}
