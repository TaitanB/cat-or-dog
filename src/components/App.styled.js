import styled from 'styled-components';

export const LoaderContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
`;

export const ErrorMessage = styled.div`
  background-color: rgba(255, 255, 255, 0.85);
  padding: 30px;
  font-size: 28px;
`;
