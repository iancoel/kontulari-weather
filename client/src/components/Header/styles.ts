import styled from 'styled-components';
import { Button } from '@mui/material';

export const HeaderContainer = styled.header`
  height: 100px;
  max-width: 100%;
  background: #633faa;
  border-radius: 0 0 10px 10px;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fbfbff;

  /* Caso o scroll horizontal embaixo do X do autocomplete volte a aparecer */
  /* & > * {
    overflow: hidden;
  } */

  @media (max-width: 700px) {
    flex-direction: column;
    overflow-x: hidden;
  }

  @media (max-width: 470px) {
    height: 140px;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  font-family: sans-serif;
`;

export const ButtonsContainer = styled.ul`
  display: flex;
`;

export const HeaderButton = styled(Button)`
  background-color: #ff6542 !important;
  margin-left: 20px !important;
`;
