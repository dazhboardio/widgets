 
import axios from 'axios'
import qs from 'qs'

const CrytoCompareAxios = axios.create({
  baseURL: process.env.REACT_APP_CRYPTO_COMPARE_API_URL,
  timeout: 10000,
  paramsSerializer: (params: any) => qs.stringify(params, { arrayFormat: 'brackets' }),
})

const getETHUSDPrice = () =>
  CrytoCompareAxios.get('/data/price', {
    params: {
      fsym: 'ETH',
      tsyms: 'USD',
    },
  })


  export { getETHUSDPrice }