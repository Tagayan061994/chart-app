import clsx from "clsx";
import Head from "next/head";
import Image from "next/image";
import { Row, Stack } from "@/components/primitives";
import SignUpForm from "@/components/SignUp";

export default function SignUpPage() {
  return (
    <>
      <Head>
        <title>Chart/SignUp</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Row>
        <Image
          alt="Chart"
          width={50}
          height={50}
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo7kHT9XYYCnVNBIrKcz7Z-b3mwtnJj-0y_tsgvEc0k8WdHVJA4T2jskYT6nElVcskZpY&usqp=CAU"
          }
          unoptimized
          style={{
            width: "30vw",
            height: "100vh",
            objectFit: "contain",
          }}
        />

        <Row
          align="center"
          className={clsx(
            "grow h-[100vh] overflow-auto py-10",
            'bg-[url("/auth/auth_bg.jpg")] bg-cover bg-no-repeat bg-right'
          )}
        >
          <Stack spacing="lg" className="grow">
            <SignUpForm />
          </Stack>
        </Row>
      </Row>
    </>
  );
}
