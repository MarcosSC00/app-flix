import styles from './Card.module.css'
import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import { useFavoriteContext } from '../../contexts/favorites'

export function Card({ id }) {
  const {favorite, addFavorite} = useFavoriteContext()
  const isFavorite = favorite.some((item) => item.id === id)
  
  return (
    <section className={styles.card}>
      <Link to={`/watch/${id}`}>
        <img
          src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
          alt="capa"
        />
      </Link>
      {isFavorite ? (
        <Star id={styles.icon}
          onClick={() => addFavorite({id})}
          className={styles.selected}
        />
      ) : (
        <Star id={styles.icon}
          onClick={() => addFavorite({id})}
        />
      )}
    </section>
  )
}
