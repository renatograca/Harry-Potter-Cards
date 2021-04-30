import axios from 'axios';

const ApiHarry = axios.create({
  baseURL: 'http://hp-api.herokuapp.com/api/characters'
})

export default ApiHarry;