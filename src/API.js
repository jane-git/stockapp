import axios from 'axios';

const api = axios.create({
    baseURL: "http://131.181.190.87:3000/stocks"

});

export const baseAPIs = {
    symbolAPI: () => api.get("/symbols"),
    quoteAPI: symbol => api.get(`/symbols/${symbol}`)
}