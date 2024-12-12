import { Category } from "./caterory"

export type Money = {
  type: 'expense' | 'income',
  amount: number,
  category: Category
}
