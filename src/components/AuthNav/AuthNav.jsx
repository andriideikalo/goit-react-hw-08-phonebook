import { NavbarLink } from './AuthNavStyled';

export const AuthNav = () => {
  return (
    <div>
      <NavbarLink to="/register">Sign up</NavbarLink>
      <NavbarLink to="/login">Sign In</NavbarLink>
    </div>
  );
};
