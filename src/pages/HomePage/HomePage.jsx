import Button from 'components/Button/Button';
import { UsersList } from 'components/usersList/usersList';
import { useEffect, useState } from 'react';
import { fetchUsers } from 'services/users-api';

const LIMIT = 10;
const SKIP = 10;

function HomePage() {
  const [users, setUsers] = useState(null);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState('');
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    getUsers(page);
  }, [page]);

  const getUsers = async pageNumber => {
    const skip = SKIP * pageNumber - LIMIT;
    setLoader(true);
    try {
      const {
        data: { users, total },
      } = await fetchUsers(skip, LIMIT);
      setTotalUsers(total);
      setUsers(prev => (prev ? [...prev, ...users] : users));
    } catch (error) {
      setError(error.message);
    } finally {
      setLoader(false);
    }
  };

  const changePage = () => {
    setPage(prev => prev + 1);
  };

  return (
    users && (
      <>
        <UsersList users={users} />
        {users.length < totalUsers && (
          <Button text={'Load more'} handleClick={changePage} />
        )}
      </>
    )
  );
}

export default HomePage;
