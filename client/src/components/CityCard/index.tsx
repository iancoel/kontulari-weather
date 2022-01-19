import { useEffect, useState } from 'react';
import api from '../../utils/api';
import { CardContainer, Title, Info, InnerCardContainer } from './styles';

const CityCard = () => {
  const [cityData, setCityData] = useState<any>();

  useEffect(() => {
    api
      .get('?location=Salvador')
      .then((response) => setCityData(response.data))
      .catch((error) => console.warn(error));
  }, []);

  return (
    <CardContainer>
      <InnerCardContainer>
        <Title>
          {cityData?.title} / {cityData?.parent.title}
        </Title>
        <Info>{cityData?.time}</Info>
        <Info>Nascer do sol às {cityData?.sun_rise}</Info>
        <Info>Pôr do sol às {cityData?.sun_set}</Info>
        <Info>
          Fuso {cityData?.timezone} - {cityData?.timezone_name}
        </Info>
        <Info></Info>
      </InnerCardContainer>
      <InnerCardContainer></InnerCardContainer>
    </CardContainer>
  );
};

export default CityCard;
