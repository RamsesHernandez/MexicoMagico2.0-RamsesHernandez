import React from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import FormInput from '../CustomTextField/CustomTextField';

import usetStyles from './stylesAddressForm'

const AdrresForm = () => {
  const methods = useForm();
  const classes = usetStyles();

  return (
    <>
      <Typography variant='h6' gutterBottom>Domicilio de Entrega</Typography>
      <FormProvider { ...methods }>
        <form onSubmit=''>
          <Grid container spacing={3}>
            <FormInput name='firstName' label='Nombre' required='required'/>
            <FormInput name='lastName' label='Apellido' required='required'/>
            <FormInput name='address' label='Domicilio' required='required'/>
            <FormInput name='email' label='Correo Electronico' required='required'/>
            <FormInput name='city' label='Ciudad' required='required'/>
            <FormInput name='zipCode' label='Codigo Postal' required='required'/>
          </Grid>
        </form>
      </FormProvider>
    </>
  )
}

export default AdrresForm
