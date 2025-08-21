import styles from "./App.module.scss";
import AppRouter from "../../router/AppRouter";
import SidebarMenu from "../global/SidebarMenu/SidebarMenu";

function App() {
  return (
    <>
      <SidebarMenu />
      <div className={styles.app}>
        <AppRouter />
      </div>
    </>
  );
}

export default App;
