import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function PublicRoute({ children }) {
  const { islogIn } = useSelector(state => state.auth);

  return !islogIn ? children : <Navigate to="/" />;
}

export default PublicRoute;
