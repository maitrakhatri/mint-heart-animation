export const getNetworkId = (chain: string): number => {
  const network = chain?.toLowerCase()
  if (network === 'goerli') {
    return 5
  } else if (network === 'sepolia') {
    return 11155111
  } else if (network === 'gnosis') {
    return 100
  } else if (network === 'ethereum') {
    return 1
  } else if (network === 'polygon') {
    return 137
  } else if (network === 'chiado') {
    return 10200
  } else if (network === 'aurora') {
    return 1313161554
  } else if (network === 'scroll sepolia') {
    return 534351
  }
  return 5
}
