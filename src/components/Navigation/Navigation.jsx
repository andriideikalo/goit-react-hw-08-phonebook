import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { NavbarLink } from './NavigationStyled';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <NavbarLink to="/">Home</NavbarLink>
      {isLoggedIn && <NavbarLink to="/contacts">Contacts</NavbarLink>}
    </nav>
  );
};
