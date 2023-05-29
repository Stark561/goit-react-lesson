import { nanoid } from 'nanoid';
import { UsersList } from './usersList/usersList';
import data from '../users.json';
import Section from './Section/Section';
import Button from './Button/Button';
// import Form from './Form/Form';
import FormikForm from './Form/FormikForm';
import { Component } from 'react';
import Modal from './Modal/Modal';

const USERS_KEY = 'users';
class App extends Component {
  state = {
    users: data,
    isShowForm: false,
    userInfo: null,
  };

  componentDidMount() {
    const parse = JSON.parse(localStorage.getItem(USERS_KEY));
    if (parse && parse.length > 0) {
      this.setState({
        users: parse,
      });
    } else {
      this.setState({
        users: data,
      });
    }
  }
  componentDidUpdate(_, prevState) {
    if (prevState.users !== this.state.users)
      localStorage.setItem(USERS_KEY, JSON.stringify(this.state.users));
  }

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
    const { users, isShowForm, userInfo } = this.state;
    return (
      <Section title={'userlist'}>
        <UsersList
          userDelete={this.userDelete}
          changeStat={this.changeStatus}
          users={users}
          showUserDetails={this.showUserDetails}
        />
        {/* {isShowForm ? (
          <Form addUser={this.addUser} />
        ) : (
          <Button text="Open modal" handleClick={this.openForm} />
        )} */}
        {isShowForm ? (
          <FormikForm addUser={this.addUser} closeForm={this.closeForm} />
        ) : (
          <Button text="Open modal" handleClick={this.openForm} />
        )}
        {userInfo && (
          <Modal userInfo={userInfo} closeUserDetails={this.closeUserDetails} />
        )}
      </Section>
    );
  }
}

export default App;
