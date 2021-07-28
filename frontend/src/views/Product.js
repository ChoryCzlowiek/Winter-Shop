import React, { Component } from "react";
import { connect } from "react-redux";
import PageTemplate from "../templates/PageTemplate";
import ProductTemplate from "../templates/ProductTemplate";
import ProductDetails from "../components/organisms/ProductDetails/ProductDetails";
import { fetchProduct } from "../actions/index";

class Product extends Component {
  componentDidMount() {
    this.props.fetchProductData();
  }

  render() {
    const { product, match } = this.props;

    if (product === undefined) {
      return (
        <PageTemplate>
          <ProductTemplate>
            <div></div>
          </ProductTemplate>
        </PageTemplate>
      );
    }

    return (
      <PageTemplate>
        <ProductTemplate>
          <ProductDetails
            category={match.params.category}
            name={product.Name}
            price={product.Price}
            img={product.Image}
            description={product.Description}
            productID={product.ProductID}
          />
        </ProductTemplate>
      </PageTemplate>
    );
  }
}

const mapStateToProps = ({ product }) => ({ product });

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchProductData: () =>
    dispatch(
      fetchProduct(
        ownProps.match.params.category,
        ownProps.match.params.productID
      )
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
