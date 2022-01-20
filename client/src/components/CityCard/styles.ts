import styled from 'styled-components';
import { Button } from '@mui/material';

export const CardContainer = styled.div`
  min-height: 400px;
  width: 100%;
  display: flex;
  margin-top: 50px;
  background: #633faa;
  border-radius: 10px;
  color: #fbfbff;

  @media (max-width: 700px) {
    flex-direction: column;
  }
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

  &:last-child::after {
    display: inline;
  }
`;

interface InnerCardContainerProps {
  scrollable?: boolean;
}
export const InnerCardContainer = styled.div<InnerCardContainerProps>`
  width: 50%;
  padding: 30px;
  height: 400px;
  overflow-y: ${({ scrollable }) => (scrollable ? 'scroll' : 'hidden')};
  scroll-behavior: smooth;

  scrollbar-color: #633faa darkorange;
  scrollbar-width: thin;

  &::-webkit-scrollbar-thumb {
    background-color: darkorange;
  }

  &::-webkit-scrollbar-track {
    background-color: #633faa;
  }

  &::-webkit-scrollbar-corner {
    background-color: #633faa;
  }

  &::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
  }

  @media (max-width: 700px) {
    width: calc(100% - 60px);
    height: auto;
  }
`;

interface ForecastContainerProps {
  divisors?: boolean;
}
export const ForecastContainer = styled.div<ForecastContainerProps>`
  background: #231123;
  border-radius: 0 10px 10px 0;
  padding: 20px;
  margin-top: 15px;

  p:after {
    content: '';
    display: ${({ divisors }) => (divisors ? 'block' : 'inline')};
    height: 1px;
    width: 100%;
    margin-top: 10px;
    background: rgba(251, 251, 255, 0.1);
  }
`;

export const SourceButton = styled(Button)`
  background-color: darkorange !important;
  margin-left: 20px !important;
  color: #fbfbff !important;
`;

export const ButtonAnchor = styled.a`
  text-decoration: none;
`;
