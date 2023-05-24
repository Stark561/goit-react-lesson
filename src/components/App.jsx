import { UsersList } from './usersList/usersList';
import data from '../users.json';
import Section from './Section/Section';
import { Component } from 'react';

class App extends Component {
  state = { users: data };

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

  render() {
    const { users } = this.state;
    return (
      <Section title={'userlist'}>
        <UsersList
          userDelete={this.userDelete}
          changeStat={this.changeStatus}
          users={users}
        />
      </Section>
    );
  }
}

export default App;
