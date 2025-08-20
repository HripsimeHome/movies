import styles from "./HomeTrending.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const MAX_DATA_LENGTH = 50;
const SLIDES_PER_VIEW = 7;

const HomeTrending = ({ data, onSelect }) => {
  // Sort data by Date property (descending)
  const sortedData = data
    ? [...data].sort((a, b) => new Date(b.Date) - new Date(a.Date))
    : [];

  return (
    <section className={styles.homeTrending}>
      <h3 className={styles.homeTrending__title}>Trending New</h3>
      <Swiper
        spaceBetween={15}
        slidesPerView="8.3"
        loop={true}
        slidesOffsetAfter={SLIDES_PER_VIEW}
      >
        {sortedData.length
          ? sortedData.slice(0, MAX_DATA_LENGTH).map((item) => (
              <SwiperSlide
                key={item.Id}
                className={styles.homeTrending__slide}
                onClick={() => onSelect(item)}
              >
                <img
                  src={`/trending/covers/${item.CoverImage}`}
                  alt={item.Title}
                  className={styles.homeTrending__img}
                />
              </SwiperSlide>
            ))
          : Array.from({ length: SLIDES_PER_VIEW }).map((_, index) => (
              <SwiperSlide key={index} className={styles.homeTrending__slide}>
                <div className={styles.homeTrending__img}></div>
              </SwiperSlide>
            ))}
      </Swiper>
    </section>
  );
};

export default HomeTrending;
