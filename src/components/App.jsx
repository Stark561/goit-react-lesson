import UsersList from "./usersList/usersList";
import users from "../users.json";
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
     <UsersList users={users}/>
    </div>
  );
};
