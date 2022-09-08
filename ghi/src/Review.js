import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { useContext } from 'react';
import { MainContext } from './mainContext';
import { useSelector } from 'react-redux';

const products = [
  {
    name: 'Product 1',
    desc: 'A nice thing',
    price: '$9.99',
  },
  {
    name: 'Product 2',
    desc: 'Another thing',
    price: '$3.45',
  },
  {
    name: 'Product 3',
    desc: 'Something else',
    price: '$6.51',
  },
  {
    name: 'Product 4',
    desc: 'Best thing of all',
    price: '$14.11',
  },
  { name: 'Pickup', desc: 'Ready in 24 hours', price: 'Free' },
];



export default function Review() {

    const { cartItems } = useSelector((state) => state.cart);

    const { 
        firstName, setFirstName, 
        lastName, setLastName, 
        addressOne, setAddressOne,
        // addressTwo, setAddressTwo,
        city, setCity,
        state, setState,
        zipCode ,setZipCode,
        country, setCountry,
        cardName, setCardName, 
        cardNumber, setCardNumber, 
        expDate, setExpDate,
        cvv, setCVV  } = useContext(MainContext);

    let addresses = [addressOne, city, state, zipCode, country];

    const payments = [
        { name: 'Card holder', detail: {cardName} },
        { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
        { name: 'Expiry date', detail: {expDate} },
      ];


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cartItems.map((cartItem) => (
          <ListItem key={cartItem.brand} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={`${cartItem.year} ${cartItem.brand}`} secondary={cartItem.varietal} />
            <Typography variant="body2">{`${cartItem.cust_quantity} @ $${cartItem.price} each`}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $34.06
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Billing
          </Typography>
          <Typography gutterBottom>{`${firstName} ${lastName}`}</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}