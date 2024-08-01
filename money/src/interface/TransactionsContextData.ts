import { Transaction } from "./Transaction";
import { TransactionInput } from "./TransactionInput";

export interface TransactionContextData{
  transactions: Transaction[];
  createTransaction: ( transaction: TransactionInput) => Promise<void>
}