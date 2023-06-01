import PropTypes from 'prop-types';
import { UserItem } from '../User/UserItem';

export const UsersList = ({ users, userDelete, showUserDetails }) => {
  return (
    <ul>
      {users.map(user => (
        <UserItem
          key={user.id}
          userDelete={userDelete}
          showUserDetails={showUserDetails}
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
  userDelete: PropTypes.func.isRequired,
  showUserDetails: PropTypes.func.isRequired,
};
