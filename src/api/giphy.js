import axios from 'axios';

const KEY = 'ldIU3wYEvQopU2WVPSbB0N2w5byGTWnB';

export default axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs',
  params: {
    limit: 12,
    api_key: KEY,
  },
});
