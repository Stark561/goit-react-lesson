import { UsersList } from './usersList/usersList';
import users from '../users.json';
export const App = () => {
  return (
    <div>
      <UsersList users={users} />
    </div>
  );
};
