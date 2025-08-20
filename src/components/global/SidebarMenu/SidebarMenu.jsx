import styles from "./SidebarMenu.module.scss";
import { NavLink } from "react-router-dom";
import { avatarImage } from "../../../assets/images";
import Svg from "../../layout/Svg/Svg";

import {
  homePagePath,
  searchPagePath,
  showsPagePath,
  moviesPagePath,
  genresPagePath,
  watchLaterPage,
} from "../../../router/path";

import {
  searchIcon,
  homeIcon,
  showsIcon,
  moviesIcon,
  genresIcon,
  clockIcon,
} from "../../../assets/svg";

const menuItem = [
  {
    icon: searchIcon,
    title: "Search",
    link: searchPagePath,
  },
  {
    icon: homeIcon,
    title: "Home",
    link: homePagePath,
  },
  {
    icon: showsIcon,
    title: "TV Shows",
    link: showsPagePath,
  },
  {
    icon: moviesIcon,
    title: "Movies",
    link: moviesPagePath,
  },
  {
    icon: genresIcon,
    title: "Genres",
    link: genresPagePath,
  },
  {
    icon: clockIcon,
    title: "Watch Later",
    link: watchLaterPage,
  },
];

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

      <div className={styles.sidebarMenu__itemContainer}>
        {menuItem.map(({ icon, title, link }, index) => (
          <NavLink
            to={link}
            key={index}
            className={({ isActive }) =>
              isActive
                ? `${styles.sidebarMenu__menuLink} ${styles.sidebarMenu__menuLink_active}`
                : styles.sidebarMenu__menuLink
            }
            rel="noreferrer"
          >
            <Svg id={icon} className={styles.sidebarMenu__icon} />
            <span>{title}</span>
          </NavLink>
        ))}
      </div>

      {/* <nav className={styles.sidebarMenu__footer}>
        <NavLink>languages get help exit</NavLink>
      </nav> */}
    </section>
  );
};

export default SidebarMenu;
