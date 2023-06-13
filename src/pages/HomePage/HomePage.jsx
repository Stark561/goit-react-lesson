import Button from 'components/Button/Button';
import { UsersList } from 'components/usersList/usersList';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from 'services/users-api';
import { getUsersThunk } from 'store/users/usersOperations';
import { selectUsers } from 'store/users/usersSelectors';

const LIMIT = 10;
const SKIP = 10;

function HomePage() {
  // const [users, setUsers] = useState(null);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  // const [loader, setLoader] = useState(false);
  // const [error, setError] = useState('');
  // const [totalUsers, setTotalUsers] = useState(0);
  // const { users } = selectUsers(state);
  const { users, totalUsers, isLoading, error } = useSelector(selectUsers);

  useEffect(() => {
    const skip = SKIP * page - LIMIT;
    users.length === 0 && dispatch(getUsersThunk(skip, LIMIT));
  }, [dispatch, page, users.length]);

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
