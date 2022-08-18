/* eslint-disable array-callback-return */
import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'

import useStyles from './stylesCart'


const Cart = ({ cart }) => {
    //const isEmpty = !cart?.line_items.length
    const classes = useStyles();

    const EmptyCart = () => {
        <Typography variant="subtitle1">No tienes articulos en tu carrito, añade algunos.</Typography>
    };

    const FilledCart = () => {
        <>
            <Grid container spacing = {3}>
                {cart.line_items.map((item) => {
                    <Grid item xs={12} sm={4} key={item.id}>
                        <div>{item.name}</div>
                    </Grid>
                })}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">Carrito Vacio</Button>
                    <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Verificar</Button>
                </div>
            </div>
        </>
    };

    return (
    <Container>
        <div className={classes.toolbar} />
        <Typography className={classes.tittle} variant="h3">Tu Carrito</Typography>
        {<FilledCart />}
    </Container>
  )
}

export default Cart
