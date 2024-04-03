import { Container } from '../../components/Container/container'
import { Footer } from '../../components/Footer/footer'
import { Header } from '../../components/Header/header'
import { VideoList } from '../../components/VideoList/videoList'
import { useFavoriteContext } from '../../contexts/favorites'
import styles from './Favorites.module.css'
import { BackToTopButton } from '../../components/BackToTopButton/backToTopButton'
import { Banner } from '../../components/Banner/banner'

export function Favorites() {
  const {favorite} = useFavoriteContext()
  return (
    <>
      <BackToTopButton />
      <Header />
      <Banner image="favoritos" />
      <Container>
        <section className={styles.favorites}>
          <h2>Favoritos</h2>
          {<VideoList videos={favorite} emptyHeading="Sem Favoritios"/>}
        </section>
      </Container>
      <Footer />
    </>
  )
}
