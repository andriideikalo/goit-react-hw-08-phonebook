import styled from '@emotion/styled';

import { Field } from 'formik';

export const Form = styled.form`
  position: absolute;
  margin-top: 230px;
  width: 320px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  background-color: gray;
  padding: 25px;
`;

export const Box = styled.div`
  position: relative;
  height: 700px;
  margin: 0 auto;
  background-position: center;
  display: flex;
  justify-content: center;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 50px;
  border-bottom: 1px solid white;
`;

export const Input = styled(Field)`
  display: block;
  margin: 0 auto;
  border: 1px solid rgba(33, 33, 33, 0.2);
  cursor: pointer;
  font-size: 15px;
  background-color: gray;
`;
