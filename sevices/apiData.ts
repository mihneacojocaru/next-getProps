import axios from "axios";

export default class ApiData {
  endpoint = "https://rickandmortyapi.com/api/character";
  endpointAribender =
    "https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=500";
  getData = async () => {
    try {
      const resp = await axios.get(this.endpoint);
      return resp.data.results;
      // const data = await resp.json();
      // return data;
    } catch (error) {
      console.error(error);
    }
  };

  getDataAirbender = async () => {
    try {
      const resp = await axios.get(this.endpointAribender);
      return resp.data;
    } catch (error) {
      console.log(error);
    }
  };
}
