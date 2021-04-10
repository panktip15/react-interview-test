import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Button from '@material-ui/core/Button';
import { useUpdateCart } from '../hooks/cart';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 345,
    margin: theme.spacing(1),
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  cardActions: {
    display: 'flex',
    justifyContent: "space-between",
    margin: theme.spacing(0, 1)
  }
}));

const ProductCard = ({ color, description, image, name, price, size, id }) => {
  const classes = useStyles();
  const { addProduct, cart, total } = useUpdateCart();
  console.log({ cart, total })
  return (
    <Card className={classes.root}>
      <CardHeader
        title={name}
        subheader={`Price: ${price}`}
      />
      <CardMedia
        className={classes.media}
        image={image}
        title={name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Color: {color} <br />
          Size: {size} <br />
          {description}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions} >
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Button variant="contained" color="primary" onClick={() => addProduct(id)}>Buy</Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;