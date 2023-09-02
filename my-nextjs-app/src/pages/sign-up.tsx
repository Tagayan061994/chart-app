import clsx from 'clsx';
import Head from 'next/head';
import Image from 'next/image';
import {Row, Stack} from '@/components/primitives';
import SignUp from '@/components/SignUp';
import NavLinks from '@/components/SignUp/NavLinks';

import CargoAirPlanePic from '@/../public/auth/cargoAirPlane.jpg';

export default function SignUpPage() {
  return (
    <>
      <Head>
        <title>Cargonect/SignUp</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Row>
        <Image
          alt="cargo airplane"
          src={CargoAirPlanePic}
          unoptimized
          style={{
            width: '50vw',
            height: '100vh',
            objectFit: 'cover',
          }}
        />

        <Row
          align="center"
          className={clsx(
            'grow h-[100vh] overflow-auto py-10',
            'bg-[url("/auth/auth_bg.jpg")] bg-cover bg-no-repeat bg-right'
          )}
        >
          <Stack spacing="lg" className="grow">
            <SignUp />

            <NavLinks />
          </Stack>
        </Row>
      </Row>
    </>
  );
}
