import Cover from '../../../public/images/cover.svg';
import { HeaderContainer } from './styles';

export function Header() {
    return (
        <HeaderContainer>
            <img src={Cover} alt="" />
        </HeaderContainer>
    )
}