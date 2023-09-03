import Image from "next/image";
import Link from "next/link";

import SignInForm from "@/components/SignIn/components/SignInForm";
import { Stack, Row, Button } from "@/components/primitives";

import GoogleIconPic from "@/../public/auth/logos_google_icon.png";

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
        <Button
          color="white"
          xLarge
          block
          rounded
          className="shadow-[0_0_10px_#0000001a]"
        >
          <Image
            src={GoogleIconPic}
            alt="google_logo"
            width={24}
            height={24}
            className="mr-6"
          />
          continue with google
        </Button>

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
