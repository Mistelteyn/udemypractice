import axios from "axios";

const KEY = "AIzaSyAd15p7OG3nvhSr7jTpwIKg10tMRVC5BVw";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet', 
      type: 'video',
      maxResults: 5,
      key: `${KEY}`
  }
})
