import { Card } from '../Card/card'
import styles from './VideoList.module.css'

export function VideoList({ videos, emptyHeading }) {
  const count = videos.length
  let heading = emptyHeading
  if (count > 0) {
    const noun = count > 1 ? 'videos' : 'video'
    heading = `${count} ${noun}`
  }
  return (
    <>
      <h2>{heading}</h2>
      <section className={styles.videoList}>
        {videos.map(video => (
          <Card id={video.id} key={video.id} />
        ))}
      </section>
    </>
  )
}
