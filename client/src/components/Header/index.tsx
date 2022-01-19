import React, { ChangeEvent, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
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
  const [selectedCity, setSelectedCity] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateCity(selectedCity));
  }, [selectedCity, dispatch]);

  return (
    <HeaderContainer>
      <Title>Kontulari - Weather</Title>
      <Autocomplete
        id="cities"
        freeSolo
        size="small"
        options={citiesList}
        sx={{ width: 300 }}
        inputValue={selectedCity ? selectedCity : ''}
        onChange={(event, value) => setSelectedCity(value!)}
        onInputChange={(event, value) => setSelectedCity(value!)}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Insira o nome da cidade"
            onChange={({ target }) => setSelectedCity(target.value)}
          />
        )}
      />
      <ButtonsContainer>
        <li>
          <HeaderButton
            onClick={() => console.log(selectedCity)}
            variant="contained"
          >
            Botão 1
          </HeaderButton>
        </li>
        <li>
          <HeaderButton variant="contained">Botão 2</HeaderButton>
        </li>
      </ButtonsContainer>
    </HeaderContainer>
  );
};

export default Header;
