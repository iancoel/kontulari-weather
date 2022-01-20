import { useDispatch, useSelector } from 'react-redux';
import { updateCity } from '../../store/actions';
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
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <HeaderContainer>
      <Title>Kontulari - Weather</Title>
      <Autocomplete
        id="cities"
        freeSolo
        size="small"
        options={citiesList}
        sx={{ width: 300 }}
        inputValue={state ? (state as string) : ''}
        onChange={(event, value) => dispatch(updateCity(value!))}
        onInputChange={(event, value) => dispatch(updateCity(value!))}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Insira o nome da cidade"
            onChange={({ target }) => dispatch(updateCity(target.value))}
          />
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
