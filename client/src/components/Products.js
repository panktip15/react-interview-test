import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import ProductCard from "./ProductCard.jsx";
import "./styles.css";

const GET_PRODUCTS = gql`
  query GetProducts {
    merchants {
      guid
      merchant
      products {
        id
        name
        price
        description
        color
        size
        image
      }
    }
  }
`;

const withProducts = (Component) => (props) => {
  return (
    <Query query={GET_PRODUCTS}>
      {({ loading, data }) => {
        return (
          <Component
            merchantsLoading={loading}
            merchants={data && data.merchants}
            {...props}
          />
        );
      }}
    </Query>
  );
};

class ProductsList extends Component {
  showProducts() {
    const { merchants, merchantsLoading } = this.props;

    if (!merchantsLoading && merchants && merchants.length > 0) {
      return merchants.map(({ products }) => {
        return (
          products &&
          products.length > 0 &&
          products.map((product) => {
            return (
              <Grid key={product.id} container justify="center">
                <ProductCard {...product} />
              </Grid>
            );
          })
        );
      });
    } else {
      return (
        <div>
          <h3>No products available</h3>
        </div>
      );
    }
  }

  render() {
    return <div>{this.showProducts()}</div>;
  }
}
export default withProducts(ProductsList);
