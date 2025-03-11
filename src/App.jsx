import { useCallback, useEffect, useState } from "react";
import { TVShowAPI } from "./api/tv-show";
import logo from "./assets/images/logo.png";
import { Logo } from "./components/Logo/Logo";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { TVShowDetail } from "./components/TVShowDetail/TVShowDetail";
import { TVShowList } from "./components/TVShowList/TVShowList";
import { BACKDROP_BASE_URL } from "./config";
import "./global.css";
import s from "./style.module.css";

export function App() {
  const [currentTVShow, setCurrentTVShow] = useState();
  const [recommendationList, setRecommendationList] = useState([]);

  async function fetchPopulars() {
    try {
      const populars = await TVShowAPI.getPopular();
      if (populars.length > 0) {
        setCurrentTVShow(populars[0]);
      }
    } catch (error) {
      alert(
        "Erreur durant la recherche de series populaires : " + error.message
      );
    }
  }

  const fetchRecommendations = useCallback(
    async (tvShowId) => {
      try {
        const recommendations = await TVShowAPI.getRecommendations(tvShowId);
        if (currentTVShow) {
          setRecommendationList(recommendations.slice(0, 10));
        }
      } catch (error) {
        alert(
          "Erreur durant la recherche de series populaires : " + error.message
        );
      }
    },
    [currentTVShow]
  );

  function setCurrentTVShowFromListItem(tvShow) {
    setCurrentTVShow(tvShow);
  }

  async function searchTVShow(tvShowName) {
    try {
      const searchResponse = await TVShowAPI.fetchTvShowByTitle(tvShowName);
      if (searchResponse.length > 0) {
        setCurrentTVShow(searchResponse[0]);
      }
    } catch (error) {
      alert(
        "Erreur durant la recherche de series populaires : " + error.message
      );
    }
  }

  useEffect(() => {
    fetchPopulars();
  }, []);

  useEffect(() => {
    if (currentTVShow) {
      fetchRecommendations(currentTVShow.id);
    }
  }, [currentTVShow, fetchRecommendations]);

  return (
    <div
      className={s.main_container}
      style={{
        backgroundImage: currentTVShow
          ? `linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}")`
          : "black",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundColor: currentTVShow ? "black" : "black",
      }}
    >
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <Logo
              image={logo}
              title="Whatowatch"
              subtitle="Find your favorite TV Shows"
            />
          </div>
          <div className="col-sm-12 col-md-4">
            <SearchBar onSubmit={searchTVShow} />
          </div>
        </div>
      </div>
      <div className={s.tv_show_detail}>
        {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
      </div>
      <div className={s.recommendations}>
        {currentTVShow && (
          <TVShowList
            tvShowList={recommendationList}
            onclick={setCurrentTVShowFromListItem}
          />
        )}
      </div>
    </div>
  );
}
