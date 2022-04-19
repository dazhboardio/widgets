import React, { useMemo, useContext, createContext } from 'react';
import { EtherscanNetwork } from './types';

type EtherscanContextType = {
  apiKey: string;
  network: EtherscanNetwork
}

const EtherscanContext = createContext<EtherscanContextType>({
  apiKey: '',
  network: EtherscanNetwork.Mainnet,
});

type EtherscanProviderProps = EtherscanContextType

const EtherscanProvider: React.FC<EtherscanProviderProps> = ({
  apiKey,
  network,
  children,
}) => {
  const values = useMemo(() => ({ apiKey, network }), [apiKey, network]);
  return (
    <EtherscanContext.Provider value={values}>
      {children}
    </EtherscanContext.Provider>
  );
};

const useEtherscanContext = () => useContext(EtherscanContext);

export { EtherscanProvider, useEtherscanContext };
