import React, { Component } from "react";
import { connect } from "react-redux";
import PageTemplate from "../templates/PageTemplate";
import BasketTemplate from "../templates/BasketTemplate";
import Paragraph from "../components/atoms/Paragraph/Paragraph";
import BasketItem from "../components/molecules/BasketItem/BasketItem";
import { fetchBasket } from "../actions/index";

class Basket extends Component {
  componentDidMount() {
    this.props.fetchBasketItems();
  }

  render() {
    const { basket } = this.props;
    if (basket) {
      return (
        <PageTemplate>
          <BasketTemplate>
            {basket.length > 0 ? (
              basket.map((product) => (
                <BasketItem
                  img={product.ImageURL}
                  name={product.Name}
                  price={product.Price}
                />
              ))
            ) : (
              <Paragraph big>Koszyk jest pusty.</Paragraph>
            )}
          </BasketTemplate>
        </PageTemplate>
      );
    } else {
      return <PageTemplate></PageTemplate>;
    }
  }
}

const mapStateToProps = ({ basket }) => ({ basket });

const mapDispatchToProps = (dispatch) => ({
  fetchBasketItems: () => dispatch(fetchBasket()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
