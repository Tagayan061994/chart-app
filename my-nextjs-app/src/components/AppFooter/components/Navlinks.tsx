import {Row, Stack, Icon} from '@/components/primitives';
import NavLink from '@/components/AppFooter/components/NavLink';

import {mdiPhone, mdiEmail, mdiMapMarker} from '@mdi/js';

const navLinks = [
  {
    title: 'Contact Us',
    links: [
      {icon: mdiPhone, text: '+928759375', to: '/contact-us'},
      {icon: mdiEmail, text: 'info@gmail.com', to: '/contact-us'},
      {icon: mdiMapMarker, text: 'Address short', to: '/contact-us'},
    ],
  },
  {
    title: 'Company',
    links: [
      {icon: '', text: 'About Us', to: '/contact-us'},
      {icon: '', text: 'Our Partners', to: '/contact-us'},
      {icon: '', text: 'Contact Us', to: '/contact-us'},
    ],
  },
  {
    title: 'Lorem Ipsum',
    links: [
      {icon: '', text: 'Terms & Conditions', to: '/contact-us'},
      {icon: '', text: 'FAQs', to: '/contact-us'},
      {icon: '', text: 'News', to: '/contact-us'},
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
