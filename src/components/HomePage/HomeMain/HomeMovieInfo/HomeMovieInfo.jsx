import styles from "./HomeMovieInfo.module.scss";
// import Svg from "../../layout/Svg/Svg";
// import { JaneRightBottomIcon } from "../../../assets/svg";

const HomeMovieInfo = () => {
  return (
    <section className={styles.homeMovieInfo}>
      <span className={styles.homeMovieINfo__category}>movie</span>
      <h1 className={styles.homeMovieInfo__title}>the irishman</h1>
      <p>
        The film is a sprawling epic that chronicles the life of Frank Sheeran,
        a World War II veteran who becomes a hitman and confidante to powerful
        figures in the American Mafia.
      </p>
    </section>
  );
};

export default HomeMovieInfo;
