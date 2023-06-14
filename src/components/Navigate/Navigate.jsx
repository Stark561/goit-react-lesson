import { StyledNavLink } from './Navigate.styled';

function Navigate() {
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

        <li>
          <StyledNavLink to="/registration">Registration</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/login">Log in</StyledNavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigate;
