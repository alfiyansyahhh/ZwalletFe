import React, { useRef } from 'react';

import { TextField, Grid } from '@mui/material';

interface IInputPin {
  name: string;
  pin: string[];
  setPin: React.Dispatch<React.SetStateAction<string[]>>;
  handleInputChange: any;
}

const Component: React.FC<IInputPin> = ({
  name,
  pin,
  setPin,
  handleInputChange,
}) => {
  const inputRefs = useRef(pin.map(() => React.createRef<HTMLInputElement>()));

  const handlePinChange = (index: number, e: any) => {
    const { value } = e.target;
    if (/^[0-9]$/.test(value) && value.length <= 6) {
      const newPin = pin.map((pinValue, pinIndex) =>
        pinIndex === index ? value : pinValue
      );

      // Geser fokus ke kotak berikutnya jika nilai dimasukkan
      if (value !== '' && index < pin.length - 1) {
        inputRefs.current[index + 1].current.focus();
      }

      setPin(newPin);
    }
  };

  const handleBackspace = (index: number, e: any) => {
    if (e.key === 'Backspace' && index > 0) {
      if (pin[index] === '') {
        // Jika kotak saat ini kosong, hapus kotak sebelumnya
        const newPin = [...pin];
        newPin[index - 1] = '';
        setPin(newPin);
        inputRefs.current[index - 1].current.focus();
      } else {
        // Jika kotak saat ini terisi, hapus kotak saat ini
        const newPin = [...pin];
        newPin[index] = '';
        setPin(newPin);
        inputRefs.current[index].current.focus();
      }
    }
  };

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      direction="row"
      wrap="nowrap"
    >
      {pin.map((value, index) => (
        <Grid item key={index}>
          <TextField
            name={name}
            variant="outlined"
            inputRef={inputRefs.current[index]}
            fullWidth
            type="text"
            inputProps={{
              inputMode: 'numeric',
              pattern: '[0-9]*',
              style: { textAlign: 'center', fontSize: '30px' },
            }}
            value={value}
            onChange={(e) => handlePinChange(index, e)}
            onKeyDown={(e) => handleBackspace(index, e)}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Component;
