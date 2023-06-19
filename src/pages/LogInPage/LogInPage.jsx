import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserNameAsynk, logInAsynk } from 'store/auth/authOperations';

function LogInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isLogIn = useSelector(state => state.auth.islogIn);
  const errorMessage = useSelector(state => state.auth.erorMessage);

  const navigate = useNavigate();

  useEffect(() => {
    isLogIn && navigate('/');
  }, [isLogIn, navigate]);

  const dispatch = useDispatch();

  const onSubmitForm = evt => {
    evt.preventDefault();

    const sendedObj = { email, password };
    dispatch(logInAsynk(sendedObj));
  };

  return (
    <>
      <h2>Log in page</h2>
      <form action="" onSubmit={onSubmitForm}>
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
        <button>Log in</button>
      </form>
    </>
  );
}

export default LogInPage;
