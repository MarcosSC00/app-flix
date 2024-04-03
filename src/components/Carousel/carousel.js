import './carousel.css'
import Slider from 'react-slick'
export function Carousel({ children }) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    centerMode: false,
    variableWidth: true,
    adaptiveHeight: true,
    slidesToScroll: 1
  }
  return <Slider {...settings}>{children}</Slider>
}
