export function roundNumber(num: number, isInteger?: boolean): number | string {
  return isInteger ? Math.round(num) : num.toFixed(2)
}
