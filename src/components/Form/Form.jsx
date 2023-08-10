import React, { useEffect, useCallback } from 'react';
import { Formik, Field } from 'formik';
import { FaCat, FaDog } from 'react-icons/fa';
import toast from 'react-hot-toast';

import {
  FormStyled,
  FieldStyled,
  ErrorMessageStyled,
  CheckboxStyled,
  FormBtn,
  FormTitle,
  LabelStyled,
  SendMessage,
  MessageField,
  MessageTitle,
} from './Form.styled';

const initialValues = {
  name: '',
  email: '',
  comment: '',
  consent: true,
};

const FeedbackForm = ({ onCloseForm }) => {
  const handleSubmit = (values, { resetForm }) => {
    const { name, email, comment } = values;

    toast.success(
      <SendMessage>
        <MessageTitle>You provided the following information:</MessageTitle>
        <MessageField>
          <b>Name:</b> {name}
        </MessageField>
        <MessageField>
          <b>Email:</b> {email}
        </MessageField>
        <MessageField>
          <b>Comment:</b> {comment}
        </MessageField>
        <MessageField>
          <b>Thank you for your feedback, it is very important to us!</b>
        </MessageField>
      </SendMessage>,
      { duration: 5000 }
    );

    resetForm();
  };

  const validateForm = values => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Name is required';
    }

    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.comment) {
      errors.comment = 'Comment is required';
    }

    if (!values.consent) {
      errors.consent = 'Agree is required';
    }

    return errors;
  };

  const handleClose = useCallback(
    event => {
      if (event.code === 'Escape' || event.target.className === 'Overlay') {
        onCloseForm(event);
        document.body.style.overflow = 'auto';
      }
    },
    [onCloseForm]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleClose);

    return () => {
      window.removeEventListener('keydown', handleClose);
    };
  }, [handleClose]);

  return (
    <div className="Overlay" onClick={handleClose}>
      <Formik
        initialValues={initialValues}
        validate={validateForm}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <FormStyled>
            <FormTitle>
              <FaCat style={{ width: '24', height: '24' }} /> Write a letter{' '}
              <FaDog
                style={{
                  width: '28',
                  height: '28',
                  transform: 'scale(-1, 1)',
                }}
              />
            </FormTitle>
            <LabelStyled>
              Yor name:
              <FieldStyled
                type="text"
                name="name"
                placeholder="Enter your name"
              />
              <ErrorMessageStyled name="name" component="div" />
            </LabelStyled>

            <LabelStyled>
              How we can contact with you?
              <FieldStyled
                type="email"
                name="email"
                placeholder="Enter your email"
              />
              <ErrorMessageStyled name="email" component="div" />
            </LabelStyled>

            <LabelStyled>
              What do you want to ask or suggest?
              <Field
                as="textarea"
                name="comment"
                className="textarea"
                placeholder="Write your question or suggestion."
              />
              <ErrorMessageStyled name="comment" component="div" />
            </LabelStyled>

            <LabelStyled>
              <CheckboxStyled type="checkbox" name="consent" />
              I agree to the privacy policy.
              <ErrorMessageStyled name="consent" component="div" />
            </LabelStyled>

            <FormBtn type="submit" disabled={isSubmitting}>
              Send a letter
            </FormBtn>
          </FormStyled>
        )}
      </Formik>
    </div>
  );
};

export default FeedbackForm;
