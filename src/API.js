import axios from "axios";

const api = axios.create({
  baseURL: "http://131.181.190.87:3000/stocks",
});

export const baseAPIs = {
  symbolAPI: () => api.get("/symbols"),
  quoteAPI: (symbol) => api.get(`/${symbol}`),
  priceHistoryAPI: (symbol, sDate, eDate) =>
    api.get(`/authed/${symbol}?from=${sDate}&to=${eDate}`, {
      headers: { Authorization: `Bearer ${window.localStorage.jwtToken}` },
    }),
};
