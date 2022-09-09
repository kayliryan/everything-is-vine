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
        { name: 'Card holder', detail: cardName },
        { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
        { name: 'Expiry date', detail: expDate },
    ];

    
    const formatter = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,      
        maximumFractionDigits: 2,
    });

    let subTotalSum = cartItems.reduce(
        (total, currentItem) => total = total + (currentItem.price * currentItem.cust_quantity), 0
        );
    subTotalSum = parseFloat(formatter.format(subTotalSum));
    const discountRate = .10;
    let discount = formatter.format(subTotalSum * discountRate);
    let tax = parseFloat(formatter.format(.0725 * (parseFloat(subTotalSum)-discount)));
    // tax = formatter.format(tax);
    let total = formatter.format(subTotalSum + tax - discount);

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
                <Typography variant="body2">{`${cartItem.cust_quantity} @ $${cartItem.price} each`}</Typography>
            </ListItem>
            ))}
            {subCosts.map((subCost) => (
                <ListItem key={subCost.name} sx={{ py: 0, px: 0 }}>
                <ListItemText primary={subCost.name} /> {subCost.name === "Discount" ? 
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        -${subCost.detail}
                    </Typography>
                    :
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        ${subCost.detail}
                    </Typography> }
                </ListItem>
            ))}
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