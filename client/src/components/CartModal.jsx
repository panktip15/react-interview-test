import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from "@material-ui/core/IconButton";
import Dialog from '@material-ui/core/Dialog';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles((theme) => ({
  dialogTitle: {
    margin: 'auto'
  },
  table: {
    margin: theme.spacing(1, 0, 4),
  },
  image: {
    height: 50
  },
  addIconButton: {
    marginRight: theme.spacing(1)
  },
  removeIconButton: {
    marginLeft: theme.spacing(1)
  }
}));

function CartModal({
  open,
  handleClose,
  cart,
  removeProduct,
  updateProduct
}) {
  const classes = useStyles();
  if (cart.length === 0) handleClose();
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="cart-dialog-title"
      fullWidth
      maxWidth='md'
      className={classes.dialog}
    >
      <DialogTitle
        id="cart-dialog-title"
        className={classes.dialogTitle}
      >
        Shopping Cart
      </DialogTitle>
      <Table className={classes.table}>
        <TableBody>
          {cart.map(({ image, name, price, quantity, ID }) => {
            return (
              <TableRow key={ID}>
                <TableCell>
                  <img
                    className={classes.image}
                    src={image}
                    alt={name}
                  />
                </TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>
                  <IconButton
                    aria-label="increase product count"
                    className={classes.addIconButton}
                    onClick={() => updateProduct(ID, quantity + 1)}
                  >
                    <AddIcon fontSize="small" />
                  </IconButton>
                  {quantity}
                  <IconButton
                    aria-label="decrease product count"
                    className={classes.removeIconButton}
                    onClick={() => updateProduct(ID, quantity - 1)} >
                    <RemoveIcon fontSize="small" />
                  </IconButton>
                </TableCell>
                <TableCell>${(quantity * price).toFixed(2)}</TableCell>
                <TableCell>
                  <IconButton
                    aria-label="remove product"
                    onClick={() => removeProduct(ID)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            )
          })}
          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell />
            <TableCell />
            <TableCell>$ {cart.reduce((total, { price, quantity }) => total + (price * quantity), 0).toFixed(2)}</TableCell>
            <TableCell />
          </TableRow>
        </TableBody>
      </Table>
    </Dialog>
  );
}

export default CartModal;
