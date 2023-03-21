// Exenple
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import { logIn } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { Form, Box, Title } from './LoginFormStyled';
import TextField from '@mui/material/TextField';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      dispatch(logIn({ values }));
    },
  });

  return (
    <Box>
      <Form onSubmit={formik.handleSubmit}>
        <Title>Login form</Title>
        <TextField
          sx={{
            height: 65,
          }}
          placeholder="Enter email"
          fullWidth
          size="small"
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
          placeholder="Enter password"
          fullWidth
          size="small"
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
          Enter
        </Button>
      </Form>
    </Box>
  );
};
