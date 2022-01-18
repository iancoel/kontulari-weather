import {
  ButtonsContainer,
  HeaderContainer,
  Title,
  HeaderButton,
} from './styles';

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Kontulari - Weather</Title>
      <ButtonsContainer>
        <li>
          <HeaderButton variant="contained">Botão 1</HeaderButton>
        </li>
        <li>
          <HeaderButton variant="contained">Botão 2</HeaderButton>
        </li>
      </ButtonsContainer>
    </HeaderContainer>
  );
};

export default Header;
