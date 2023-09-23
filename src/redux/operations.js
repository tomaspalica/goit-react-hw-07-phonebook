import axios from "axios";
axios.defaults.baseURL = 'https://650c248747af3fd22f67208c.mockapi.io'

const fetchTasks = () => async dispatch => {
    try {
      const response = await axios.get("/contacts");
    } catch (e) {}
  };