import { useEffect, useState } from 'react';
import api from '../../utils/api';
import {
  CardContainer,
  Title,
  Info,
  InnerCardContainer,
  ForecastContainer,
  SourceButton,
  ButtonAnchor,
} from './styles';

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
      <InnerCardContainer scrollable>
        <Title>Forecasts</Title>
        {cityData?.consolidated_weather.map((forecast: any, index: any) => (
          <ForecastContainer key={index} divisors>
            <Info first>{forecast.weather_state_name}</Info>
            <Info>Direção do vento: {forecast.wind_direction_compass}</Info>
            <Info>Velocidade do vento: {forecast.wind_speed}</Info>
            <Info>Temp. mínima: {forecast.min_temp}</Info>
            <Info>Temp. máxima: {forecast.max_temp}</Info>
            <Info>Temp. atual: {forecast.the_temp}</Info>
            <Info>Pressão atmosférica: {forecast.air_pressure}</Info>
            <Info>Umidade: {forecast.humidity}</Info>
            <Info>
              Fonte:
              <ButtonAnchor href={cityData?.sources[index].url} target="_blank">
                <SourceButton>{cityData?.sources[index].title}</SourceButton>
              </ButtonAnchor>
            </Info>
          </ForecastContainer>
        ))}
      </InnerCardContainer>
    </CardContainer>
  );
};

export default CityCard;
