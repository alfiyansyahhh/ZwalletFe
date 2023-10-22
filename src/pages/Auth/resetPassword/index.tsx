import React from 'react';

import AuthLayout from 'layout/AuthLayout';
import Sections from '../components/SectionsAuth';
import InputWithIcon from 'components/form/inputWithIcon';
import { BasicButton } from 'components/button';

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

import useAuth from 'hooks/useAuth';

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
        judul="Did You Forgot Your Password?
        Don’t Worry, You Can Reset Your
        Password In a Minutes."
        keterangan="To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens."
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

          <BasicButton
            className="w-full mt-9"
            type="submit"
            disabled={!isFormValid}
          >
            Confirm
          </BasicButton>
        </form>
      </Sections>
    </AuthLayout>
  );
};

export default Component;
