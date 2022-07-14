import axios from "axios";

const getJobs = async () => {
  const baseURL = process.env.VUE_APP_API_URL;
  const response = await axios.get(`${baseURL}/jobs`);
  return response.data;
};

export default getJobs;
