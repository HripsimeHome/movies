import styles from "./SidebarMenu.module.scss";
import ImageWebp from "../../layout/ImageWebp/ImageWebp";
import Svg from "../../layout/Svg/Svg";

import { JacobWebpImage } from "../../../assets/images";
import { searchIcon, clockIcon } from "../../../assets/svg";

const SidebarMenu = () => {
  return (
    <section className={styles.sidebarMenu}>
      Menu
      {/* <span>
        <Svg id={searchIcon} /> Search
      </span>
      <Svg id={clockIcon} /> */}
    </section>
  );
};

export default SidebarMenu;
