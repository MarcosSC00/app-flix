import style from './Banner.module.css'

export function Banner({ image }) {
  return (
    <div
      className={style.banner}
      style={{ backgroundImage: `url('/images/banner-${image}.png')` }}
    ></div>
  )
}
