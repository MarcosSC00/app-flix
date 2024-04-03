import style from './Category.module.css'
import videos from '../../json/videos.json'

export const categories = [
  'Geografia',
  'Como fazer e usar',
  'Astronomia e Geografia',
  'Climatologia, Meteorologia, Vegetação',
  'Geologia e Hidrografia'
]
export function filterCategories(id) {
  return videos.filter(video => video.category === categories[id])
}

export function Category({ category, children }) {
  return (
    <section className={style.category}>
      <h2>{category}</h2>
      <div>{children}</div>
    </section>
  )
}
