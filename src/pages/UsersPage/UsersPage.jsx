import Button from 'components/Button/Button';
import SearchForm from 'components/SearchForm/SearchForm';
import { UsersList } from 'components/usersList/usersList';
import { useMemo } from 'react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchUsers } from 'services/users-api';

const LIMIT = 10;
const SKIP = 10;

function UsersPage() {
  const [users, setUsers] = useState(null);
  const [totalUsers, setTotalUsers] = useState(0);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const querySearch = useMemo(
    () => searchParams.get('search') ?? '',
    [searchParams]
  );

  const resultBySearch = () => {
    setPage(1);
    setQuery(querySearch);
  };

  const changePage = () => {
    setPage(prev => prev + 1);
  };

  useEffect(() => {
    if (page === 1) setUsers(null);
    query && getUserBySearch(query, page);
  }, [query, page]);

  const getUserBySearch = async (query, pageNumber) => {
    const skip = SKIP * pageNumber - LIMIT;
    try {
      const { users, total } = await getSearchUsers(query, skip, LIMIT);
      total
        ? setUsers(prev => (prev ? [...prev, ...users] : users))
        : console.log('Didn`t match');
      setTotalUsers(total);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <SearchForm
        resultBySearch={resultBySearch}
        setSearchParams={setSearchParams}
        querySearch={querySearch}
      />
      {/* {loader && <p>Loading...</p>}
      {error && <h2>{error}</h2>} */}

      {users && (
        <>
          <UsersList users={users} />
          {users.length < totalUsers && (
            <Button text={'Load more'} handleClick={changePage} />
          )}
        </>
      )}
    </>
  );
}

export default UsersPage;
