import logo from '../../assets/logo.svg'

import { HeaderContainer, HeaderText } from './Header.styles';

interface HeaderProps {
  text: string
}

const Header = ( props: HeaderProps ) => {
  const {text} = props;

  return (
    <HeaderContainer>
      <img src={logo} className="logo" alt="Premier League logo" />
      <HeaderText>{text}</HeaderText >
    </HeaderContainer>
  );
};

export default Header;
