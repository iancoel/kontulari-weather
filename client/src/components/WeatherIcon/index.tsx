import React from 'react';
import { Icon } from './styles';
import c from '../../assets/icons/c.svg';
import h from '../../assets/icons/h.svg';
import hc from '../../assets/icons/hc.svg';
import hr from '../../assets/icons/hr.svg';
import lc from '../../assets/icons/lc.svg';
import lr from '../../assets/icons/lr.svg';
import s from '../../assets/icons/s.svg';
import sl from '../../assets/icons/sl.svg';
import sn from '../../assets/icons/sn.svg';
import t from '../../assets/icons/t.svg';

const WeatherIcon = (props: { weather_state_abbr: string }) => {
  switch (props.weather_state_abbr) {
    case 'hc':
      return <Icon src={hc} alt="" />;
    case 'c':
      return <Icon src={c} alt="" />;
    case 'h':
      return <Icon src={h} alt="" />;
    case 'hr':
      return <Icon src={hr} alt="" />;
    case 'lc':
      return <Icon src={lc} alt="" />;
    case 'lr':
      return <Icon src={lr} alt="" />;
    case 's':
      return <Icon src={s} alt="" />;
    case 'sl':
      return <Icon src={sl} alt="" />;
    case 'sn':
      return <Icon src={sn} alt="" />;
    case 't':
      return <Icon src={t} alt="" />;

    default:
      return <p></p>;
  }
};

export default WeatherIcon;
