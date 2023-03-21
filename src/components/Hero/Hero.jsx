import { Container, Title, HeroLink } from './HeroStyled';

export const Hero = () => {
  return (
    <Container>
      <Title>Welcome to the phonebook.</Title>
      <Title>Please register or enter your login and password.</Title>
      <HeroLink to="/register"></HeroLink>
    </Container>
  );
};
