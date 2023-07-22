import axios from "axios"
const tSTTCdccmbxhvin = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
