import { Banner } from '../../components/Banner/banner'
import { Footer } from '../../components/Footer/footer'
import { Header } from '../../components/Header/header'
import { Container } from '../../components/Container/container'
import { Card } from '../../components/Card/card'
import {
  Category,
  categories,
  filterCategories
} from '../../components/Category/category'
import { Carousel } from '../../components/Carousel/carousel'
import { BackToTopButton } from '../../components/BackToTopButton/backToTopButton'


export function Home() {
  return (
    <section>
      <BackToTopButton />
      <Header />
      <Banner image="home" />
      <Container>
        {categories.map((catg, index) => (
          <Category category={catg}>
            <Carousel>
              {filterCategories(index).map(video => (
                <Card id={video.id} key={video.id} />
              ))}
            </Carousel>
          </Category>
        ))}
      </Container>
      <Footer />
    </section>
  )
}
