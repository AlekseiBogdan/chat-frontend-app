import { Outlet } from "react-router-dom";
import styles from "./App.module.css";
import Main from "../main/main";
import Tabbar from "../tabbar/Tabbar";

const HomePage = () => {
  return (
    <div className="App">
      <div className={styles["app-container"]}>
        <div className={styles["app-container__header"]}>
          <div className={styles["app-container__header-text"]}>
            <span className={styles["app-container__header-text-main"]}>Мой Нижний Новгород</span>
            <span>Каталог полезных сервисов для жителя</span>
          </div>
        </div>
        <Main/>
        <Tabbar/>
      </div>
      <Outlet/>
    </div>
  );
}

export default HomePage;
