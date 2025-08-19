import styles from "./SidebarMenu.module.scss";
import { Link, NavLink } from "react-router-dom";
import ImageWebp from "../../layout/ImageWebp/ImageWebp";
import Svg from "../../layout/Svg/Svg";

import { avatarImage } from "../../../assets/images";
import {
  searchIcon,
  homeIcon,
  showsIcon,
  moviesIcon,
  genresIcon,
  clockIcon,
} from "../../../assets/svg";

import {
  showsPagePath,
  moviesPagePath,
  genresPagePath,
} from "../../../router/path";

const SidebarMenu = () => {
  return (
    <section className={styles.sidebarMenu}>
      <div className={styles.sidebarMenu__userBlock}>
        <img
          src={avatarImage}
          alt="User avatar"
          className={styles.sidebarMenu__avatar}
        />
        <span className={styles.sidebarMenu__userName}>Daniel</span>
      </div>

      {/* <span>
        <Svg id={searchIcon} /> Search
      </span>
      <Svg id={clockIcon} /> */}
      {/* <nav>
        <NavLink to={genresPagePath}>
          <Svg id={searchIcon} />
          <h5>Search</h5>
        </NavLink>
      </nav> */}
    </section>
  );
};

export default SidebarMenu;
