import React from 'react';
import { Button, ButtonProps, ThemeProvider } from '@mui/material';
import { btnTheme } from 'constants/muiThemes';

interface IBasicBtn extends ButtonProps {
  className?: string;
}

const Component: React.FC<IBasicBtn> = (props) => {
  const { children, variant = 'contained', className } = props;
  console.log(className);

  return (
    <div className={className}>
      <ThemeProvider theme={btnTheme}>
        <Button variant={variant} {...props}>
          {children}
        </Button>
      </ThemeProvider>
    </div>
  );
};

export default Component;
