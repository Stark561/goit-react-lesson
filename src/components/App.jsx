import { nanoid } from 'nanoid';
import { UsersList } from './usersList/usersList';
import data from '../users.json';
import Section from './Section/Section';
import Button from './Button/Button';
// import Form from './Form/Form';
import FormikForm from './Form/FormikForm';
import { Component } from 'react';

class App extends Component {
  state = {
    users: data,
    isShowForm: false,
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

  render() {
    const { users, isShowForm } = this.state;
    return (
      <Section title={'userlist'}>
        <UsersList
          userDelete={this.userDelete}
          changeStat={this.changeStatus}
          users={users}
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
      </Section>
    );
  }
}

export default App;
