import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { UserContextProvider } from "../context/userContext";
import style from "./MainLayout.module.scss";
import { BreadCrumb } from "../components/Breadcrumb/BreadCrumb";

export default function MainLayout() {
  return (
    <div className={style.mainLayout}>
      <Header />
        <UserContextProvider>
          <Outlet />
        </UserContextProvider>
      <Footer />
    </div>
  );
}
