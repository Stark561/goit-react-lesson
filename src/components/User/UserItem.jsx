import PropTypes from 'prop-types';
import Section from 'components/Section/Section';
import { NativeText, Title } from './User.styled';
import { StyledBtn } from './User.styled';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Suspense } from 'react';

export const UserItem = ({ isUserInfoShow, id, firstName, email, image }) => {
  const isEndedBiz = email.endsWith('biz');
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = route => {
    navigate(route);
  };
  // console.log(location);
  return (
    <Section>
      <li>
        <Title>
          Name: <NativeText isEndedBiz={isEndedBiz}>{firstName}</NativeText>
        </Title>

        <p>email: {email}</p>
        <img src={image} alt={firstName} />
      </li>
      {!isUserInfoShow ? (
        <Link to={location.pathname === '/users' ? `${id}` : `users/${id}`}>
          Show details
        </Link>
      ) : (
        <>
          <StyledBtn onClick={() => handleClick('todos')}>Todos </StyledBtn>
          <StyledBtn onClick={() => handleClick('posts')}>Posts </StyledBtn>
        </>
      )}
      <Suspense>
        <Outlet />
      </Suspense>
    </Section>
  );
};

UserItem.propTypes = {
  firstName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
