import axios from "axios";

const ENDPOINT_PATH = "http://127.0.0.1:8000/";
const tokn="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6Implc3N5QGdtYWlsLmNvbSIsImV4cCI6MTYyMzUzOTQ2OSwiZW1haWwiOiJqZXNzeUBnbWFpbC5jb20ifQ.7N_CZK7YC6uaiB-GWNRs4ZQFcOz4vz6IqVAeCDloSlM";

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

  },
  userCreate(name, last_name, email, password, is_staff)
  {
    const newUser = {
      name: name,
      last_name: last_name,
      email: email,
      password: password,
      is_staff: is_staff
    };


    return axios.post(ENDPOINT_PATH + "api/users/create", newUser);
  },

  createCompany(tokn, company_id, name)
  {
    const headers = {
        'Authorization': tokn
    };

    const newCompany = {
      company_id: company_id,
      name: name
    };


    return axios.post(ENDPOINT_PATH + "api/companies", newCompany, {headers: headers});
  }, 

  listCompanies(tokn)
  {
    const headers = {
      'headers':{
        'Authorization': tokn
      }
    }

    return axios.get(ENDPOINT_PATH + "api/companies", headers);

  },

  getCompany(tokn, company_id)
  {
    const headers = {
      'headers':{
        'Authorization': tokn
      }
    }

    return axios.get(ENDPOINT_PATH + "api/companies/"+company_id, headers);

  },

  updateCompany(tokn, company_id)
  {
    const headers = {
      'Authorization': tokn
    }

    return axios.patch(ENDPOINT_PATH + "api/companies/"+company_id, {headers:headers});

  },

  deleteCompany(tokn, company_id)
  {
    const headers = {
      'Authorization': tokn
    }

    return axios.delete(ENDPOINT_PATH + "api/companies/"+company_id, headers, company_id); //Revisar en https://stackoverflow.com/questions/51069552/axios-delete-request-with-body-and-headers
  },

  listItems(tokn)
  {
    const headers = {
      'headers':{
        'Authorization': tokn
      }
    }

    return axios.get(ENDPOINT_PATH + "api/items", headers);
  },

  createItem(tokn, item_id, description, udVta, access_key, standar_cost, company)
  {
    const headers = {
      'headers':{
        'Authorization': tokn
      }
    };

    const newItem={
      item_id:item_id,
      description:description,
      udVta:udVta,
      access_key:access_key,
      standar_cost:standar_cost,
      company:company
    };

    return axios.post(ENDPOINT_PATH + "api/items", newItem, {headers: headers});

  },

  getItem(tokn, item_id)
  {
    const headers = {
      'headers':{
        'Authorization': tokn
      }
    }

    return axios.get(ENDPOINT_PATH + "api/items/"+item_id, headers);
  },

  updateItem(tokn, item_id)
  {
    const headers = {
      'Authorization': tokn
    }

    return axios.patch(ENDPOINT_PATH + "api/items/"+item_id, {headers:headers});

  },

  deleteItem(tokn, item_id)
  {
    const headers = {
      'Authorization': tokn
    }

    return axios.delete(ENDPOINT_PATH + "api/items/"+item_id, headers); //Revisar en https://stackoverflow.com/questions/51069552/axios-delete-request-with-body-and-headers
  },

  listAgents(tokn)
  {
    const headers = {
      'headers':{
        'Authorization': tokn
      }
    }

    return axios.get(ENDPOINT_PATH + "api/clients/agents", headers);
  },

  listBalance(tokn)
  {
    const headers = {
      'headers':{
        'Authorization': tokn
      }
    }

    return axios.get(ENDPOINT_PATH + "api/clients/balance", headers);
  },

  getAgent(tokn, representant)
  {
    const headers = {
      'headers':{
        'Authorization': tokn
      }
    }

    return axios.get(ENDPOINT_PATH + "api/clients/agents/"+representant, headers);
  },

  getBalance(tokn, order_balance)
  {
    const headers = {
      'headers':{
        'Authorization': tokn
      }
    }

    return axios.get(ENDPOINT_PATH + "api/clients/balance/"+order_balance, headers);
  },

  deleteAgent(tokn, representant)
  {
    const headers = {
      'Authorization': tokn
    }

    return axios.delete(ENDPOINT_PATH + "api/clients/agents/"+representant, headers); //Revisar en https://stackoverflow.com/questions/51069552/axios-delete-request-with-body-and-headers
  },

  deleteBalance(tokn, order_balance)
  {
    const headers = {
      'Authorization': tokn
    }

    return axios.delete(ENDPOINT_PATH + "api/clients/balance/"+order_balance, headers); //Revisar en https://stackoverflow.com/questions/51069552/axios-delete-request-with-body-and-headers
  },

  createAgent(tokn, representant, company)
  {
    const headers = {
      'headers':{
        'Authorization': tokn
      }
    };

    const newAgent={
      representant:representant,
      company:company
    };

    return axios.post(ENDPOINT_PATH + "api/clients/agents", newAgent, {headers: headers});

  },

  createBalance(tokn, order_balance, facture_balance, company)
  {
    const headers = {
      'headers':{
        'Authorization': tokn
      }
    };

    const newBalance={
      order_balance:order_balance,
      facture_balance:facture_balance,
      company:company
    };

    return axios.post(ENDPOINT_PATH + "api/clients/balance", newBalance, {headers: headers});
  },

  updateAgents(tokn, representant)
  {
    const headers = {
      'Authorization': tokn
    }
    const newRepresentant ={
      representant:representant
    }
    return axios.patch(ENDPOINT_PATH + "api/clients/agents/"+representant, newRepresentant, {headers:headers});

  },

  updateBalance(tokn, order_balance, facture_balance)
  {
    const headers = {
      'Authorization': tokn
    }
    const newBalance ={
      order_balance:order_balance,
      facture_balance:facture_balance
    }
    return axios.patch(ENDPOINT_PATH + "api/clients/balance/"+order_balance, newBalance, {headers:headers});

  }
    };

  
