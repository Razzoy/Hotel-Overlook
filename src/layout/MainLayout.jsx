import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { NavBar } from "../components/NavBar/NavBar";
import { UserContextProvider } from "../context/userContext";

export default function MainLayout() {
  return (
    <div>
      <NavBar />
      <Header />
      <UserContextProvider>
        <Outlet />
      </UserContextProvider>
      <Footer />
    </div>
  );
}
