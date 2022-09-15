import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { useContext } from 'react';
import { MainContext } from './mainContext';
import { useSelector } from 'react-redux';



export default function Review() {
    const { cartItems } = useSelector((state) => state.cart);
    let { 
        firstName,
        lastName,
        addressOne,
        addressTwo,
        city,
        state,
        zipCode,
        country,
        cardName, 
        cardNumber,
        expDate,
        lastFour, setLastFour } = useContext(MainContext);

    let addresses = [addressOne, city, state, zipCode, country];
    let addressesTwoStreets = [addressOne, addressTwo, city, state, zipCode, country]
    setLastFour((cardNumber.split("")).slice(15,20).join(""));
    let hiddenCardNumber = `xxxx-xxxx-xxxx-${lastFour}`;


    const payments = [
        { name: 'Card holder', detail: cardName },
        { name: 'Card number', detail: hiddenCardNumber },
        { name: 'Expiry date', detail: expDate },
    ];


    let subTotalSum = cartItems.reduce(
        (total, currentItem) => total = total + (currentItem.price * currentItem.cust_quantity), 0
        );

    let floatSubTotalSum = subTotalSum;
    const discountRate = .10;
    let discount = (floatSubTotalSum * discountRate);
    let tax = (.0725 * (floatSubTotalSum - discount));
    let total = (floatSubTotalSum + tax - discount);

    const subCosts = [
        { name: 'SubTotal', detail: subTotalSum},
        { name: 'Discount', detail: discount },
        { name: 'Tax', detail: tax },
        { name: 'Total', detail: total },
    ]

return (
    <React.Fragment>
        <Typography variant="h6" gutterBottom>
            Order summary
        </Typography>
        <List disablePadding>
            {cartItems.map((cartItem) => (
    
            <ListItem key={cartItem.brand} sx={{ py: 1, px: 0 }}>
                <ListItemText primary={`${cartItem.year} ${cartItem.brand}`} secondary={cartItem.varietal} />
                <Typography variant="body2">{`${cartItem.cust_quantity} @ $${cartItem.price} = $${cartItem.cust_quantity*cartItem.price}`}</Typography>
            </ListItem>
            ))}
            {subCosts.map((subCost) => (
                <ListItem key={subCost.name} sx={{ py: 0, px: 0 }}>
                <ListItemText primary={subCost.name} /> 
                    {/* <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        -${subCost.detail}
                    </Typography>
                    : */}
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        {/* if left of the && is true RETURN what's on the right of && */}
                        {subCost.name === "Discount" && "-" }${subCost.detail.toFixed(2)}
                    </Typography> 
                </ListItem>
            ))}
        </List>
        <Grid container spacing={-5}>
            <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                Billing Details
            </Typography>
            <Typography gutterBottom>{`${firstName} ${lastName}`}</Typography>
            {(addressTwo === "") && <Typography gutterBottom>{addresses.join(', ')}</Typography> }
            {(addressTwo !== "") && <Typography gutterBottom>{addressesTwoStreets.join(', ')}</Typography> }
            </Grid>
            <Grid item container direction="column" xs={12} sm={6}>
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                Payment Details
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