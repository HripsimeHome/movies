import styles from "./HomeMain.module.scss";
import HomeMovieInfo from "./HomeMovieInfo/HomeMovieInfo";
import HomeTrending from "./HomeTrending/HomeTrending";

const HomeMain = () => {
  return (
    <>
      <section className={styles.homeMain}>
        <HomeMovieInfo />
        <HomeTrending />
      </section>
    </>
  );
};

export default HomeMain;
