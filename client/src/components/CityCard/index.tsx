import { useEffect, useState } from 'react';
import api from '../../utils/api';
import citiesList from '../../utils/citiesList';
import {
  CardContainer,
  Title,
  Info,
  InnerCardContainer,
  ForecastContainer,
  SourceButton,
  ButtonAnchor,
  IconContainer,
} from './styles';
import { useSelector } from 'react-redux';
import { Skeleton } from '@mui/material';
import { IResponseData } from '../../interfaces';
import WeatherIcon from '../WeatherIcon';

const CityCard = () => {
  const [cityData, setCityData] = useState<IResponseData>();
  const [loading, setLoading] = useState(false);
  const state = useSelector((state) => state);

  useEffect(() => {
    let containsCity = false;
    citiesList.forEach((city: string) => {
      if (city.includes(state as string)) containsCity = true;
    });

    if (state) {
      setLoading(true);
      api
        .get(`?location=${state}`)
        .then((response) => {
          if (containsCity) setCityData(response.data);
          setLoading(false);
        })
        .catch((error) => console.warn(error));
    }
  }, [state]);

  if (!cityData && !loading) {
    return <p></p>;
  }

  if (loading) {
    return (
      <CardContainer>
        <InnerCardContainer>
          <Skeleton variant="text" height={24} />
          <Skeleton
            variant="rectangular"
            height={140}
            style={{ marginTop: 20 }}
          />
        </InnerCardContainer>
        <InnerCardContainer>
          <Skeleton variant="text" height={24} />
          <Skeleton
            variant="rectangular"
            height={140}
            style={{ marginTop: 20 }}
          />
          <Skeleton
            variant="rectangular"
            height={140}
            style={{ marginTop: 20 }}
          />
          <Skeleton
            variant="rectangular"
            height={140}
            style={{ marginTop: 20 }}
          />
        </InnerCardContainer>
      </CardContainer>
    );
  }

  return (
    <CardContainer>
      <InnerCardContainer>
        <Title>
          {cityData?.title} / {cityData?.parent.title}
        </Title>
        <Info>Current time: {cityData?.time.slice(11, 19)}</Info>
        <Info>Sunrise at {cityData?.sun_rise.slice(11, 19)}</Info>
        <Info>Sunset at {cityData?.sun_set.slice(11, 19)}</Info>
        <Info>
          Timezone {cityData?.timezone.replace('_', ' ')} -{' '}
          {cityData?.timezone_name}
        </Info>
        <Info>Sources:</Info>
        {cityData?.sources.map((source, index) => (
          <ButtonAnchor key={index} href={source.url} target="_blank">
            <SourceButton>{source.title}</SourceButton>
          </ButtonAnchor>
        ))}
      </InnerCardContainer>
      <InnerCardContainer scrollable>
        <Title>Forecasts</Title>
        {cityData?.consolidated_weather.map((forecast: any, index: any) => (
          <ForecastContainer key={index} divisors>
            <Info first>
              <IconContainer>
                <WeatherIcon weather_state_abbr={forecast.weather_state_abbr} />
                {forecast.weather_state_name}
              </IconContainer>
            </Info>

            <Info>Applicable date: {forecast.applicable_date}</Info>
            <Info>Wind Direction: {forecast.wind_direction_compass}</Info>
            <Info>Wind Speed: {+forecast.wind_speed.toFixed(2)}mph</Info>
            <Info>Min. Temp: {+forecast.min_temp.toFixed(0)}°C</Info>
            <Info>Max. Temp: {+forecast.max_temp.toFixed(0)}°C</Info>
            <Info>Current Temp: {+forecast.the_temp.toFixed(0)}°C</Info>
            <Info>Air Pressure: {forecast.air_pressure}mb</Info>
            <Info>Humidity: {forecast.humidity}%</Info>
          </ForecastContainer>
        ))}
      </InnerCardContainer>
    </CardContainer>
  );
};

export default CityCard;
