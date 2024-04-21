export const objectify = (target: any) => {
  return JSON.parse(JSON.stringify(target))
}
