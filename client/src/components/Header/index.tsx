import {
  ButtonsContainer,
  HeaderContainer,
  Title,
  HeaderButton,
} from './styles';
import { Autocomplete } from '@mui/material';
import TextField from '@mui/material/TextField';
import citiesList from '../../utils/citiesList';

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Kontulari - Weather</Title>
      <Autocomplete
        id="cities"
        freeSolo
        size="small"
        options={citiesList}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} placeholder="Insira o nome da cidade" />
        )}
      />
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
