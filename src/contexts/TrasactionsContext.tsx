import { createContext, useEffect, useState } from "react";


interface Transaction {
    id: number
    description: string
    type: 'income' | 'outcome'
    price: number
    category: string
    createdAt: string
}

interface TransactionsContextType {
    transactions: Transaction[]
}

export const TransactionsContext = createContext({} as TransactionsContextType)

interface TransactionProviderProps {
    children: React.ReactNode
}
export function TransactionProvider({ children }: TransactionProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])
    async function fetchTransactions() {
        const response = await fetch('http://localhost:3333/transactions')
        const data = await response.json();
        console.log(data);
        setTransactions(data)
    }

    useEffect(() => {
        fetchTransactions()
    }, [])
    
    return (
        <TransactionsContext.Provider value={{ transactions }}>
            {children}
        </TransactionsContext.Provider>
    )
}