import { IUpdateCityAction } from '../interfaces';

export const updateCity = (city: string): IUpdateCityAction => {
  return {
    type: 'ATUALIZAR_CIDADE',
    payload: city,
  };
};
