import axios from "axios";

const ENDPOINT_PATH = "http://127.0.0.1:8000/";

export default {
  login(email, password) {
    const user = {
      email:email,
      password:password };
    return axios.post(ENDPOINT_PATH + "api/auth", user);
  }
    };
