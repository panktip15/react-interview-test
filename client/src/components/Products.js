import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import ProductCard from "./ProductCard.jsx";
import { Typography } from "@material-ui/core";

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

const useStyles = makeStyles((theme) => ({
  loading: {
    position: "absolute",
    top: "50%",
    right: "50%",
  },
  wrapper: {
    margin: theme.spacing(0, 6),
  },
  merchantName: {
    textAlign: "center",
    padding: theme.spacing(2),
    marginTop: theme.spacing(4),
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
              merchants.map(({ products, merchant }) => {
                return (
                  <div key={merchant} className={classes.wrapper}>
                    <Typography
                      className={classes.merchantName}
                      variant="h5"
                      color="primary"
                    >
                      {merchant}
                    </Typography>
                    <Grid key={products.id} container justify="center">
                      {products &&
                        products.length > 0 &&
                        products.map((product) => {
                          return (
                            <ProductCard
                              key={product.id}
                              {...product}
                              addProduct={addProduct}
                            />
                          );
                        })}
                    </Grid>
                  </div>
                );
              })}
          </>
        );
      }}
    </Query>
  );
};

export default ProductsLists;
