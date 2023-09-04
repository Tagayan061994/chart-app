import SignUpForm from "@/components/SignUp/components/SignUpForm";
import { Stack } from "@/components/primitives";

export const SignUp = () => {
  return (
    <Stack spacing="2xl" width="400" className="mx-auto">
      <Stack spacing="lg">
        <h1 className="text-dark-blue text-5xl text-center font-bold font-roobert">
          Sign Up
        </h1>

        <span className="text-light-blue text-center">
          Sign in with your email and password
        </span>
      </Stack>

      <SignUpForm />
    </Stack>
  );
};
