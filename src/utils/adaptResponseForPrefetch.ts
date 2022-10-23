type NSwagClass = {
  toJSON?: (arg: unknown) => unknown;
};

export const adaptResponseForPrefetch = <T extends NSwagClass | NSwagClass[]>(response: T) => {
  return JSON.parse(JSON.stringify(response));
};
