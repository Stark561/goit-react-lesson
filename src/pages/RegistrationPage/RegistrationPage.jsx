import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registretionuser } from 'services/users-api';

function RegistrationPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const onSubmitForm = evt => {
    evt.preventDefault();

    const sendedObj = {
      name,
      email,
      password,
      avatar: 'https://api.lorem.space/image/face?w=640&h=480&r=867',
    };
    registretionuser(sendedObj).then(() => navigate('/login'));
  };

  return (
    <>
      <h2>Registration page</h2>
      <form action="" onSubmit={onSubmitForm}>
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={evt => setName(evt.target.value)}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={evt => setEmail(evt.target.value)}
          />
        </label>
        <label h>
          Password
          <input
            type="password"
            value={password}
            onChange={evt => setPassword(evt.target.value)}
          />
        </label>
        <button>Registretion</button>
      </form>
    </>
  );
}

export default RegistrationPage;
