import { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    email: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    this.props.addUser(this.state);
  };

  render() {
    const { name, email } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            value={name}
          />
        </label>

        <label>
          Email{' '}
          <input
            onChange={this.handleChange}
            type="email"
            name="email"
            value={email}
          />
        </label>

        <button>Save</button>
      </form>
    );
  }
}

export default Form;
