import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'stores';
import { userLogin } from 'stores/actions/authActions';
import { IUserLoginBodyData, IUserLoginResponse } from 'stores/types/authTypes';
import * as Yup from 'yup';
import { useLocation } from 'react-router-dom';

const useAuth = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const authState = useSelector((state: RootState) => state.auth);

  const [pin, setPin] = useState(['', '', '', '', '', '']);

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    pin,
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [touched, setTouched] = useState<Partial<FormData>>({});
  const [isFormValid, setIsFormValid] = useState(false);

  const isPinComplete = pin.every((value) => value !== '');

  // Memantau perubahan pada pin dan memperbarui formData
  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      pin: pin,
    }));
    validateForm('pin', pin);
    // eslint-disable-next-line
  }, [pin]);

  const validationRole = {
    username: Yup.string().required('Username wajib diisi'),
    email: Yup.string()
      .email('Email tidak valid')
      .required('Email wajib diisi'),
    password: Yup.string()
      .required('Password harus diisi')
      .min(8, 'Password minimal 8 karakter')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/,
        'Password harus memenuhi persyaratan: setidaknya satu huruf kecil, satu huruf besar, satu angka, dan satu karakter khusus'
      ),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref('password')],
      'Passwords must match'
    ),
  };

  const validationSchemaRegister = Yup.object({
    username: validationRole.username,
    email: validationRole.email,
    password: validationRole.password,
  });

  const validationSchemaLogin = Yup.object({
    email: validationRole.email,
    password: validationRole.password,
  });

  const validationSchemaForgetPass = Yup.object({
    email: validationRole.email,
  });

  const validationSchemaNewPassword = Yup.object({
    password: validationRole.password,
    confirmPassword: validationRole.confirmPassword,
  });

  const validationSchemaDefault = Yup.object();

  const validationSchemas = {
    '/login': validationSchemaLogin,
    '/register': validationSchemaRegister,
    '/forgotPassword': validationSchemaForgetPass,
    '/createnewpassword': validationSchemaNewPassword,
    // tambahkan path dan skema validasi sesuai kebutuhan
    // ...
  };

  const path = location.pathname;
  const validationSchema = validationSchemas[path] || validationSchemaDefault;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: name === 'pin' ? pin : value });

    // Validasi formulir saat input berubah
    validateForm(name, value);
  };

  const validateForm = (name: string, value: any) => {
    // Periksa apakah seluruh formulir valid
    setIsFormValid(validationSchema.isValidSync(formData));

    try {
      validationSchema.validateSyncAt(
        name,
        { [name]: value },
        { abortEarly: false }
      );
      setErrors({ ...errors, [name]: '' });
    } catch (error) {
      setErrors({
        ...errors,
        [name]: (error as Yup.ValidationError).errors,
      });
    }

    if (validationSchema.isValidSync(formData)) {
      setErrors({});
    } else {
      setIsFormValid(false);
    }
  };

  const handleInputBlur = (name: string) => {
    setTouched({ ...touched, [name]: true });
    // Validasi formulir saat input kehilangan fokus (onBlur)
    validateForm(name, formData[name]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lakukan sesuatu dengan data formulir jika valid
    if (isFormValid) {
      console.log('Data formulir valid:', formData);
    } else {
      console.log('Data formulir tidak valid', formData);
    }
  };

  const handleUserLogin = useCallback(
    (
      bodyData: IUserLoginBodyData,
      callback?: (data: IUserLoginResponse) => void
    ) => {
      dispatch(userLogin(bodyData, callback));
    },
    [dispatch]
  );

  return {
    authState,
    userLogin: handleUserLogin,
    handleSubmit,
    errors,
    touched,
    handleInputChange,
    handleInputBlur,
    isFormValid,
    pin,
    setPin,
    isPinComplete,
  };
};

export default useAuth;
