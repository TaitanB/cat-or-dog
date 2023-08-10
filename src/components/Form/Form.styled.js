import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

import tracks from '../../image/png/tracksRight.png';

export const FormStyled = styled(Form)`
  width: 990px;
  height: 50vh;
  padding: 30px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-image: url(${tracks});
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
`;

export const LabelStyled = styled.label`
  width: 600px;
  margin-bottom: 30px;
  position: relative;
  text-align: center;
`;

export const FieldStyled = styled(Field)`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid rgb(15 57 112);
`;

export const ErrorMessageStyled = styled(ErrorMessage)`
  color: red;
  position: absolute;
  text-align: center;
  left: 50%;
  transform: translate(-50%, 0);
`;

export const CheckboxStyled = styled(Field)`
  background-color: blue;
`;

export const FormBtn = styled.button`
  font-family: inherit;
  padding: 10px;
  border-radius: 10px;
  background-color: rgb(68 68 70);
  cursor: pointer;
  border: none;
  color: #f8eeee;
  font-size: 18px;
  font-weight: 700;
  text-shadow: -1px -1px 0px #212121, 3px 3px 0px #212121, 4px 4px 0px #00000055;
  transition: all 0.4s ease-in-out;

  :hover,
  :focus {
    scale: 0.95;
    background-color: #2684ff;
  }
`;

export const FormTitle = styled.h2`
  font-weight: 800;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

export const SendMessage = styled.div`
  text-align: center;
`;

export const MessageTitle = styled.p`
  margin-bottom: 10px;
`;

export const MessageField = styled.p`
  margin-bottom: 10px;
`;
