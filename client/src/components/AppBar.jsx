import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(() => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

const AppBar = () => {
  const classes = useStyles();

  return (
    <>
      <MuiAppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h4" noWrap>
            Bonsai
          </Typography>
        </Toolbar>
      </MuiAppBar>
    </>
  );
}

export default AppBar