import styles from "./HomeTrending.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Mousewheel } from "swiper/modules";
import { useEffect, useState } from "react";

const MAX_DATA_LENGTH = 50;
const SLIDES_PER_VIEW = 7;
const LOC_STORE_HISTORY_KEY = "history";

const sortTrendingData = (data, locStoreWatchHistory) => {
  let sortedData = [];
  if (data) {
    const historyIds = locStoreWatchHistory
      ? JSON.parse(locStoreWatchHistory)
      : [];

    sortedData = [...data].sort((a, b) => {
      const aHistoryIdx = historyIds.indexOf(a.Id);
      const bHistoryIdx = historyIds.indexOf(b.Id);
      if (aHistoryIdx !== -1 && bHistoryIdx !== -1) {
        return aHistoryIdx - bHistoryIdx;
      }
      if (aHistoryIdx !== -1) return -1;
      if (bHistoryIdx !== -1) return 1;
      return new Date(b.Date) - new Date(a.Date);
    });
  } else {
    sortedData = [];
  }

  return sortedData;
};

const HomeTrending = ({ data, onSelect }) => {
  const locStoreWatchHistory = sessionStorage.getItem(LOC_STORE_HISTORY_KEY);
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    if (data.length) {
      const sortedTrendingData = sortTrendingData(data, locStoreWatchHistory);
      setSortedData(sortedTrendingData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const onClick = (item) => {
    onSelect(item);

    if (locStoreWatchHistory) {
      const parsedHistory = JSON.parse(locStoreWatchHistory);
      const updatedHistory = [
        item.Id,
        ...parsedHistory.filter((id) => id !== item.Id),
      ];
      sessionStorage.setItem(
        LOC_STORE_HISTORY_KEY,
        JSON.stringify(updatedHistory)
      );
    } else {
      sessionStorage.setItem(LOC_STORE_HISTORY_KEY, JSON.stringify([item.Id]));
    }
  };

  return (
    <section className={styles.homeTrending}>
      <h3 className={styles.homeTrending__title}>Trending New</h3>
      <Swiper
        spaceBetween={15}
        slidesPerView="8.3"
        loop={true}
        mousewheel={true}
        modules={[Mousewheel]}
        slidesOffsetAfter={SLIDES_PER_VIEW}
      >
        {sortedData.length
          ? sortedData.slice(0, MAX_DATA_LENGTH).map((item) => (
              <SwiperSlide
                key={item.Id}
                className={styles.homeTrending__slide}
                onClick={() => onClick(item)}
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
