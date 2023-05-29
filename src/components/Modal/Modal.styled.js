import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1050;
`;

export const ModalContainer = styled.div`
  background-color: #fff;
  position: relative;
  min-width: 500px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding: 8px;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 2px solid #eceeef;
`;

export const ModalTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 0;
  line-height: 1.5;
  font-size: 1.25rem;
  font-weight: 500;
`;

export const ModalBody = styled.div`
  padding: 15px;
`;

export const ButtonClose = styled.a`
  line-height: 1.5;
  font-size: 1.25rem;
  font-weight: 500;
  &:focus,
  &:hover {
    color: #000;
    text-decoration: none;
    cursor: pointer;
    opacity: 0.3;
  }
`;
