import { Wrap, Box } from './ContainerStyled';

export const Container = ({ children }) => {
  return (
    <Wrap>
      <Box>{children}</Box>;
    </Wrap>
  );
};
