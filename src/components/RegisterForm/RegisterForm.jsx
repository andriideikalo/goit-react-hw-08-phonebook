//
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import { register } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { Form, Box, Title } from './RegisterFormStyled';
import TextField from '@mui/material/TextField';

const validationSchema = yup.object({
  name: yup.string('Enter your Name').required('Name is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(6, 'Password should be of minimum 6 characters length')
    .required('Password is required'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      dispatch(register(values));
    },
  });

  return (
    <Box>
      <Form onSubmit={formik.handleSubmit}>
        <Title>Register form</Title>
        <TextField
          sx={{ height: 65 }}
          placeholder="Enter your name"
          fullWidth
          size="small"
          margin="none"
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          sx={{ height: 65 }}
          placeholder="Enter your email"
          fullWidth
          size="small"
          margin="none"
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          sx={{ height: 65 }}
          placeholder="Enter your password"
          fullWidth
          size="small"
          margin="none"
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          To register
        </Button>
      </Form>
    </Box>
  );
};
