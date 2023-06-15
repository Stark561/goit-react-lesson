import { logOut } from 'store/auth/authSlice';
import { StyledNavLink } from './Navigate.styled';
import { useDispatch, useSelector } from 'react-redux';

function Navigate() {
  const { islogIn } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const onLogOutBtnClick = () => {
    dispatch(logOut());
  };

  return (
    <nav>
      <ul>
        <li>
          <StyledNavLink to="/">Home</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/users">Users</StyledNavLink>
        </li>

        <li>
          <StyledNavLink to="/todo">Todo page</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/create/todo">Create todo page </StyledNavLink>
        </li>
        {!islogIn ? (
          <>
            <li>
              <StyledNavLink to="/registration">Registration</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/login">Log in</StyledNavLink>
            </li>
          </>
        ) : (
          <button onClick={onLogOutBtnClick}>Log out</button>
        )}
      </ul>
    </nav>
  );
}

export default Navigate;
