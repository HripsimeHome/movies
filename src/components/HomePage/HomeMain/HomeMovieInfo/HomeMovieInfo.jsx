import styles from "./HomeMovieInfo.module.scss";
import MainBtn from "../../../layout/MainBtn/MainBtn";
import { titleImage } from "../../../../assets/images";
import Svg from "../../../layout/Svg/Svg";
import { playIcon } from "../../../../assets/svg";

const HomeMovieInfo = () => {
  return (
    <section className={styles.homeMovieInfo}>
      <span className={styles.homeMovieInfo__category}>movie</span>
      <img
        src={titleImage}
        alt="The Irishman"
        className={styles.homeMovieInfo__img}
      />
      <h4 className={styles.homeMovieInfo__details}>2021 18+ 1h 48m</h4>
      <p className={styles.homeMovieInfo__description}>
        The film is a sprawling epic that chronicles the life of Frank Sheeran,
        a World War II veteran who becomes a hitman and confidante to powerful
        figures in the American Mafia.
      </p>
      <div className={styles.homeMovieInfo__btnContainer}>
        <MainBtn whiteBg>
          <Svg id={playIcon} className={styles.homeMovieInfo__icon} />
          play
        </MainBtn>
        <MainBtn>more info</MainBtn>
      </div>
    </section>
  );
};

export default HomeMovieInfo;
