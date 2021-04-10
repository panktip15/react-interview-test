import React from "react";
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

const ProductsLists = ({ addProduct }) => (
  <Query query={GET_PRODUCTS}>
    {({ data, error, loading }) => {
      if (loading || !data) {
        return <div>loading...</div>;
      }

      if (error) {
        return (
          <div>
            <pre>{error.message}</pre>
          </div>
        );
      }
      const merchants = (data && data.merchants) || [];
      return (
        <>
          {merchants &&
            merchants.length > 0 &&
            merchants.map(({ products }) => {
              return (
                products &&
                products.length > 0 &&
                products.map((product) => {
                  return (
                    <Grid key={product.id} container justify="center">
                      <ProductCard {...product} addProduct={addProduct} />
                    </Grid>
                  );
                })
              );
            })}
        </>
      );
    }}
  </Query>
);

export default ProductsLists;
