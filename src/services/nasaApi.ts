import axios from 'axios';

const NASA_API_KEY = 'DEMO_KEY'; // Replace with your NASA API key in production
const BASE_URL = 'https://api.nasa.gov';

export const nasaApi = {
  async getAPOD(count = 1) {
    const response = await axios.get(`${BASE_URL}/planetary/apod`, {
      params: {
        api_key: NASA_API_KEY,
        count
      }
    });
    return response.data;
  },

  async getMarsPhotos() {
    const response = await axios.get(`${BASE_URL}/mars-photos/api/v1/rovers/perseverance/latest_photos`, {
      params: {
        api_key: NASA_API_KEY
      }
    });
    return response.data.latest_photos;
  },

  async searchImages(query: string) {
    const response = await axios.get('https://images-api.nasa.gov/search', {
      params: {
        q: query,
        media_type: 'image'
      }
    });
    return response.data.collection.items;
  },

  async getVideos(query: string) {
    const response = await axios.get('https://images-api.nasa.gov/search', {
      params: {
        q: query,
        media_type: 'video'
      }
    });
    return response.data.collection.items;
  },

  async getTechTransfer() {
    const response = await axios.get(`${BASE_URL}/techtransfer/patent/?engine&api_key=${NASA_API_KEY}`);
    return response.data.results;
  },

  async getEarthImagery(lat: number, lon: number, date: string) {
    const response = await axios.get(`${BASE_URL}/planetary/earth/assets`, {
      params: {
        lat,
        lon,
        date,
        dim: 0.15,
        api_key: NASA_API_KEY
      }
    });
    return response.data;
  }
};