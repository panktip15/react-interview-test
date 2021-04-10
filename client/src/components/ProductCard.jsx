import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 350,
    margin: theme.spacing(1),
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  content: {
    height: 100,
  },
  cardActions: {
    display: 'flex',
    justifyContent: "flex-end",
    margin: theme.spacing(0, 1)
  },
  image: {
    height: 50,
    marginRight: theme.spacing(1)
  },
}));

const ProductCard = ({ color, description, image, name, price, size, id, addProduct }) => {
  const classes = useStyles();
  const [showAlert, setShowAlert] = useState(false);

  const handleAddProduct = () => {
    addProduct({ id, name, price, image })
    setShowAlert(true)
  }
  const handleCloseAlert = () => setShowAlert(false)

  return (
    <>
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
        <CardContent >
          <Typography className={classes.content} variant="body2" color="textSecondary" component="p">
            Color: {color} <br />
            Size: {size} <br />
            {description}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions} >
          <Button variant="contained" color="primary" onClick={handleAddProduct}>Add to Cart</Button>
        </CardActions>
      </Card>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={showAlert}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
        message={<><img className={classes.image} src={image} alt="image of" /> {name} was added to your cart</>}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleCloseAlert}
          >
            <CloseIcon fontSize="small" />
          </IconButton>}
      />
    </>
  );
}

export default ProductCard;