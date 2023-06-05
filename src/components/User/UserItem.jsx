import PropTypes from 'prop-types';
import Section from 'components/Section/Section';
import { NativeText, Title } from './User.styled';
import { StyledBtn } from './User.styled';
import { Link } from 'react-router-dom';

export const UserItem = ({
  isUserInfoShow,

  id,
  firstName,

  email,
  image,
}) => {
  const isEndedBiz = email.endsWith('biz');

  return (
    <Section>
      <li>
        <Title>
          Name: <NativeText isEndedBiz={isEndedBiz}>{firstName}</NativeText>
        </Title>

        <p>email: {email}</p>
        <img src={image} alt={firstName} />
      </li>
      {!isUserInfoShow && <Link to={`users/${id}`}>Show details</Link>}
    </Section>
  );
};

UserItem.propTypes = {
  firstName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
