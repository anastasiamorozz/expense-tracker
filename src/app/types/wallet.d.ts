import { Money } from "./money"

export type Wallet = {
  expenses: Money[],
  incomes: Money[]
}
