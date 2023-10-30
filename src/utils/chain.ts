import { Chain, configureChains } from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'
import { networksConfig } from './network-config'

export const sepolia: Chain = {
  id: 11155111,
  name: 'Sepolia',
  network: 'sepolia',
  nativeCurrency: {
    name: 'ETH',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: [`${networksConfig[11155111].rpcUrl}`],
    },
    public: {
      http: ['https://endpoints.omniatech.io/v1/eth/sepolia/public	'],
    },
  },
  blockExplorers: {
    default: {
      name: 'etherscan',
      url: 'https://sepolia.etherscan.io',
    },
  },
}
export const gnosis: Chain = {
  id: 100,
  name: 'Gnosis Chain',
  network: 'gnosis',
  nativeCurrency: {
    name: 'xDAI',
    symbol: 'xDAI',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: [`${networksConfig[100].rpcUrl}`],
    },
    public: {
      http: ['https://gnosis.blockpi.network/v1/rpc/public'],
    },
  },
  blockExplorers: {
    etherscan: {
      name: 'Gnosisscan',
      url: 'https://gnosisscan.io',
    },
    default: {
      name: 'Gnosisscan',
      url: 'https://gnosisscan.io',
    },
  },
}

export const { chains, provider } = configureChains(
  [gnosis, sepolia],
  [
    alchemyProvider({
      apiKey: process.env.REACT_APP_ALCHEMY_API_KEY as string,
      priority: 0,
    }),
    jsonRpcProvider({
      rpc: (chain) => {
        if (networksConfig[chain.id]) {
          return {
            http: networksConfig[chain.id].rpcUrl,
          }
        } else {
          return null
        }
      },
    }),
  ]
)
