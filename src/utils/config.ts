export interface INetwork {
  name: string
  chainId: number
  forwarder?: string
  registry?: string
  autotask?: string
  rpcUrl: string
  logo?: any
  gasless?: boolean
  networkId: string
  networkMetadata?: any
  memberTokenAddress?: string
  paymasterAddress?: string
}

export interface ISupportedNetworks {
  [key: number]: INetwork
}
