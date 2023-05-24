import styled from 'styled-components';

export const Title = styled.p`
  color: red;
  text-shadow: 1px 1px 2px brown;

  &:hover {
    cursor: pointer;
    transform: scale(1.02);
    text-shadow: 1px 1px 2px blue;
  }
`;

export const StyledBtn = styled.button`
  width: 80px;
  height: 50px;
  border-radius: 10px;
  font-size: medium;
`;

export const NativeText = styled.span`
  ${Title}:hover & {
    background-color: white;
  }
  /* color: ${({ isEndedBiz }) => {
    if (isEndedBiz === true) {
      return 'violet';
    } else {
      return 'green';
    }
  }}; */
  color: ${({ isEndedBiz }) => (isEndedBiz ? 'violet' : 'green')};
`;
