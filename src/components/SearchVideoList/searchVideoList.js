import { useEffect, useState } from 'react'
import { VideoList } from '../VideoList/videoList'
import styles from './SearchVideoList.module.css'
import { Loader } from '../Loader/loader'

function filterVideos(videos, search) {
  if(!search){
    return videos
  }
  return videos.filter(
    (video) => video.category.includes(search) || video.title.includes(search)
  )
}

export function SearchVideoList({ videos }) {
  const [search, setSearch] = useState()
  const foundVideos = filterVideos(videos, search)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500)
  }, [])

  return (
    <section className={styles.searchVideos}>
      <input
        placeholder="pesquisar..."
        type="search"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      {isLoading ? <Loader/> : 
      <VideoList
        videos={foundVideos}
        emptyHeading={`Nenhum vídeo encontrado para "${search}"`}
      />
      }
    </section>
  )
}
