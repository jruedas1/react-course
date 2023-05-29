import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
     headers: {
        Authorization: 'Client-ID x9dkys-n_NniZX2ZkuCiRvWp04Om6pyZnPUpJ6l8k1Q'
     },
      params: {
        query: term
      }
  });
  return response.data.results;
};

export default searchImages;