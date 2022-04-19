import axios from 'axios';
import {
  ETHERSCAN_MAINNET_URL,
  ETHERSCAN_GOERLI_URL,
  ETHERSCAN_KOVAN_URL,
  ETHERSCAN_RINKBY_URL,
  ETHERSCAN_ROPSTEN_URL,
} from './constants';

const mainnet = axios.create({
  baseURL: ETHERSCAN_MAINNET_URL,
  timeout: 10000,
});

const goerli = axios.create({
  baseURL: ETHERSCAN_GOERLI_URL,
  timeout: 10000,
});

const rinkeby = axios.create({
  baseURL: ETHERSCAN_RINKBY_URL,
  timeout: 10000,
});

const kovan = axios.create({
  baseURL: ETHERSCAN_KOVAN_URL,
  timeout: 10000,
});

const ropsten = axios.create({
  baseURL: ETHERSCAN_ROPSTEN_URL,
  timeout: 10000,
});

export default {
  mainnet,
  goerli,
  rinkeby,
  kovan,
  ropsten,
};
