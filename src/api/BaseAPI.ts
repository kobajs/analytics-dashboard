import axios, { AxiosInstance } from 'axios'

export class BaseAPI {
  baseUrl: string
  token: string
  instance: AxiosInstance

  constructor() {
    const API_URL = process.env.REACT_APP_API_URL
    const API_TOKEN = process.env.REACT_APP_API_TOKEN

    if (!API_URL) {
      throw new Error('REACT_APP_API_URL environment is not defined!')
    }

    if (!API_TOKEN) {
      throw new Error('REACT_APP_API_TOKEN environment is not defined!')
    }

    this.baseUrl = API_URL as string
    this.token = API_TOKEN as string

    // Choose to decouple baseUrl and token so we can use in any HTTP client lib
    this.instance = axios.create({
      baseURL: this.baseUrl,
      headers: {
        'x-api-key': this.token,
      },
    })
  }
}
