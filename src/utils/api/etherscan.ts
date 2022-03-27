import axios from 'axios'
import qs from 'qs'
import { AxiosResponse } from 'axios'

const EtherscanAxios = axios.create({
  baseURL: process.env.REACT_APP_ETHERSCAN_API_URL,
  timeout: 10000,
  paramsSerializer: (params: any) => qs.stringify(params, { arrayFormat: 'brackets' }),
})


const getWalletTransactions = (address: string) =>
  EtherscanAxios.get('/api', {
    params: {
      module: 'account',
      action: 'txlist',
      address,
      startblock: 0,
      endblock: 99999999,
      sort: 'asc',
      apikey: process.env.REACT_APP_ETHERSCAN_API_KEY,
    },
  })

// SafeGasPrice and ProposeGasPrice returned in Gwei
const getGasOracle = (): Promise<
  AxiosResponse<{
    status: '1'
    message: 'OK'
    result: {
      LastBlock: string
      SafeGasPrice: string
      ProposeGasPrice: string
      FastGasPrice: string
      suggestBaseFee: string
      gasUsedRatio: string
    }
  }>
> =>
  EtherscanAxios.get('/api', {
    params: {
      module: 'gastracker',
      action: 'gasoracle',
      apikey: process.env.REACT_APP_ETHERSCAN_API_KEY,
    },
  })

const getGasEstimateTime = (gasPriceInGwei: number) =>
  EtherscanAxios.get('/api', {
    params: {
      module: 'gastracker',
      action: 'gasestimate',
      gasprice: gasPriceInGwei * 10 ** 9,
      apikey: process.env.REACT_APP_ETHERSCAN_API_KEY,
    },
  })


export { getWalletTransactions, getGasOracle, getGasEstimateTime }
