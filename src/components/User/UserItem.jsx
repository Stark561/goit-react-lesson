import PropTypes from 'prop-types';
import Section from 'components/Section/Section';
import { NativeText, Title } from './User.styled';
import { StyledBtn } from './User.styled';

export const UserItem = ({
  id,
  firstName,

  email,
  image,

  userDelete,
  changeJob,
  hasJob,
  showUserDetails,
}) => {
  const isEndedBiz = email.endsWith('biz');

  return (
    <Section>
      <li>
        <Title>
          Name: <NativeText isEndedBiz={isEndedBiz}>{firstName}</NativeText>
        </Title>

        <p>email: {email}</p>
        <img src={image} alt={firstName} />

        {/* <Title>Has Job : {`${hasJob}`}</Title> */}
      </li>
      <StyledBtn onClick={() => userDelete(id)}>Delete</StyledBtn>
      <StyledBtn onClick={() => showUserDetails({ firstName, email, image })}>
        Show details
      </StyledBtn>
      <StyledBtn onClick={() => changeJob(id)}>Change user status</StyledBtn>
    </Section>
  );
};

UserItem.propTypes = {
  firstName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  userDelete: PropTypes.func.isRequired,
  // changeJob: PropTypes.func.isRequired,
  showUserDetails: PropTypes.func.isRequired,
};
