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
import { useSelector } from 'react-redux';

const CityCard = () => {
  const [cityData, setCityData] = useState<any>();
  const state = useSelector((state) => state);

  console.log(cityData?.time.slice(11, 19));

  useEffect(() => {
    if (state) {
      api
        .get(`?location=${state}`)
        .then((response) => {
          setCityData(response.data);
        })
        .catch((error) => console.warn(error));
    }
  }, [state]);

  return (
    <CardContainer>
      <InnerCardContainer>
        <Title>
          {cityData?.title} / {cityData?.parent.title}
        </Title>
        <Info>Horário: {cityData?.time.slice(11, 19)}</Info>
        <Info>Nascer do sol às {cityData?.sun_rise.slice(11, 19)}</Info>
        <Info>Pôr do sol às {cityData?.sun_set.slice(11, 19)}</Info>
        <Info>
          Fuso {cityData?.timezone.replace('_', ' ')} -{' '}
          {cityData?.timezone_name}
        </Info>
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
