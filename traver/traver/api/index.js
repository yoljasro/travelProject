import axios from "axios";

export const api = (url, method = 'get', data = {}, config = {}) => new Promise((resolve, rejected) => {
    if (method === 'get') {
        axios.get(url, config).then(
            (res) => {
                if (res.data.error) return rejected(res.data.error)
                resolve(res.data)
            },
            (err) => rejected(err.message)
        )
    } else if (method === 'post') {
        axios.post(url, data, config).then(
            (res) => {
                if (res.data.error) return rejected(res.data.error)
                resolve(res.data)
            },
            (err) => rejected(err.message)
        )
    }
})