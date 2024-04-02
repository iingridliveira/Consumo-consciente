import axios from "axios";

const blogFetch =  axios.create({
    baseURL: "https://consumo-consciente-3.onrender.com",
    headers:{
        "Content-type":"application/json"
    }
});
export default blogFetch