import axios from "./api";
export const fetchData = (address: string) => {
  return axios
    .get(`${address}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.error(err.status));
};
