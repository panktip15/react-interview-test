import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
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

const useStyles = makeStyles(() => ({
  loading: {
    position: "absolute",
    top: "50%",
    right: "50%",
  },
}));

const ProductsLists = ({ addProduct }) => {
  const classes = useStyles();
  return (
    <Query query={GET_PRODUCTS}>
      {({ data, error, loading }) => {
        if (loading || !data) {
          return (
            <div className={classes.loading}>
              <CircularProgress size={40} thickness={4} />
              <br />
              Loading
            </div>
          );
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
};

export default ProductsLists;
