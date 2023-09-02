export function convertParamsToQueryString(params: any) {
  return Object.keys(params)
    .filter((key) => params[key] != null && params[key] !== '')
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
    )
    .join('&');
}
