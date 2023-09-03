import Link from "next/link";

import SignInForm from "@/components/SignIn/components/SignInForm";
import { Stack, Row } from "@/components/primitives";

export const SignIn = () => {
  return (
    <Stack spacing="2xl" width="400" className="mx-auto">
      <Stack spacing="lg">
        <h1 className="text-dark-blue text-5xl text-center font-bold font-roobert">
          Sign In
        </h1>

        <span className="text-light-blue text-center">
          Sign in with your CargoNect email and password
        </span>
      </Stack>

      <SignInForm />

      <Stack spacing="lg">
        <Row
          justify="center"
          className="text-light-blue text-sm text-center gap-x-2"
        >
          Don’t have an account?
          <Link
            href="/sign-up"
            className="text-secondary font-bold hover:underline"
          >
            Create Now
          </Link>
        </Row>
      </Stack>
    </Stack>
  );
};
