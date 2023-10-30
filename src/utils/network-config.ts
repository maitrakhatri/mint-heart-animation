/* eslint-disable @typescript-eslint/no-explicit-any */
import { ISupportedNetworks } from './config'
import { getNetworkId } from './getNetworkId'

export const networksConfig: ISupportedNetworks = {
  5: {
    name: 'Goerli',
    chainId: 5,
    networkId: '0x5',
    rpcUrl: `https://eth-goerli.alchemyapi.io/v2/${process.env.REACT_APP_ALCHEMY_API_KEY}`,
 },
  100: {
    name: 'Gnosis',
    chainId: 100,
    networkId: '0x64',
    gasless: true,
    rpcUrl:
      'https://solitary-lively-sea.xdai.discover.quiknode.pro/900c3255a0c683f1641118823610baefd7e1636b',
    networkMetadata: {
      chainId: '0x64',
      chainName: 'Gnosis Chain',
      nativeCurrency: {
        name: 'xDAI',
        symbol: 'xDAI',
        decimals: 18,
      },
      rpcUrls: [
        'https://rpc.gnosischain.com',
        'https://rpc.ankr.com/gnosis',
        'https://gnosischain-rpc.gateway.pokt.network',
        'https://gnosis-mainnet.public.blastapi.io',
        'wss://rpc.gnosischain.com/wss',
      ],
    },
  },
  11155111: {
    name: 'Sepolia',
    chainId: 11155111,
    networkId: '0xaa36a7',
    rpcUrl: `https://eth-sepolia.g.alchemy.com/v2/${process.env.REACT_APP_ALCHEMY_API_KEY}`,
  },
  534351: {
    name: 'Scroll Sepolia',
    chainId: 534351,
    networkId: '0x8274f',
    rpcUrl: 'https://sepolia-rpc.scroll.io',
  },
}

const networkId = getNetworkId(process.env.REACT_APP_DEFAULT_NETWORK as string)
export const defaultNetwork = networksConfig[networkId]
