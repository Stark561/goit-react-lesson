import { nanoid } from 'nanoid';
import { UsersList } from './usersList/usersList';
import Section from './Section/Section';
import Button from './Button/Button';
// import Form from './Form/Form';
// import FormikForm from './Form/FormikForm';
import { Component } from 'react';
import Modal from './Modal/Modal';
import { fetchUsers } from 'services/users-api';

class App extends Component {
  static limit = 10;
  static skip = 10;

  state = {
    users: null,
    isShowForm: false,
    userInfo: null,
    isShowUsers: false,
    page: 1,
  };

  componentDidUpdate(_, prevState) {
    if (
      (this.state.isShowUsers &&
        prevState.isShowUsers !== this.state.isShowUsers) ||
      (this.state.isShowUsers && prevState.page !== this.state.page)
    ) {
      this.getUsers(this.state.page);
    }
    if (
      !this.state.isShowUsers &&
      prevState.isShowUsers !== this.state.isShowUsers
    ) {
      this.setState({
        users: null,
      });
    }
  }

  getUsers = async page => {
    const skip = App.skip * this.state.page - App.limit;
    const {
      data: { users },
    } = await fetchUsers(skip, App.limit);

    // if (page > 1) {
    //   this.setState(prev => ({ users: [...prev.users, ...users] }));
    // } else {
    //   this.setState({ users });
    // }
    this.setState(prev => ({
      users: prev.users ? [...prev.users, ...users] : users,
    }));
  };

  changePage = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  userDelete = usersId => {
    this.setState(prevState => {
      return {
        users: prevState.users.filter(user => {
          return user.id !== usersId;
        }),
      };
    });
  };

  changeStatus = usersId => {
    this.setState(prevState => {
      return {
        users: prevState.users.map(user => {
          return user.id === usersId ? { ...user, hasJob: !user.hasJob } : user;
        }),
      };
    });
  };
  changeVisibleUsers = () => {
    this.setState(prev => ({ isShowUsers: !prev.isShowUsers }));
  };
  openForm = () => {
    this.setState({ isShowForm: true });
  };

  closeForm = () => {
    this.setState({ isShowForm: false });
  };

  addUser = data => {
    this.setState(prevState => {
      return {
        users: [...prevState.users, { ...data, id: nanoid(), hasJob: false }],
      };
    });
  };

  showUserDetails = data => {
    this.setState({ userInfo: data });
  };
  closeUserDetails = () => {
    this.setState({ userInfo: null });
  };

  render() {
    const { users, userInfo, isShowUsers } = this.state;

    return (
      <Section title={'userlist'}>
        <Button
          text={isShowUsers ? 'Hide users' : 'Show users'}
          handleClick={this.changeVisibleUsers}
        />
        {users && (
          <>
            <UsersList
              userDelete={this.userDelete}
              changeStat={this.changeStatus}
              users={users}
              showUserDetails={this.showUserDetails}
            />
            <Button text={'Load more'} handleClick={this.changePage} />
          </>
        )}

        {userInfo && (
          <Modal userInfo={userInfo} closeUserDetails={this.closeUserDetails} />
        )}
      </Section>
    );
  }
}

export default App;

/* {isShowForm ? (
          <FormikForm addUser={this.addUser} closeForm={this.closeForm} />
        ) : (
          <Button text="Open modal" handleClick={this.openForm} />
        )} */
