import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCart from '@material-ui/icons/ShoppingCart';


const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  input: {
    color: theme.palette.common.white,
    height: 40
  },
  section: {
    display: 'flex',
  },
}));

const AppBar = () => {
  const classes = useStyles();

  return (
    <MuiAppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" noWrap>
          Bonsai
          </Typography>
        <div className={classes.toolbar}>

          <TextField
            id="input-with-icon-textfield"
            variant="filled"
            InputProps={{
              className: classes.input,
              startAdornment: (
                <InputAdornment position="start" >
                  <SearchIcon className={classes.input} />
                </InputAdornment>
              ),
            }}
          />
          <div className={classes.section}>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </div>
      </Toolbar>
    </MuiAppBar>
  );
}

export default AppBar