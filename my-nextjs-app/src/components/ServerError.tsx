import {Row, Stack, Button} from '@/components/primitives';
import Image from 'next/image';

import serverErrorPic from '@/../public/500.png';

const ServerError = () => {
  return (
    <Row
      justify="center"
      align="center"
      className="bg-[url('/auth/auth_bg.jpg')] bg-cover bg-no-repeat min-h-screen pt-10 pb-12"
    >
      <Stack spacing="3xl" width="400">
        <Stack spacing="lg" className="text-center">
          <h1 className="text-dark-blue text-5xl font-bold font-roobert">
            Server Error
          </h1>

          <div className="text-light-blue font-semibold text-lg">
            Oops, something went wrong. Try to refresh this page or feel free to
            contact us if the problem persists
          </div>
        </Stack>

        <Stack spacing="xl" className="w-full items-center">
          <Image
            src={serverErrorPic}
            alt="server error"
            unoptimized
            style={{width: 271, height: 350}}
          />

          <Button
            color="secondary"
            dark
            height="56"
            block
            onClick={() => location.reload()}
          >
            refresh page
          </Button>
        </Stack>
      </Stack>
    </Row>
  );
};

export default ServerError;
