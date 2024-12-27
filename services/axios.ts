import axios from "axios"

export default function api() {
  const baseURL = "https://api-goerli.etherscan.io"


  return axios.create({
    baseURL
  })
}
