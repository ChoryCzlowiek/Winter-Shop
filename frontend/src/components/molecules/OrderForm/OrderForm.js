import React, { Component } from "react";
import { Formik } from "formik";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
import { sendOrder } from "../../../actions/index";

const StyledForm = styled.form`
  margin: 1rem auto;
  width: 35%;
  padding: 2rem 3rem;
  background-color: ${({ theme }) => theme.dirtyWhite};
  border-radius: 20px;
`;

const StyledButton = styled(Button)`
  margin: 2rem 0 0;
`;

class OrderForm extends Component {
  state = {
    redirect: false,
  };

  redirectToHome() {
    this.setState({ redirect: true });
  }

  render() {
    const { sendOrderData, basket } = this.props;
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

    return (
      <Formik
        initialValues={{
          Name: "",
          LastName: "",
          Street: "",
          BuildingNumber: "",
          ApartmentNumber: null,
          ZIPCode: "",
          City: "",
          Telephone: null,
          Email: "",
        }}
        onSubmit={(values) => {
          console.log(values);
          console.log(basket);
          sendOrderData(values, basket);
          this.redirectToHome();
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
              name="Street"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.Street}
              placeholder="Ulica"
              required
            />
            <Input
              type="text"
              name="BuildingNumber"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.BuildingNumber}
              placeholder="Numer budynku"
              required
            />
            <Input
              type="number"
              name="ApartmentNumber"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.ApartmentNumber}
              placeholder="Numer mieszkania"
            />
            <Input
              type="text"
              name="ZIPCode"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.ZIPCode}
              placeholder="Kod pocztowy"
              required
            />
            <Input
              type="text"
              name="City"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.City}
              placeholder="Miejscowość"
              required
            />
            <Input
              type="number"
              name="Telephone"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.Telephone}
              placeholder="Numer telefonu"
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
            <StyledButton type="submit" secondary>
              Złóż zamówienie
            </StyledButton>
          </StyledForm>
        )}
      </Formik>
    );
  }
}

const mapStateToProps = ({ basket }) => ({ basket });

const mapDispatchToProps = (dispatch) => ({
  sendOrderData: (orderData, products) =>
    dispatch(sendOrder(orderData, products)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
