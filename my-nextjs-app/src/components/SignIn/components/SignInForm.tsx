import type { FormEvent, ChangeEvent } from "react";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/store/slices/user";
import {
  getLoading,
  setLoading,
  getSignInValues,
  setSignInValues,
} from "@/store/slices/signIn";
import { Stack, TextField, Button, Alert } from "@/components/primitives";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase.config";

import { AxiosError } from "axios";
import { useRouter } from "next/router";

const LoginForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const loading = useSelector(getLoading);
  const signInValues = useSelector(getSignInValues);
  const { email, password } = signInValues;

  const [showError, setShowError] = useState(false);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setShowError(false);
    const { name, value } = target;

    dispatch(setSignInValues({ ...signInValues, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    signIn();
  };

  const handleSignIn = async () => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      if (user && user.email) {
        dispatch(
          setUser({
            email: user.email,
          })
        );

        const token = await user.getIdToken();
        localStorage.setItem("userToken", token);
      }

      alert("User signed in successfully!");
      router.push("./");
    } catch (error) {
      alert(error);
    }
  };

  const signIn = async () => {
    try {
      dispatch(setLoading(true));
      handleSignIn();
      dispatch(setLoading(false));
    } catch (err) {
      if (err instanceof AxiosError && err.response) {
        const { status } = err.response;
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
            onChange={handleChange}
          />

          <TextField
            value={password}
            type="password"
            name="password"
            placeholder="Password *"
            onChange={handleChange}
          />
        </Stack>

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
