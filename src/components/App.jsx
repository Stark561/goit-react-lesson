// import { nanoid } from 'nanoid';
import { UsersList } from './usersList/usersList';
import Section from './Section/Section';
import Button from './Button/Button';
// import Form from './Form/Form';
import FormikForm from './Form/FormikForm';
import { useEffect, useState } from 'react';
import Modal from './Modal/Modal';
import { fetchUsers, getSearchUsers, postUser } from 'services/users-api';
import SearchForm from './SearchForm/SearchForm';

const LIMIT = 10;
const SKIP = 10;

function App() {
  const [users, setUsers] = useState(null);
  const [isShowForm, setIsShowForm] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [isShowUsers, setIsShowUsers] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (isShowUsers) {
      getUsers(page);
    }
  }, [isShowUsers, page]);

  const getUsers = async pageNumber => {
    const skip = SKIP * pageNumber - LIMIT;
    setLoader(true);
    try {
      const {
        data: { users },
      } = await fetchUsers(skip, LIMIT);

      setUsers(prev => (prev ? [...prev, ...users] : users));
    } catch (error) {
      setError(error.message);
    } finally {
      setLoader(false);
    }
  };

  const resultBySearch = query => {
    setPage(1);
    setQuery(query);
  };

  useEffect(() => {
    if (page === 1) setUsers(null);
    query && getUserBySearch(query, page);
  }, [query, page]);

  const getUserBySearch = async (query, pageNumber) => {
    setError('');
    setLoader(true);
    const skip = SKIP * pageNumber - LIMIT;
    try {
      const { users, total } = await getSearchUsers(query, skip, LIMIT);
      total
        ? setUsers(prev => (prev ? [...prev, ...users] : users))
        : setError('Didn`t match');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoader(false);
    }
  };

  const changePage = () => {
    setPage(prev => prev + 1);
  };

  const userDelete = usersId => {
    setUsers(prevUsers =>
      prevUsers.filter(user => {
        return user.id !== usersId;
      })
    );
  };

  const changeVisibleUsers = () => {
    setIsShowUsers(prev => !prev);
    if (isShowUsers) {
      setUsers(null);
    }
  };

  const openForm = () => {
    setIsShowForm(true);
  };

  const closeForm = () => {
    setIsShowForm(false);
  };

  const addUser = async data => {
    setLoader(true);
    try {
      const user = await postUser(data);
      setUsers(prev => (prev ? [user, ...prev] : [user]));
    } catch (error) {
      setError(error.message);
    } finally {
      setLoader(false);
    }
  };

  const showUserDetails = data => {
    setUserInfo(data);
  };

  const closeUserDetails = () => {
    setUserInfo(null);
  };

  return (
    <Section title={'userlist'}>
      <SearchForm resultBySearch={resultBySearch} />
      <Button
        text={isShowUsers ? 'Hide users' : 'Show users'}
        handleClick={changeVisibleUsers}
      />

      {loader && <p>Loading...</p>}
      {error && <h2>{error}</h2>}

      {users && (
        <>
          <UsersList
            userDelete={userDelete}
            users={users}
            showUserDetails={showUserDetails}
          />
          {users.length > LIMIT && (
            <Button text={'Load more'} handleClick={changePage} />
          )}
        </>
      )}

      {userInfo && (
        <Modal userInfo={userInfo} closeUserDetails={closeUserDetails} />
      )}

      {isShowForm ? (
        <FormikForm addUser={addUser} closeForm={closeForm} />
      ) : (
        <Button text="Open modal" handleClick={openForm} />
      )}
    </Section>
  );
}

// class App extends Component {
//   static limit = 10;
//   static skip = 10;

//   state = {
//     users: null,
//     isShowForm: false,
//     userInfo: null,
//     isShowUsers: false,
//     page: 1,
//   };

//   componentDidUpdate(_, prevState) {
//     if (
//       (this.state.isShowUsers &&
//         prevState.isShowUsers !== this.state.isShowUsers) ||
//       (this.state.isShowUsers && prevState.page !== this.state.page)
//     ) {
//       this.getUsers(this.state.page);
//     }
//     if (
//       !this.state.isShowUsers &&
//       prevState.isShowUsers !== this.state.isShowUsers
//     ) {
//       this.setState({
//         users: null,
//       });
//     }
//   }

//   getUsers = async page => {
//     const skip = App.skip * this.state.page - App.limit;
//     const {
//       data: { users },
//     } = await fetchUsers(skip, App.limit);

//     // if (page > 1) {
//     //   this.setState(prev => ({ users: [...prev.users, ...users] }));
//     // } else {
//     //   this.setState({ users });
//     // }
//     this.setState(prev => ({
//       users: prev.users ? [...prev.users, ...users] : users,
//     }));
//   };

//   changePage = () => {
//     this.setState(prev => ({ page: prev.page + 1 }));
//   };

//   userDelete = usersId => {
//     this.setState(prevState => {
//       return {
//         users: prevState.users.filter(user => {
//           return user.id !== usersId;
//         }),
//       };
//     });
//   };

//   changeStatus = usersId => {
//     this.setState(prevState => {
//       return {
//         users: prevState.users.map(user => {
//           return user.id === usersId ? { ...user, hasJob: !user.hasJob } : user;
//         }),
//       };
//     });
//   };
//   changeVisibleUsers = () => {
//     this.setState(prev => ({ isShowUsers: !prev.isShowUsers }));
//   };
//   openForm = () => {
//     this.setState({ isShowForm: true });
//   };

//   closeForm = () => {
//     this.setState({ isShowForm: false });
//   };

//   addUser = data => {
//     this.setState(prevState => {
//       return {
//         users: [...prevState.users, { ...data, id: nanoid(), hasJob: false }],
//       };
//     });
//   };

//   showUserDetails = data => {
//     this.setState({ userInfo: data });
//   };
//   closeUserDetails = () => {
//     this.setState({ userInfo: null });
//   };

//   render() {
//     const { users, userInfo, isShowUsers } = this.state;

//     return (
//       <Section title={'userlist'}>
//         <Button
//           text={isShowUsers ? 'Hide users' : 'Show users'}
//           handleClick={this.changeVisibleUsers}
//         />
//         {users && (
//           <>
//             <UsersList
//               userDelete={this.userDelete}
//               changeStat={this.changeStatus}
//               users={users}
//               showUserDetails={this.showUserDetails}
//             />
//             <Button text={'Load more'} handleClick={this.changePage} />
//           </>
//         )}

//         {userInfo && (
//           <Modal userInfo={userInfo} closeUserDetails={this.closeUserDetails} />
//         )}
//       </Section>
//     );
//   }
// }

export default App;
