import client from "./ServiceClient";

//https://jsonplaceholder.typicode.com/users

const fetchData = (params) => client.get(`/posts`, { ...params });

const fetchUsers = (params) => client.get(`/users`, { ...params });
const fetchCount = (params) => client.get(`/count`, { ...params });
export default {
  fetchData,
  fetchUsers,
  fetchCount,
};
