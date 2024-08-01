import { createContext, useContext, useEffect, useState } from 'react'
import { Transaction } from '../interface/Transaction'
import { TransactionsProviderProps } from '../interface/TransactionsProviderProps'
import { TransactionInput } from '../interface/TransactionInput'
import { TransactionContextData } from '../interface/TransactionsContextData'
import { api } from '../Services/api'

const TransactionContext = createContext<TransactionContextData>(
  {} as TransactionContextData,
)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

 async function createTransaction(transactionInput: TransactionInput) {
  const response =  await api.post('/transactions', {
    ...transactionInput,
    createdAt: new Date(),
  })
  const { transaction } = response.data

  setTransactions([
    ...transactions,
    transaction
  ])
  }

  return (
    <TransactionContext.Provider value={{transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTransactions(){
  const context = useContext(TransactionContext)

  return context
}