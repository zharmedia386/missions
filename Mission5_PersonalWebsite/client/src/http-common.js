import axios from "axios";
import { store } from './store'

const token = store.getters.getTokens
// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6InRvbTMiLCJyb2xlcyI6WzIwMDEsMTk4NCw1MTUwXX0sImlhdCI6MTY2NzAxMjE4NCwiZXhwIjoxNjY3MDEyNzg0fQ.jdYyTiblXSqIXriX636xSFwiVjNmcH9d1izdJBK4Jw4"
console.log(token);

const baseUrl = "http://localhost:3500/";
const studentData = axios.create({
  baseURL: baseUrl,
  headers: {
    "Authorization": 'Bearer ' + token,
    "x-access-token": token ,
    "Content-type": "application/json"
  },
});

export default studentData;