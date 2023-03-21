import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HeroLink = styled(Link)`
  text-decoration: none;
`;
export const Container = styled.div`
  height: 700px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-style: italic;
  font-size: 36px;
  line-height: 1.3;
  text-align: center;
  padding-top: 50px;
  margin-bottom: 60px;
`;
