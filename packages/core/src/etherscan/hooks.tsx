import { useQuery, QueryOptions } from 'react-query';
import Etherscan from './axios';
import { useEtherscanContext } from './contexts';

type ModuleActionMap = {
  account: {
    balance: {
      address: string
      tag: string
    }
  }
  gastracker: {
    gasestimate: {
      gasprice: number
    }
  }
}

type UseEtherscanQueryParams<
  K extends keyof ModuleActionMap = keyof ModuleActionMap
> = {
  [P in K]: {
    module: P
    action: keyof ModuleActionMap[P]
  }
}[K]

const useEtherscanQuery = (
  params: UseEtherscanQueryParams,
  options: QueryOptions = {},
) => {
  const { module, action } = params;
  const { network, apiKey } = useEtherscanContext();
  const etherscan = Etherscan[network];

  return useQuery([module, action], () => {
    etherscan.get('/api', {
      params: {
        ...params,
        apiKey,
      },
    });
  }, { ...options });
};

export { useEtherscanQuery };
