import { UserItem } from 'components/User/UserItem';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserDetails } from 'services/users-api';

function UserDateilsPage() {
  const [userInformation, setUserInformation] = useState(null);

  const UserId = useParams();

  useEffect(() => {
    const userDetail = async () => {
      try {
        const iserInfo = await getUserDetails(UserId.id);
        setUserInformation(iserInfo);
      } catch (error) {
        console.log(error);
      }
    };
    userDetail();
  }, [UserId.id]);

  return userInformation && <UserItem {...userInformation} isUserInfoShow />;
}

export default UserDateilsPage;
