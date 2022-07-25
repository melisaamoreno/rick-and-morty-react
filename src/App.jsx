import './App.css'
import { Nav } from './Components/Nav/Nav'
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from './Components/Pages/Home/Home'
import { Characters } from './Components/Pages/Characters/Characters'
import { Episodes } from './Components/Pages/Episodes/Episodes'
import { Locations } from './Components/Pages/Locations/Locations'
import { Error404 } from './Components/Pages/Error404/Error404';
import { CharacterCard } from './Components/CharacterCard/CharacterCard';
import { Login } from './Components/Pages/Login/Login';
import {ProtectedRoute} from './Components/Pages/Login/ProtectedRoute'
function App() {
  return (
    <>
      <Nav />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="character" element={<Characters />} />
        <Route path="character/:id" element={<CharacterCard />} />
        <Route path="episode" element={<Episodes />} />
        <Route path="location" element={<Locations />} />
        <Route element={<ProtectedRoute redirectPath='login'/>}>
           <Route path="profile" element={<Home />} />
        </Route>
        <Route path="login" element={<Error404 />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  )
}

/*<Route element={<ProtectedRoute />}>
          <Route path="/perfil" element={<Profile />} />
          <Route path="/pedidos" element={<Orders />} />
        </Route>
 */
export default App
