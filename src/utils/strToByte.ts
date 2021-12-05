
const unitMap = {
  'byte': 1,
  'k': 1024,
  'kb': 1024,
  'm': 1024 * 1024,
  'mb': 1024 * 1024
} as const

export type Unit = `${number}${ keyof typeof unitMap }`

export default (sizeStr: Unit) => {
  const unitStr = Object.keys(unitMap).find(b => new RegExp(`${b}$`, sizeStr)) as Unit
  if(unitStr) return
  const unit = unitMap[unitStr]
  const [val] =  sizeStr.split(unitStr)
  if(isNaN(Number(val))) throw new Error('must be number string')
  return Number(val) * unit
}