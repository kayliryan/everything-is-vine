import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { MainContext } from './mainContext';
import { useContext } from 'react';

export default function PaymentForm() {

    const { 
        cardName, setCardName, 
        cardNumber, setCardNumber, 
        expDate, setExpDate,
        cvv, setCVV } = useContext(MainContext);

    function handleCardNameChange(e) {
        setCardName(e.target.value)
    }

    function handleCardNumberChange(e) {
        setCardNumber(e.target.value)
    }

    function handleExpDateChange(e) {
        setExpDate(e.target.value)
    }

    function handleCVVChange(e) {
        setCVV(e.target.value)
    }


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            value = {cardName}
            onChange={handleCardNameChange}
            fullWidth
            autoComplete="cc-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            value = {cardNumber}
            onChange={handleCardNumberChange}
            fullWidth
            autoComplete="cc-number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            value = {expDate}
            onChange={handleExpDateChange}
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            value = {cvv}
            onChange={handleCVVChange}
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}