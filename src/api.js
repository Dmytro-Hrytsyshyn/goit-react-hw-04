import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/search/photos";
const CLIENT_ID = "oy3O76jK3fZVKx5w7V5H6wYC5qDQ4exG1RaF-9t3ra0";

const fetchPhotos = async (userQuery, currentPage) => {
  const axiosOptions = {
    params: {
      client_id: CLIENT_ID,
      query: userQuery,
      page: currentPage,
      per_page: 10,
    },
  };

  try {
    return await axios.get("/", axiosOptions);
  } catch (error) {
    return error;
  }
};

export default fetchPhotos;
