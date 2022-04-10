import axios from "axios";

const ajax = (url, data={}, method='GET') => {
    if (method === "GET") {
        let paramStr = ''
        Object.keys(data).forEach(key => {
            paramStr += key + '=' + data[key] + '&'
        })
        if (paramStr) {
            paramStr = paramStr.substring(0, paramStr.length)
        }
        return axios.get(url + '?' + paramStr)
    } else {
        return axios.post(url, data)
    }
}

export default ajax