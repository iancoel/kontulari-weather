import React, { useEffect } from 'react';
import api from '../../utils/api';
import { CardContainer } from './styles';

const CityCard = () => {
  useEffect(() => {
    api
      .get('?location=Salvador')
      .then((response) => console.log(response.data))
      .catch((error) => console.warn(error));
  }, []);

  return <CardContainer></CardContainer>;
};

export default CityCard;
