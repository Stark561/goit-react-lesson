import { useSelector } from 'react-redux';

function HeaderUserInfo() {
  const userName = useSelector(state => state.auth.name);

  return (
    <div>
      <p>{userName}</p>
    </div>
  );
}

export default HeaderUserInfo;
