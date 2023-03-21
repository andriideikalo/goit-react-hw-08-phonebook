import { useDispatch, useSelector } from 'react-redux';
import { Wrapper, UserName, Button } from './UserMenuStyled';
import { selectUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <Wrapper>
      <UserName>Active user: {user}</UserName>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Wrapper>
  );
};
