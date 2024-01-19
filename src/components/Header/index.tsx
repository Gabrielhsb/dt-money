import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logoImage from '../../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog';
import { NewTransactionModal } from "../NewTrasactionModal";
export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImage} alt="" />
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton>Nova transação</NewTransactionButton>
                    </Dialog.Trigger>
                    <NewTransactionModal />
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
}