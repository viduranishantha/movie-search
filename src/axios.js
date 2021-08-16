import axios from "axios";

//bse url to make request to the movie api
const instance = axios.create({
    baseURL: "http://www.omdbapi.com/",
});

export default instance;