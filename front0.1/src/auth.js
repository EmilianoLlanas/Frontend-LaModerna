import axios from "axios";

const ENDPOINT_PATH = "http://127.0.0.1:8000/";

export default {
  login(email, password) {
    const user = {
      email:email,
      password:password };
    return axios.post(ENDPOINT_PATH + "api/auth", user);
  },
  authToken(tokn)
  {
    const headers = {
      'headers':{
        'Authorization': tokn
      }
    }

    return axios.get(ENDPOINT_PATH + "api/me", headers);

  },//method, connects clients/agents

  getAgents(tokn){
    const headers = {
      'headers':{
        'Authorization': tokn
      }
    }

    return axios.get(ENDPOINT_PATH+"api/clients/agents",headers)

  },
  //method, connects Companies
  getCompanies(tokn){
    const headers = {
      'headers':{
        'Authorization': tokn
      }
    }
    return axios.get(ENDPOINT_PATH+"api/companies",headers)

  },
  //method, connects Items
  getItems(tokn){
    const headers = {
      'headers':{
        'Authorization': tokn
      }
    }
    return axios.get(ENDPOINT_PATH+"api/items",headers)

  }

    };
