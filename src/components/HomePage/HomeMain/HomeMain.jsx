import styles from "./HomeMain.module.scss";
import HomeMovieInfo from "./HomeMovieInfo/HomeMovieInfo";
import HomeTrending from "./HomeTrending/HomeTrending";
import HomeError from "../HomeError/HomeError";
import { useEffect, useState } from "react";

const VIDEO_PLAY_TIMEOUT_MS = 2000;

const HomeMain = () => {
  const [featuredData, setFeaturedData] = useState(null);
  const [trendingNowData, setTrendingNowData] = useState([]);
  const [errored, setErrored] = useState(false);
  const [coverVideoUrl, setCoverVideoUrl] = useState("");

  const fetchData = async () => {
    try {
      const res = await fetch("/data.json");
      const data = await res.json();
      if (data.Featured) {
        setFeaturedData(data.Featured);
      }
      if (data.TendingNow) {
        setTrendingNowData(data.TendingNow);
      }
    } catch (error) {
      setErrored(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    let timeout = null;
    if (featuredData?.VideoUrl) {
      timeout = setTimeout(() => {
        setCoverVideoUrl(featuredData.VideoUrl);
      }, VIDEO_PLAY_TIMEOUT_MS);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [featuredData]);

  const onSelect = (data) => {
    setFeaturedData(data);
  };

  return (
    <>
      <section className={styles.homeMain}>
        <div className={styles.homeMain__bg}>
          {coverVideoUrl ? (
            <video
              src={coverVideoUrl}
              muted
              autoPlay
              loop
              className={styles.homeMain__bgVideo}
            ></video>
          ) : (
            <>
              {featuredData?.CoverImage && !featuredData.VideoUrl && (
                <img
                  src={`/trending/covers/${featuredData.CoverImage}`}
                  alt={featuredData.Title}
                  className={styles.homeMain__bgImg}
                />
              )}
            </>
          )}
        </div>
        {!errored ? (
          <>
            <HomeMovieInfo featuredData={featuredData} />
            <HomeTrending data={trendingNowData} onSelect={onSelect} />
          </>
        ) : (
          <HomeError />
        )}
      </section>
    </>
  );
};

export default HomeMain;
