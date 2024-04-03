import styles from './Form.module.css'
import {categories} from '../Category/category'
import { useState } from 'react'
export function Form(){
  const [url, setUrl] = useState('')
  const [category, setCategory] = useState('')
  const [videos, setVideos] = useState([])
  const [error, setError] = useState('')

  function valideUrl(url){
    const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9\-_]+)$/
    if(!regex.test(url) || url.length < 43){
      setError('Erro: URL inválida!')
      return false
    }else{
      return url.substring(32, 43)
    }
  }

  function onSave(e){
    e.preventDefault()
    if(!category || category === '-'){
      setError('Error: Escolha uma categoria!')
      return
    }else{
      setError('')
    }

    const urlVideo = valideUrl(url)
    if(urlVideo && category){
      const newVideo = {urlVideo, category}
      setVideos([...videos, newVideo])
      localStorage.setItem('videos', JSON.stringify([...videos, newVideo]))
      setCategory('')
      setUrl('')
    }
  }

  return(
    <section className={styles.container}>
      <h2>Cadatro de vídeo</h2>
      <form onSubmit={onSave}>
        <div>
          <label>URL do vídeo:</label>
          <input 
            type="text" 
            placeholder="Digite a URL do vídeo"
            required='required'
            value={url}
            onChange={e => setUrl(e.target.value)}
          />
        </div>
        <div>
          <label>Categoria</label>
          <select value={category} onChange={e => setCategory(e.target.value)}>
            <option value='-'>Selecione uma opção</option>
            {categories.map(item => {
              return(
                <option value={item}>{item}</option>
              )
            })}
          </select>
        </div>
        <div>
          <button>Cadastrar</button>
        </div>
        <div>{error}</div>
      </form>
    </section>
  )
}