import axios from "axios";

const baseUrl = "https://igl-server.herokuapp.com/api/users";

const getUser = async (username, config) => {
  try {
    const response = await axios.get(`${baseUrl}/${username}`, config);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

const followUser = async (username, config) => {
  try {
    const response = await axios.post(
      `${baseUrl}/${username}/follow`,
      {},
      config
    );

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

const getUserHomePosts = async (username, config) => {
  try {
    const response = await axios.get(`${baseUrl}/${username}/home`, config);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

const getUserSuggestions = async (username, config) => {
  try {
    const response = await axios.get(
      `${baseUrl}/${username}/suggestions`,
      config
    );

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export default {
  getUser,
  followUser,
  getUserHomePosts,
  getUserSuggestions,
};
