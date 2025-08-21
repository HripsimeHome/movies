import styles from "./HomeError.module.scss";
import Svg from "../../layout/Svg/Svg";
import { errorIcon } from "../../../assets/svg";

const HomeError = () => {
  return (
    <div className={styles.homeError}>
      <Svg id={errorIcon} className={styles.homeError__icon} />
      <h4 className={styles.homeError__text}>Failed to load data</h4>
    </div>
  );
};

export default HomeError;
