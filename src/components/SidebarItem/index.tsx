import { Link } from 'react-router-dom'
import * as C from './styles'

type Props = {
    title: string
    description: string
    path: string
    active: boolean
}

const SidebarItem = ({ title, description, path, active }: Props) => {
    return (
        <C.Container active={active}>
            <Link to={path}>
                <C.Info>
                    <C.Title>{title}</C.Title>
                    <C.Description>{description}</C.Description>
                </C.Info>
                <C.Point active={active}></C.Point>
            </Link>
        </C.Container>
    )
}

export default SidebarItem