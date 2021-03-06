// import axiosUser from "./axios";
import axios from "axios"
const getListUserDegree = (params = {}) => {
    return axios.get("http://localhost:3000/user-degrees",params)
}
const deleteUserDegree = (id) => {
    return axios.delete(`http://localhost:3000/user-degrees/${id}`,)
}
const addUserDegree = (params) => {
    return axios.post("http://localhost:3000/user-degrees", params)
}
export {
    getListUserDegree,
    deleteUserDegree,
    addUserDegree
}