import { Component } from 'react';
import {
  Overlay,
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalBody,
  ButtonClose,
} from './Modal.styled';
import PropTypes from 'prop-types';

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handlePressEscape);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handlePressEscape);
  }
  handlePressEscape = e => {
    if (e.code === 'Escape') {
      this.props.closeUserDetails();
    }
  };
  handleBackdrop = e => {
    if (e.currentTarget === e.target) {
      this.props.closeUserDetails();
    }
  };
  render() {
    const {
      userInfo: { name, email, avatarUrl },
      closeUserDetails,
    } = this.props;
    return (
      <Overlay onClick={this.handleBackdrop}>
        <ModalContainer>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>{name}</ModalTitle>
              <ButtonClose onClick={closeUserDetails}>×</ButtonClose>
            </ModalHeader>
            <ModalBody>
              <img src={avatarUrl} alt={name} />
              <p> email: {email}</p>
            </ModalBody>
          </ModalContent>
        </ModalContainer>
      </Overlay>
    );
  }
}

export default Modal;

Modal.propTypes = {
  userInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,

    email: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
  }),
};
