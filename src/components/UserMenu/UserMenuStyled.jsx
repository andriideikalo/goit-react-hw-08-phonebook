import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
export const UserName = styled.p`
  font-weight: 500;
  font-size: 18px;
  color: #1976d2;
`;

export const Button = styled.button`
  display: block;
  width: 120px;
  height: 35px;
  cursor: pointer;
  font-size: 16px;
  color: white;
  background-color: gray;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  border: none;
  outline: none;
  transition-property: background-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: red;
  }
`;
