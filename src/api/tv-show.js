import axios from "axios";
<<<<<<< HEAD
import { BASE_URL } from "../config";
=======
import { API_KEY, BASE_URL } from "../config";
>>>>>>> 6c400b503d77a4cad3d81b7bb7dd136389bad607

export class TVShowAPI {
  static async getPopular() {
    const response = await axios.get(`${BASE_URL}tv/popular`, {
      headers: {
<<<<<<< HEAD
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
=======
        Authorization: API_KEY,
>>>>>>> 6c400b503d77a4cad3d81b7bb7dd136389bad607
      },
    });
    return response.data.results;
  }

  static async getRecommendations(tvShowId) {
    const response = await axios.get(
      `${BASE_URL}tv/${tvShowId}/recommendations`,
      {
        headers: {
<<<<<<< HEAD
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
=======
          Authorization: API_KEY,
>>>>>>> 6c400b503d77a4cad3d81b7bb7dd136389bad607
        },
      }
    );
    return response.data.results;
  }

  static async fetchTvShowByTitle(title) {
    const response = await axios.get(`${BASE_URL}search/tv?query=${title}`, {
      headers: {
<<<<<<< HEAD
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
=======
        Authorization: API_KEY,
>>>>>>> 6c400b503d77a4cad3d81b7bb7dd136389bad607
      },
    });
    return response.data.results;
  }
}
