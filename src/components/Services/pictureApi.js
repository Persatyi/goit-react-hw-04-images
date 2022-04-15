import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

class ApiService {
  #API_KEY = '25733485-485cb9dd944de62854e3a0445';
  page = 1;
  searchQuery = '';

  async fetchPicturesBySearchQuery(query) {
    try {
      const response = await axios.get(
        `?image_type=photo&orientation=horizontal&per_page=12&q=${query}&page=${
          this.page
        }&key=${this.#API_KEY}`
      );
      return response.data.hits.map(
        ({ id, webformatURL, largeImageURL, tags }) => ({
          id,
          webformatURL,
          largeImageURL,
          tags,
        })
      );
    } catch (error) {
      console.log(error);
    }
  }
}

const api = new ApiService();

export default api;
