import styles from "./HomeTrending.module.scss";
import ImageWebp from "../../../layout/ImageWebp/ImageWebp";
import {
  trending1Image,
  trending1WebpImage,
  trending2Image,
  trending2WebpImage,
  trending3Image,
  trending3WebpImage,
  trending4Image,
  trending4WebpImage,
  trending5Image,
  trending5WebpImage,
  trending6Image,
  trending6WebpImage,
  trending7Image,
  trending7WebpImage,
  trending8Image,
  trending8WebpImage,
} from "../../../../assets/images";

const HomeTrending = () => {
  return (
    <section className={styles.homeTrending}>
      <h3 className={styles.homeTrending__title}>Trending New</h3>
      <div className={styles.homeTrending__sliderContainer}>
        <ImageWebp
          src={trending1Image}
          alt=""
          srcSet={trending1WebpImage}
          className={styles.homeTrending__img}
        />
        <ImageWebp
          src={trending2Image}
          alt=""
          srcSet={trending2WebpImage}
          className={styles.homeTrending__img}
        />
      </div>
    </section>
  );
};

export default HomeTrending;
