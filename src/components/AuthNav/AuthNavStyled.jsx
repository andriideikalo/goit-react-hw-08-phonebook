import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const NavbarLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.3;
  text-align: center;
  color: #1976d2;

  &.active {
    position: relative;
    color: orange;
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      display: block;
      transform: translateY(1px);
      width: 100%;
      height: 4px;
      border-radius: 2px;
      background-color: orange;
    }
  }
`;
