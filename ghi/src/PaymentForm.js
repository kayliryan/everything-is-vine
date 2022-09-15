import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { MainContext } from './mainContext';
import { useContext } from 'react';

export default function PaymentForm() {
  const {
    cardName,
    setCardName,
    cardNumber,
    setCardNumber,
    expDate,
    setExpDate,
    cvv,
    setCVV,
  } = useContext(MainContext);

  function handleCardNameChange(e) {
    setCardName(e.target.value);
  }

  function handleCardNumberChange(e) {
    if (e.target.value.length > 19) {
      return;
    }
    if (
      (e.target.value.length === 4 && cardNumber.length === 3) ||
      (e.target.value.length === 9 && cardNumber.length === 8) ||
      (e.target.value.length === 14 && cardNumber.length === 13)
    ) {
      e.target.value += ' ';
    }
    setCardNumber(e.target.value);
  }

  function handleExpDateChange(e) {
    if (e.target.value.length > 5) {
      return;
    }
    if (e.target.value.length === 2 && expDate.length === 1) {
      e.target.value += '/';
    }
    setExpDate(e.target.value);
  }

  function handleCVVChange(e) {
    if (e.target.value.length > 3) {
      return;
    }
    setCVV(e.target.value);
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
            value={cardName}
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
            value={cardNumber}
            onChange={handleCardNumberChange}
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            fullWidth
            autoComplete="cc-number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            placeholder="MM/YY"
            label="Expiry date"
            value={expDate}
            onChange={handleExpDateChange}
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
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
            value={cvv}
            onChange={handleCVVChange}
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
