import type {FormEvent, ChangeEvent, FocusEvent} from 'react';
import type {SignInValues} from '@/store/slices/signIn';

import api from '@/api';
// import {useInitialization} from '@/hooks';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setUser, setSignedIn, setAuthenticated} from '@/store/slices/auth';
import {
  getLoading,
  setLoading,
  getSignInValues,
  setSignInValues,
  getSignInFormValid,
} from '@/store/slices/signIn';
import {
  Stack,
  TextField,
  Button,
  Row,
  CheckBox,
  Alert,
} from '@/components/primitives';
import Link from 'next/link';

import {AxiosError} from 'axios';

const LoginForm = () => {
  const dispatch = useDispatch();
  // const {sendRequest} = useInitialization();
  const loading = useSelector(getLoading);
  const signInValues = useSelector(getSignInValues);
  const {email, password} = signInValues;

  const formValid = useSelector(getSignInFormValid);
  const [checked, setChecked] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleBlur = ({target: {name}}: FocusEvent<HTMLInputElement>) => {
    // if (name === 'email') getEmailMessage();
    // else if (name === 'password') getPasswordMessage();
  };

  const handleFocus = ({target: {name}}: FocusEvent<HTMLInputElement>) => {
    // resetError(name as keyof SignInValues);
  };

  const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    setShowError(false);
    const {name, value} = target;

    // if (name === 'email') validateEmail(value);
    // else if (name === 'password') validatePassword(value);

    dispatch(setSignInValues({...signInValues, [name]: value}));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formValid) {
      // getEmailMessage();
      // getPasswordMessage();
    } else {
      signIn();
    }
  };

  const signIn = async () => {
    try {
      dispatch(setLoading(true));

      const {data} = await api.post('/auth/login', signInValues);
      const {status, role} = data;

      if (status === 'stex nayel') {
        dispatch(setAuthenticated(true));
        // await sendRequest();
      } else if (status) {
        dispatch(setSignedIn(true));
      }

      dispatch(setUser(data));
      dispatch(setLoading(false));
    } catch (err) {
      if (err instanceof AxiosError && err.response) {
        const {status} = err.response;
        if (status === 404 || status === 422) {
          setShowError(true);
        }
      }
      dispatch(setLoading(false));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing="lg">
        <Stack>
          <TextField
            value={email}
            name="email"
            placeholder="Email *"
            // errorMessage={errors.email}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
          />

          <TextField
            value={password}
            type="password"
            name="password"
            placeholder="Password *"
            // errorMessage={errors.password}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </Stack>

        <Row align="center" justify="between">
          <CheckBox
            checked={checked}
            label="Remember me"
            onClick={() => setChecked(!checked)}
          />

          <Link
            href="/forgot-password"
            className="text-primary text-sm hover:underline"
          >
            Forgot password?
          </Link>
        </Row>

        {showError && <Alert text="Incorrect email or password" />}

        <Button
          type="submit"
          color="secondary"
          height="56"
          block
          dark
          loading={loading}
          loaderSize={30}
        >
          sign in
        </Button>
      </Stack>
    </form>
  );
};

export default LoginForm;
