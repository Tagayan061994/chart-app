import {Stack, Row, Icon} from '@/components/primitives';
import Container from '@/components/Container';
import NavLinks from '@/components/AppFooter/components/Navlinks';
import SubscriptionBox from '@/components/AppFooter/components/SubscriptionBox';

import {mdiInstagram, mdiLinkedin, mdiFacebook} from '@mdi/js';

export const AppFooter = () => {
  return (
    <footer className="bg-dark-blue py-16">
      <Container>
        <Stack spacing="xl" className="px-20">
          <Row justify="between">
            <NavLinks />

            <SubscriptionBox />
          </Row>

          <div className="border-t-[1px] border-t-light-green opacity-20"></div>

          <Row justify="between">
            <p className="text-light-green text-xs opacity-50 max-w-[778px]">
              Lorem ipsum dolor sit amet consectetur. Nisi facilisi lectus velit
              eget eget. Donec faucibus posuere scelerisque euismod donec.
              Laoreet tincidunt diam mi id duis volutpat. Egestas urna massa sem
              quisque sed sed feugiat adipiscing. Egestas pretium massa mi a sed
              lectus
            </p>

            <Row className="gap-x-4">
              <Icon name={mdiInstagram} color="light-green" />
              <Icon name={mdiLinkedin} color="light-green" />
              <Icon name={mdiFacebook} color="light-green" />
            </Row>
          </Row>
        </Stack>
      </Container>
    </footer>
  );
};
