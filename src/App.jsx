import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import { FrontPage } from './pages/FrontPage'
import { NoPage } from './pages/NoPage'
import { DestinationPage } from './pages/DestinationPage'
import { RoomsPage } from './pages/RoomsPage'
import { ReservationPage } from './pages/ReservationPage'
import { LoginPage } from './pages/LoginPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<MainLayout />}>
            <Route index={true} element={<FrontPage />} />
            <Route path={"/destination"} element={<DestinationPage />} />
            <Route path={"/rooms"} element={<RoomsPage />} />
            <Route path={"/reservation"} element={<ReservationPage />} />
            <Route path={"/login"} element={<LoginPage />} />
            <Route path={"/*"} element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
