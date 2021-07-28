import React, { Component } from "react";
import { connect } from "react-redux";
import PageTemplate from "../templates/PageTemplate";
import CategoryTemplate from "../templates/CategoryTemplate";
import ProductCard from "../components/molecules/ProductCard/ProductCard";
import { fetchProducts } from "../actions";
import { Redirect } from "react-router-dom";

class Category extends Component {
  state = {
    category: "",
    redirect: false,
    productID: null,
  };

  componentDidMount() {
    this.props.fetchProductsData();
    this.setState({ category: this.props.match.params.category });
  }

  componentDidUpdate() {
    if (this.state.category !== this.props.match.params.category) {
      this.props.fetchProductsData();
    }
  }

  redirectSite = async (productID) => {
    await this.setState({ redirect: true, productID: productID });
  };

  render() {
    const { products } = this.props;
    const { redirect, productID } = this.state;
    const { category } = this.props.match.params;

    if (redirect) {
      return <Redirect to={`/${category}/${productID}`} />;
    }

    return (
      <PageTemplate>
        <CategoryTemplate title={category}>
          {products &&
            products.map((product) => (
              <ProductCard
                img={product.ImageURL}
                name={product.Name}
                price={product.Price}
                productID={product.ProductID}
                clickMe={this.redirectSite}
              />
            ))}
        </CategoryTemplate>
      </PageTemplate>
    );
  }
}

const mapStateToProps = ({ products }) => ({ products });

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchProductsData: () =>
      dispatch(fetchProducts(ownProps.match.params.category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
