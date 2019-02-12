import axios from 'axios'

export const get = (url, params) => params 
  ? axios.get(url, params) 
  : axios.get(url)
