import React, { useState, useEffect } from 'react'
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core'
import AddressForm from '../AddressForm/AddressForm';
import PaymentForm from '../PaymentForm/PaymentForm';
import ConfirmationForm from '../ConfirmationForm/ConfirmationForm';

import useStyles from './stylesCheckout'
import { commerce } from '../../lib/commerce';

const steps = ['Domicilio de Entrega', 'Detalle de Pago'];

const Checkout = ({ cart }) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {type:'cart'});
        console.log(token);

        setCheckoutToken(token);
      } catch (error) {

      }
    }

    generateToken();
  }, []);

  const Form = () => activeStep === 0
    ? <AddressForm />
    : <PaymentForm />

  return (
    <>
    <div className={classes.toolbar} />
    <main className={classes.layout}>
        <Paper className={classes.paper}>
            <Typography variant='h4' align='center'>Checkout</Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
                {steps.map((step) => (
                    <Step key={step}>
                        <StepLabel>{step}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length ? <ConfirmationForm /> : <Form />}
        </Paper>
    </main>
    </>
  )
}


export default Checkout
