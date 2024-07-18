export const CHAIN_REGISTRY_BACKEND_ENDPOINTS = {
  // FIXME: setup a basic backend & URL for fetching & storing all chain infos
  BASE_URL: "https://",
  CHAIN_INFOS: "/chains"
} as const;

export const CHAIN_REGISTRY_GITHUB_API_ENDPOINTS = {
  BASE_URL: "https://api.github.com",
  CHAIN_INFOS: "/repos/oraichain/oraichain-sdk/contents/chains"
};