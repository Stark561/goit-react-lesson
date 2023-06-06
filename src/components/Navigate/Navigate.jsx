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
      </ul>
    </nav>
  );
}

export default Navigate;
