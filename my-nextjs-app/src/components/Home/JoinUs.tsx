import Image from 'next/image';
import {Row, Stack, Button} from '@/components/primitives';

import img from '../../../public/join_us.jpg';

const JoinUs = () => {
  return (
    <section className="relative">
      <Image src={img} alt="" priority className="z-[-1]" />

      <Row
        justify="center"
        className="absolute top-1/2 -translate-y-1/2 left-0 right-0"
      >
        <Stack className="items-center">
          <h2 className="capitalize text-white text-5xl font-bold mb-4">
            Join to our platform
          </h2>

          <h4 className="text-2xl text-light-green mb-8">
            Like thousands in the community
          </h4>

          <Button width="440" xLarge>
            join now
          </Button>
        </Stack>
      </Row>
    </section>
  );
};

export default JoinUs;
