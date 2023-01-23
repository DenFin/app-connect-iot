import { integer } from 'vscode-languageserver-types'

export function totalItemsOfArray(itemsArray: any, objKey: string) {
  return itemsArray.reduce((total: integer, obj: any) => obj[objKey] + total,0)
}
