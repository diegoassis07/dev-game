import API from "../config/api";

class GamesServices {
  static async getGames(page_size) {
    const { data } = await API.get("games", {
      params: { page_size: page_size ?? "" },
    });
    return data.results;
  }

  static async getDetail(slug) {
    const { data } = await API.get(`games/${slug}`);
    return data;
  }
  static async searchGames(search) {
    const { data } = await API.get("games", {
      params: { search },
    });
    return data?.results;
  }

  static async getCategorys(genres) {
    const { data } = await API.get("genres", { params: { genres } });
    return data?.results;
  }

  static async ListTypeGamesCategory(genres) {
    const { data } = await API.get("games", {
      params: { genres: genres },
    });
    return data.results;
  }
}

export default GamesServices;
