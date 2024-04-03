import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/home'
import { Watch } from '../src/pages/Wacth/wacth'
import { PageNotFound } from './pages/PageNotFound/pagenotfound'
import { Search } from './pages/Search/search'
import { Favorites } from './pages/Favorites/favorites'
import FavoritesProvider from './contexts/favorites'
import { Cadastre } from './pages/Casdastre/cadastre'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <FavoritesProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/watch/:id" element={<Watch />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/cadastre" element={<Cadastre />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
        </Routes>
      </FavoritesProvider>
    </BrowserRouter>
  )
}
