import React from 'react';
import { EtherscanProvider, EtherscanNetwork } from '@dazhboardio/core';
import GasPriceWidget from './src';

const GasPrice = () => (
  <EtherscanProvider network={EtherscanNetwork.Mainnet} apiKey="">
    <GasPriceWidget />
  </EtherscanProvider>
);

export default GasPrice;
