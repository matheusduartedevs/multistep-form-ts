import { ReactNode } from 'react'
import Header from '../Header'
import * as C from './styles'
import SidebarItem from '../SidebarItem'

type Props = {
    children: ReactNode
}

const Theme = ({ children }: Props) => {
    return (
        <C.Container>
            <C.Area>
                <Header />

                <C.Steps>
                    <SidebarItem
                        title='Pessoal'
                        description='Se identifique'
                        icon='profile'
                        path='/'
                    />

                    <SidebarItem
                        title='Profissional'
                        description='Seu nível'
                        icon='book'
                        path='/step2'
                    />

                    <SidebarItem
                        title='Contatos'
                        description='Como te achar'
                        icon='mail'
                        path='/step3'
                    />
                    <C.Page>
                        {children}
                    </C.Page>
                </C.Steps>
            </C.Area>
        </C.Container>
    )
}

export default Theme