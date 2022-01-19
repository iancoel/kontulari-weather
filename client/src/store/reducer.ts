import { IUpdateCityAction } from '../interfaces';

const city = (state = '', action: IUpdateCityAction): string => {
  switch (action.type) {
    case 'ATUALIZAR_CIDADE':
      return action.payload;

    default:
      return state;
  }
};
export default city;
