import React from 'react';
import { EtherscanProvider, EtherscanNetwork } from '@dazhboardio/core';
import GasPriceWidget from './src';

const GasPrice = () => (
  <div style={{ width: 15, height: 15, backgroundColor: 'black' }} />
);

/* <EtherscanProvider network={EtherscanNetwork.Mainnet} apiKey="">
<GasPriceWidget />
</EtherscanProvider> */
export default GasPrice;
