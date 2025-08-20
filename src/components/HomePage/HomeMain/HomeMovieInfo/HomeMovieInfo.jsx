import styles from "./HomeMovieInfo.module.scss";
import { useNavigate } from "react-router-dom";
import MainBtn from "../../../layout/MainBtn/MainBtn";
import { titleImage } from "../../../../assets/images";
import Svg from "../../../layout/Svg/Svg";
import { playIcon } from "../../../../assets/svg";

import { moviesPagePath } from "../../../../router/path";
import { formatDuration } from "../../../../utils/formatDuration";

const HomeMovieInfo = ({ featuredData }) => {
  const navigate = useNavigate();
  return (
    <section className={styles.homeMovieInfo}>
      <span className={styles.homeMovieInfo__category}>movie</span>
      {featuredData ? (
        <>
          <img
            src={`/trending/titles/${featuredData.TitleImage}`}
            alt={featuredData.Title}
            className={styles.homeMovieInfo__img}
          />
          <h4 className={styles.homeMovieInfo__details}>
            {featuredData.ReleaseYear} {featuredData.MpaRating}{" "}
            {formatDuration(featuredData.Duration)}
          </h4>
          <p className={styles.homeMovieInfo__description}>
            {featuredData.Description}
          </p>
        </>
      ) : (
        <>
          <div className={styles.homeMovieInfo__titleImgDraft} />
          <div className={styles.homeMovieInfo__detailsDraft} />
          <div className={styles.homeMovieInfo__descriptionDraft} />
        </>
      )}
      <div className={styles.homeMovieInfo__btnContainer}>
        <MainBtn whiteBg>
          <Svg id={playIcon} className={styles.homeMovieInfo__icon} />
          play
        </MainBtn>
        <MainBtn onClick={() => navigate(moviesPagePath)}>more info</MainBtn>
      </div>
    </section>
  );
};

export default HomeMovieInfo;
