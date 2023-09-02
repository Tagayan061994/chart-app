import {Row, Stack, Button} from '@/components/primitives';
import Image from 'next/image';

import notFoundPic from '@/../public/404.png';

const NotFound = () => {
  return (
    <Row
      justify="center"
      align="center"
      className="bg-[url('/auth/auth_bg.jpg')] bg-cover bg-no-repeat min-h-screen pt-10 pb-12"
    >
      <Stack spacing="3xl" width="400">
        <Stack spacing="lg" className="text-center">
          <h1 className="text-dark-blue text-5xl font-bold font-roobert">
            Not Found
          </h1>

          <div className="text-light-blue font-semibold text-lg">
            Ooops. It looks like the page doesn’t exist
          </div>
        </Stack>

        <Stack spacing="xl" className="w-full items-center">
          <Image
            src={notFoundPic}
            alt="not found"
            unoptimized
            style={{width: 271, height: 350}}
          />

          <Button color="secondary" dark height="56" block to="/">
            Get me out of here
          </Button>
        </Stack>
      </Stack>
    </Row>
  );
};

export default NotFound;
