import PropTypes from 'prop-types';

export const UserItem = ({
  name,
  username,
  email,
  avatarUrl,
  address: { street, city },
}) => {
  return (
    <li>
      <p>Name: {name}</p>
      <p>UserName: {username}</p>
      <p>email: {email}</p>
      <img src={avatarUrl} alt={name} />
      <p>
        address:{street},{city}
      </p>
    </li>
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
