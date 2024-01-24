import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import * as z from 'zod'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const newTransactionFormSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(['income', 'outcome'])
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
    const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm<NewTransactionFormInputs>({
        resolver: zodResolver(newTransactionFormSchema),
        defaultValues: {
            type: 'income'

        }
    })

    async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
       console.log(data)
        reset()
    }
    return (
        <Dialog.Portal >
            <Overlay>
                <Content>
                    <Dialog.Title>Nova transação</Dialog.Title>
                    <CloseButton > <X size={24} /> </CloseButton>
                    <form action="" onSubmit={handleSubmit(handleCreateNewTransaction)}>
                        <input type="text" placeholder="Descrição" required {...register('description')}/>
                        <input type="number" placeholder="Preço" required {...register('price', {valueAsNumber: true})}/>
                        <input type="number" placeholder="Categoria" required {...register('category')}/>

                        <TransactionType>
                            <TransactionTypeButton variant="income" value="income">
                                <ArrowCircleUp size={24} />
                                Entrada
                            </TransactionTypeButton>
                            <TransactionTypeButton variant="outcome" value="outcome">
                                <ArrowCircleDown size={24} />
                                Saida
                            </TransactionTypeButton>
                        </TransactionType>
                        <button type="submit" disabled={isSubmitting}>
                            Cadastrar
                        </button>
                    </form>
                    
                </Content>
            </Overlay>
        </Dialog.Portal>
    )
}