import React from 'react';

import AuthLayout from 'layout/AuthLayout';
import Sections from '../components/SectionsAuth';
import InputWithIcon from 'components/form/inputWithIcon';
import { BasicButton } from 'components/button';

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LockPersonOutlinedIcon from '@mui/icons-material/LockPersonOutlined';

import useAuth from 'hooks/useAuth';
import UtilsText from '../components/utilsText';

const Component: React.FC = () => {
  const {
    handleSubmit,
    errors,
    touched,
    handleInputChange,
    handleInputBlur,
    isFormValid,
  } = useAuth();

  return (
    <AuthLayout>
      <Sections
        judul=" Start Accessing Banking Needs With All Devices and All Platforms With
        30.000+ Users"
        keterangan="  Transfering money is eassier than ever, you can access Zwallet wherever
        you are. Desktop, laptop, mobile phone? we cover all of that for you!"
      >
        <form onSubmit={handleSubmit} className="grid gap-4">
          <InputWithIcon
            name="username"
            startIcon={PersonOutlineOutlinedIcon}
            placeholder="Enter your username"
            errors={errors}
            touched={touched}
            formData
            handleInputChange={handleInputChange}
            handleInputBlur={handleInputBlur}
          />
          <InputWithIcon
            name="email"
            startIcon={EmailOutlinedIcon}
            placeholder="Enter your e-mail"
            errors={errors}
            touched={touched}
            formData
            handleInputChange={handleInputChange}
            handleInputBlur={handleInputBlur}
          />
          <InputWithIcon
            name="password"
            startIcon={LockPersonOutlinedIcon}
            type="password"
            placeholder="Create your password"
            errors={errors}
            touched={touched}
            formData
            handleInputChange={handleInputChange}
            handleInputBlur={handleInputBlur}
          />
          <BasicButton
            className="w-full mt-8"
            type="submit"
            disabled={!isFormValid}
          >
            Sign Up
          </BasicButton>

          <UtilsText
            text=" Already have an account?"
            buttonName="Let’s Login"
            to="/login"
          />
        </form>
      </Sections>
    </AuthLayout>
  );
};

export default Component;
