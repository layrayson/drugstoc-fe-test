export function constructQueryFromParams(
  params: {
    [key: string]: any;
  },
  options?: { initialize?: boolean }
): string {
  const { initialize = true } = options ?? {};
  const queryParams: string[] = [];

  for (const key in params) {
    if (params.hasOwnProperty(key) && params[key] !== undefined) {
      queryParams.push(`${key}=${encodeURIComponent(params[key])}`);
    }
  }

  return `${!initialize ? "" : "?"}${queryParams.join("&")}`;
}
