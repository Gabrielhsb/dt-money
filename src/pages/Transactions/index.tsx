import { Header } from "../../components/Header";
import { Summary } from "../../components/summary";
import { SearchForm } from "./components/SearchForm";
import { PrinceHighlight, TransactionContainer, TransactionTable } from "./styles";


export function Transactions() {

    return (
        <div>
            <Header/>
            <Summary/>
            
            <TransactionContainer>
            <SearchForm/>
            <TransactionTable>
                <tbody>
                    <tr>
                        <td width="50%">Desenvolvimento do site</td>
                        <td> <PrinceHighlight variant="income">R$ 12.000,00</PrinceHighlight></td>
                        <td>Venda</td>
                        <td>20/02/2022</td>
                    </tr>
                    <tr>
                        <td width="50%">Hamburguer</td>
                        <td><PrinceHighlight variant="outcome"> - R$59,00 </PrinceHighlight></td>
                        <td>Alimentação</td>
                        <td>20/02/2022</td>
                    </tr>
                    <tr>
                        <td width="50%">Desenvolvimento do site</td>
                        <td>R$ 12.000,00</td>
                        <td>Venda</td>
                        <td>20/02/2022</td>

                    </tr>
                </tbody>
            </TransactionTable>
            </TransactionContainer>
        </div>
    )
}