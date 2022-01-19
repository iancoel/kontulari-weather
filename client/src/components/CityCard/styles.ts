import styled from 'styled-components';

export const CardContainer = styled.div`
  min-height: 400px;
  width: 100%;
  display: flex;
  margin-top: 50px;
  background: #633faa;
  border-radius: 10px;
  color: #fbfbff;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-family: sans-serif;
`;

interface InfoProps {
  first?: boolean;
}
export const Info = styled.p<InfoProps>`
  font-size: 16px;
  font-family: sans-serif;
  margin-top: ${({ first }) => (first ? '0' : '20px')};
`;

export const InnerCardContainer = styled.div`
  width: 50%;
  padding: 30px;
`;

export const ForecastContainer = styled.div`
  background: #231123;
  border-radius: 0 10px 10px 0;
  padding: 20px;
  margin-top: 15px;
`;
