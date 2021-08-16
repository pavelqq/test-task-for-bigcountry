import axios from "axios";

const baseUrl = "//bigcountry-task.vercel.app/";

export const getCommentsRequest = () => {
    return axios.get(baseUrl + 'comments.json')
}