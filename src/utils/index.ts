export const flattenRoutes = (array: any) => array.reduce((res: any, { sub = [], ...rest }) => res.concat(rest).concat(flattenRoutes(sub)), []);

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
