import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import { FrontPage } from './pages/FrontPage'
import { NoPage } from './pages/NoPage'
import { DestinationPage } from './pages/DestinationPage'
import { RoomPage } from './pages/RoomPage'
import { ReservationPage } from './pages/ReservationPage'
import { LoginPage } from './pages/LoginPage'
import { HotelPage } from './pages/HotelPage'
import { CountryPage } from './pages/CountryPage'
import { CityPage } from './pages/CityPage'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<MainLayout />}>
            <Route index={true} element={<FrontPage />} />
            <Route path={"/destinations"} element={<DestinationPage />} />
            <Route path={"/destinations/:country"} element={<CountryPage />} />
            <Route path={"/destinations/:country/:city"} element={<CityPage />} />
            <Route path={"/destinations/:country/:city/:hotel"} element={<HotelPage />} />
            <Route path={"/destinations/:country/:city/:hotel/:room"} element={<RoomPage />} />
            <Route path={"rooms"} element={<RoomPage />} />
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
