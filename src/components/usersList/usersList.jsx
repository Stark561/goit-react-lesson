import PropTypes from 'prop-types';
import { UserItem } from '../User/UserItem';

export const UsersList = ({ users }) => {
  return (
    <ul>
      {users.map(user => (
        <UserItem
          key={user.id}
        
          {...user}
        />
      ))}
    </ul>
  );
};
UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired,
      ]),
    }).isRequired
  ).isRequired,
};
