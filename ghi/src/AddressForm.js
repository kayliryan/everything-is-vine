import * as React from 'react';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useContext } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addBillingInfo, clearBillingInfo } from './store/billingInfoReducer';
import PaymentForm from './PaymentForm';
import { Button } from '@mui/material';

export default function AddressForm() {
    let { billingInfo } = useSelector((state) => state.cart);
    let [firstName, setFirstName] = useState("")
    let [lastName, setLastName] = useState("")
    let [addressOne, setAddressOne] = useState("")
    let [addressTwo, setAddressTwo] = useState("")
    let [city, setCity] = useState("")
    let [state, setState] = useState("")
    let [zipCode, setZipCode] = useState("")
    let [country, setCountry] = useState("")
    const dispatch = useDispatch();


    function handleFirstNameChange(e) {
        setFirstName(e.target.value)
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value)
    }

    function handleAddressOneChange(e) {
        setAddressOne(e.target.value)
    }

    function handleAddressTwoChange(e) {
        setAddressTwo(e.target.value)
    }

    function handleCityChange(e) {
        setCity(e.target.value)
    }

    function handleStateChange(e) {
        setState(e.target.value)
    }
    
    function handleZipCodeChange(e) {
        setZipCode(e.target.value)
    }

    function handleCountryChange(e) {
        setCountry(e.target.value)
    }

    function handleSubmit() {
        billingInfo = {
            "first_name": firstName,
            "last_name": lastName,
            "address_one": addressOne,
            "address_two": addressTwo,
            "city": city,
            "state": state,
            "zip_code": zipCode,
            "country": country,
        }
        if (billingInfo.length > 1) {
            dispatch(clearBillingInfo())
        }
        dispatch(addBillingInfo(billingInfo))
        return <PaymentForm />;
    }




  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Billing address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            value = {firstName}
            onChange={handleFirstNameChange}
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            value = {lastName}
            onChange={handleLastNameChange}
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            value = {addressOne}
            onChange={handleAddressOneChange}
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            value = {addressTwo}
            onChange={handleAddressTwoChange}
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            value = {city}
            onChange={handleCityChange}
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            value = {state}
            onChange={handleStateChange}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required = {true}
            id="zip"
            name="zip"
            label="Zip / Postal code"
            value = {zipCode}
            onChange={handleZipCodeChange}
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            value = {country}
            onChange={handleCountryChange}
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
        <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{ mt: 3, ml: 1 }}
            >
            Next
        </Button>
        {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
}