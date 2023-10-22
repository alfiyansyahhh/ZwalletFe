import React from 'react';
import { useNavigate } from 'react-router-dom';

import AuthLayout from 'layout/AuthLayout';
import Sections from '../components/SectionsAuth';
import InputWithIcon from 'components/form/inputWithIcon';
import { BasicButton } from 'components/button';

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
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

  const Navigate = useNavigate();

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
            placeholder="Enter your password"
            errors={errors}
            touched={touched}
            formData
            handleInputChange={handleInputChange}
            handleInputBlur={handleInputBlur}
          />
          <div
            className="text-end mb-4 cursor-pointer mt-[-15px]"
            onClick={() => Navigate('/forgotPassword')}
          >
            Forgot password?
          </div>

          <BasicButton className="w-full" type="submit" disabled={!isFormValid}>
            Login
          </BasicButton>

          <UtilsText
            text="Don’t have an account? Let’s"
            buttonName="Sign up"
            to="/register"
          />
        </form>
      </Sections>
    </AuthLayout>
  );
};

export default Component;
