import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  const { islogIn } = useSelector(state => state.auth);

  return islogIn ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
