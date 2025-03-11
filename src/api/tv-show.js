import axios from "axios";
import { BASE_URL } from "../config";

export class TVShowAPI {
  static async getPopular() {
    const response = await axios.get(`${BASE_URL}tv/popular`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
    });
    return response.data.results;
  }

  static async getRecommendations(tvShowId) {
    const response = await axios.get(
      `${BASE_URL}tv/${tvShowId}/recommendations`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
      }
    );
    return response.data.results;
  }

  static async fetchTvShowByTitle(title) {
    const response = await axios.get(`${BASE_URL}search/tv?query=${title}`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
    });
    return response.data.results;
  }
}
