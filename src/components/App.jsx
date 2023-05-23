import { UsersList } from './usersList/usersList';
import users from '../users.json';
import Section from './Section/Section';

export const App = () => {
  return (
    <Section title={'userlist'}>
      <UsersList users={users} />
    </Section>
  );
};
