import axios from "axios";

const instance = axios.create({
    baseURL: "https://react-burger-app-84dcd.firebaseio.com",
})

export default instance;