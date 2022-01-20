import { IUpdateCityAction } from '../interfaces';

const city = (state = '', action: IUpdateCityAction): string => {
  switch (action.type) {
    case 'ATUALIZAR_CIDADE':
      const capitalizedString =
        action.payload.charAt(0).toUpperCase() + action.payload.slice(1);

      return capitalizedString;

    default:
      return state;
  }
};
export default city;
