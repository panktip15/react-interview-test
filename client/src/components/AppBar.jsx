import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import ShoppingCart from '@material-ui/icons/ShoppingCart';


const useStyles = makeStyles(() => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'center',
  },
  cart: {
    border: "1px solid black",
    borderRadius: '5px',
    position: "fixed",
    right: 0,
    top: '50%'
  },
}));

const AppBar = ({ cartItems }) => {
  const classes = useStyles();

  return (
    <MuiAppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h4" noWrap>
          Bonsai
          </Typography>
        <div className={classes.cart}>
          <IconButton>
            <Badge badgeContent={cartItems} color="secondary">
              <ShoppingCart fontSize="large" />
            </Badge>
          </IconButton>
        </div>

      </Toolbar>
    </MuiAppBar>
  );
}

export default AppBar