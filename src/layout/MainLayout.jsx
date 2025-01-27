import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { UserContextProvider } from "../context/userContext";
import style from "./MainLayout.module.scss";
import { Wrapper } from "../components/Wrapper/Wrapper";

export default function MainLayout() {
  return (
    <div className={style.mainLayout}>
      <Header />
      <Wrapper>
        <UserContextProvider>
          <Outlet />
        </UserContextProvider>
      </Wrapper>
      <Footer />
    </div>
  );
}
