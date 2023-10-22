import React from 'react';

import AuthLayout from 'layout/AuthLayout';
import Sections from '../components/SectionsAuth';
import InputWithIcon from 'components/form/inputWithIcon';
import { BasicButton } from 'components/button';

import LockPersonOutlinedIcon from '@mui/icons-material/LockPersonOutlined';

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
        keterangan="Now you can create a new password for your Zwallet account. Type your password twice so we can confirm your new passsword."
      >
        <form onSubmit={handleSubmit} className="grid gap-4">
          <InputWithIcon
            name="password"
            startIcon={LockPersonOutlinedIcon}
            type="password"
            placeholder="Create new password"
            errors={errors}
            touched={touched}
            formData
            handleInputChange={handleInputChange}
            handleInputBlur={handleInputBlur}
          />
          <InputWithIcon
            name="confirmPassword"
            startIcon={LockPersonOutlinedIcon}
            type="password"
            placeholder="Confirm your new password"
            errors={errors}
            touched={touched}
            formData
            handleInputChange={handleInputChange}
            handleInputBlur={handleInputBlur}
          />

          <BasicButton
            className="w-full mt-6"
            type="submit"
            disabled={!isFormValid}
          >
            Reset Password
          </BasicButton>
        </form>
      </Sections>
    </AuthLayout>
  );
};

export default Component;
