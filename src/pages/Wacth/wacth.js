import { Header } from '../../components/Header/header'
import { Container } from '../../components/Container/container'
import { Footer } from '../../components/Footer/footer'
import { Banner } from '../../components/Banner/banner'
import styles from './Wacth.module.css'
import { useParams } from 'react-router-dom'
import videos from '../../json/videos.json'
import { PageNotFound } from '../PageNotFound/pagenotfound'

export function Watch() {
  const params = useParams()
  const video = videos.find(video => {
    return video.id === params.id
  })
  if (!video) {
    return <PageNotFound />
  }
  return (
    <>
      <Header />
      <Banner image="assistir" />
      <Container>
        <section className={styles.watch}>
          <iframe
            width="640"
            height="480"
            src={`https://www.youtube.com/embed/${video.id}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </section>
      </Container>
      <Footer />
    </>
  )
}
