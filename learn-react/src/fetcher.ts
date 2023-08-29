import axios from "axios";

export default function feather(url:string){
    return axios.get(url).then(res=>res.data)
}