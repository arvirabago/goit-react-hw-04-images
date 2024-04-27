import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '40911756-f65b6d1dd8fe00ae3d3aa7e29',
    per_page: '12',
    image_type: 'photo',
    orientation: 'horizontal',
  },
});

export const getImages = async (query, page) => {
  const response = await instance(`?q=${query}&page=${page}`);
  const data = await response.data;
  console.log(data);
  return data;
};