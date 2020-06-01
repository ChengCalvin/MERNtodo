import axios from "axios";

const instance = axios.create({
  baseURL: "https://todolist-666a4.firebaseio.com/",
});

export default instance;
