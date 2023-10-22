import React from 'react';
import AuthLayout from 'layout/AuthLayout';
import Sections from '../components/SectionsAuth';

import InputPin from 'components/form/inputPin';
import { BasicButton } from 'components/button';
import useAuth from 'hooks/useAuth';

const Component: React.FC = () => {
  let { pin, setPin, isPinComplete, handleSubmit, handleInputChange } =
    useAuth();

  return (
    <AuthLayout>
      <Sections
        judul="Secure Your Account, Your Wallet,
        and Your Data With 6 Digits PIN
        That You Created Yourself."
        keterangan="Create 6 digits pin to secure all your money and your data in Zwallet app. Keep it secret and don’t tell anyone about your Zwallet account password and the PIN."
      >
        <form onSubmit={handleSubmit}>
          <InputPin name="pin" {...{ pin, setPin, handleInputChange }} />
          <BasicButton
            className="w-full mt-9"
            type="submit"
            disabled={!isPinComplete}
          >
            Confirm
          </BasicButton>
        </form>
      </Sections>
    </AuthLayout>
  );
};

export default Component;
