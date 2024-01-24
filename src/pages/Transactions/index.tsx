
import { useContext } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/summary";
import { TransactionsContext } from "../../contexts/TrasactionsContext";
import { SearchForm } from "./components/SearchForm";
import { PrinceHighlight, TransactionContainer, TransactionTable } from "./styles";
import { dateFormatter, priceFormatter } from "../../utils/formatter";

export function Transactions() {
    const { transactions } = useContext(TransactionsContext)
    return (
        <div>
            <Header/>
            <Summary/>
            
            <TransactionContainer>
            <SearchForm/>
            <TransactionTable>
                <tbody>
                    {transactions.map(transaction => {
                        return (
                            <tr key={transaction.id}>
                                <td width="50%">{transaction.description}</td>
                                <td>
                                    <PrinceHighlight variant={transaction.type}>
                                        {transaction.type === 'outcome' && '- '}
                                        {priceFormatter.format(transaction.price)}
                                    </PrinceHighlight>
                                </td>
                                <td>{transaction.category}</td>
                                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </TransactionTable>
            </TransactionContainer>
        </div>
    )
}