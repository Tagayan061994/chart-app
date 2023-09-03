import { Stack, Row, Icon } from "@/components/primitives";
import Container from "@/components/Container";
import NavLinks from "@/components/AppFooter/components/Navlinks";

import { mdiInstagram, mdiLinkedin, mdiFacebook } from "@mdi/js";

export const AppFooter = () => {
  return (
    <footer className="bg-dark-blue py-16">
      <Container>
        <Stack spacing="xl" className="px-20">
          <Row justify="between">
            <NavLinks />
          </Row>

          <div className="border-t-[1px] border-t-light-green opacity-20"></div>

          <Row justify="between">
            <p className="text-light-green text-xs opacity-50 max-w-[778px]">
              Experienced Front-End Developer with a creative flair for crafting
              captivating digital experiences. Over five years in the tech
              industry. Ive honed my skills in web development and user
              interface design. Alongside my coding journey. Im a passionate
              educator at heart, which led me to found KnowWay, an online
              educational startup. Fueled by my love for teaching. Im dedicated
              to empowering learners and making knowledge accessible to all.
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
