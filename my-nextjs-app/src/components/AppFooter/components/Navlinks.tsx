import { Row, Stack, Icon } from "@/components/primitives";
import NavLink from "@/components/AppFooter/components/NavLink";

import {
  mdiPhone,
  mdiEmail,
  mdiLinkedin,
  mdiCastEducation,
  mdiGithub,
} from "@mdi/js";

const navLinks = [
  {
    title: "Linkedin",
    links: [
      { icon: mdiPhone, text: "+37499940606", to: "/" },
      {
        icon: mdiEmail,
        text: "info@gmail.com",
        to: "https://www.google.com/intl/ru/gmail/about/",
      },
      {
        icon: mdiLinkedin,
        text: "Hakob tagayan",
        to: "https://www.linkedin.com/in/hakob-tagayan/",
      },
    ],
  },
  {
    title: "My Projects KnowWay",
    links: [
      { icon: mdiCastEducation, text: "KnowwWay", to: "https://knowway.am/" },
    ],
  },
  {
    title: "GitHub",
    links: [
      {
        icon: mdiGithub,
        text: "Tagayan061994",
        to: "https://github.com/Tagayan061994",
      },
    ],
  },
];

const NavLinks = () => {
  return (
    <Row className="gap-x-[120px]">
      {navLinks.map((link) => (
        <Stack key={link.title}>
          <h6 className="text-white font-bold">{link.title}</h6>

          <Stack>
            {link.links.map((subLink) => (
              <NavLink key={subLink.text} to={subLink.to}>
                {subLink.icon && (
                  <Icon
                    name={subLink.icon}
                    color="white"
                    dense
                    className="mr-2"
                  />
                )}
                <span className="opacity-70">{subLink.text}</span>
              </NavLink>
            ))}
          </Stack>
        </Stack>
      ))}
    </Row>
  );
};

export default NavLinks;
