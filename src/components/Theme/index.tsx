import { ReactNode } from 'react'
import Header from '../Header'
import * as C from './styles'
import SidebarItem from '../SidebarItem'
import { useForm } from '../../pages/contexts/FormContext'

type Props = {
    children: ReactNode
}

const Theme = ({ children }: Props) => {
    const { state } = useForm()

    return (
        <C.Container>
            <C.Area>
                <Header />

                <C.Steps>
                    <C.Sidebar>
                        <SidebarItem
                            title='Pessoal'
                            description='Se identifique'
                            path='/'
                            active={state.currentStep === 1}
                        />

                        <SidebarItem
                            title='Profissional'
                            description='Seu nível'
                            path='/step2'
                            active={state.currentStep === 2}
                        />

                        <SidebarItem
                            title='Contatos'
                            description='Como te achar'
                            path='/step3'
                            active={state.currentStep === 3}
                        />
                    </C.Sidebar>
                    <C.Page>
                        {children}
                    </C.Page>
                </C.Steps>
            </C.Area>
        </C.Container>
    )
}

export default Theme