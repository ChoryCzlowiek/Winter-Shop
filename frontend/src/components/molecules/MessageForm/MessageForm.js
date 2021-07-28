import React from "react";
import styled from "styled-components";
import { Formik } from "formik";
import { connect } from "react-redux";
import Input from "../../atoms/Input/Input";
import Title from "../../atoms/Title/Title";
import Button from "../../atoms/Button/Button";
import { sendMessage } from "../../../actions/index";

const StyledForm = styled.form`
  margin: 1rem auto 3rem;
  width: 60%;
`;

const StyledTextArea = styled(Input)`
  min-height: 8rem;
`;

const MessageForm = ({ sendMessageData }) => (
  <div>
    <Title small orange category>
      Napisz do nas!
    </Title>
    <Formik
      initialValues={{
        Name: "",
        LastName: "",
        Email: "",
        Message: "",
      }}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        sendMessageData(values);
        resetForm({ values: "" });
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <StyledForm onSubmit={handleSubmit}>
          <Input
            type="text"
            name="Name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.Name}
            placeholder="Imię"
            required
          />
          <Input
            type="text"
            name="LastName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.LastName}
            placeholder="Nazwisko"
            required
          />
          <Input
            type="text"
            name="Email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.Email}
            placeholder="E-mail"
            required
          />
          <StyledTextArea
            as="textarea"
            name="Message"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.Message}
            placeholder="Napisz wiadomość"
            required
          />
          <Button type="submit">Wyślij</Button>
        </StyledForm>
      )}
    </Formik>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  sendMessageData: (messageContent) => dispatch(sendMessage(messageContent)),
});

export default connect(null, mapDispatchToProps)(MessageForm);
