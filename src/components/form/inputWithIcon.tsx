import * as React from 'react';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import TextField from '@mui/material/TextField';

interface InputWithIconProps {
  name: string;
  startIcon: React.FC;
  endIcon?: React.FC | null;
  placeholder: string;
  type?: string;
  formData: any;
  handleInputChange: any;
  errors: any;
  touched: any;
  handleInputBlur: any;
}
const InputWithIcon: React.FC<InputWithIconProps> = ({
  name,
  startIcon,
  endIcon,
  placeholder,
  type = 'text',
  formData,
  handleInputChange,
  errors,
  touched,
  handleInputBlur,
}) => {
  const StartIconComponent = startIcon;

  const EndIconComponent = endIcon ? endIcon : null;

  const [password, setpassword] = React.useState(false);

  const HandleIconPassword = () => {
    return (
      <div className="cursor-pointer" onClick={() => setpassword(!password)}>
        {password ? (
          <RemoveRedEyeOutlinedIcon />
        ) : (
          <VisibilityOffOutlinedIcon />
        )}
      </div>
    );
  };

  return (
    <Box
      sx={{
        '& > :not(style)': { m: 1 },
      }}
    >
      <div style={{ width: '97%' }}>
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <StartIconComponent />
              </InputAdornment>
            ),
            endAdornment:
              EndIconComponent || type === 'password' ? (
                <InputAdornment position="end">
                  {type === 'password' ? (
                    <HandleIconPassword />
                  ) : (
                    <EndIconComponent />
                  )}
                </InputAdornment>
              ) : null,
          }}
          name={name}
          type={type === 'password' && password ? 'text' : type}
          variant="standard"
          placeholder={placeholder}
          value={formData[name]}
          onChange={handleInputChange}
          onBlur={() => handleInputBlur(name)}
          error={touched[name] && !!errors[name]}
          helperText={touched[name] && errors[name]}
          fullWidth
        />
      </div>
    </Box>
  );
};

export default InputWithIcon;
