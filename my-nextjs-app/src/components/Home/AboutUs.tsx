import Image from 'next/image';
import {Row, Stack} from '@/components/primitives';
import Container from '@/components/Container';

const AboutUs = () => {
  return (
    <section className="pt-[120px] pb-[52px]">
      <Container>
        <Row justify="between" align="center" className="px-20">
          <Stack width="560">
            <h2 className="capitalize text-dark-blue text-5xl font-roobert font-bold">
              about us
            </h2>

            <p className="text-light-blue">
              Lorem ipsum dolor sit amet consectetur. Id libero non adipiscing
              volutpat tempus id. Tortor sociis in amet mauris ultrices.
              Pulvinar arcu mauris aliquet fringilla odio turpis. Vel vel ac
              enim tincidunt sed bibendum consequat at. Dolor risus massa leo
              morbi integer. Nunc nulla risus sed augue in gravida at. Non
              maecenas arcu libero velit turpis nibh. Scelerisque odio tellus
              non tristique sollicitudin vitae quisque morbi. Quis aliquam
              tellus adipiscing pulvinar ipsum massa dictum platea. Morbi
              tincidunt nunc tincidunt magna netus id mi. Rutrum eget integer et
              mattis vitae ac consequat suscipit ac. Habitasse morbi nibh risus
              volutpat. Consectetur enim eu in porta platea urna hendrerit elit.
              Senectus blandit.
            </p>
          </Stack>

          <div className="relative bg-primary w-[450px] h-[400px] rounded-2xl">
            <Image
              src="/airplane.jpg"
              alt="airplane"
              width={450}
              height={400}
              className="absolute -top-3 -left-3 rounded-2xl"
            />
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
