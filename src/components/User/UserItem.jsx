import PropTypes from 'prop-types';
import Section from 'components/Section/Section';
import { NativeText, Title } from './User.styled';

export const UserItem = ({
  name,
  username,
  email,
  avatarUrl,
  address: { street, city },
}) => {
  const isEndedBiz = email.endsWith('biz');
  return (
    <Section>
      <li>
        <Title>
          Name: <NativeText isEndedBiz={isEndedBiz}>{name}</NativeText>
        </Title>
        <p>UserName: {username}</p>
        <p>email: {email}</p>
        <img src={avatarUrl} alt={name} />
        <p>
          address:{street},{city}
        </p>
      </li>
    </Section>
  );
};

UserItem.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string,
    city: PropTypes.string,
    geo: PropTypes.objectOf(PropTypes.string),
  }),
};
