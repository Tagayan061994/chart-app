import { Fragment } from "react";
import { Row, Icon } from "@/components/primitives";
import NavLink from "@/components/AppHeader/components/NavLink";

import { mdiCopyright } from "@mdi/js";

const navLinks = [
  { to: "/charts", text: "Charts", width: 92 },
  { to: "/todos", text: "Todos", width: 109.66 },
];

const NavLinks = () => {
  return (
    <Row align="center" className="gap-x-8 z-30">
      {navLinks.map((link) => (
        <Fragment key={link.to}>
          <NavLink to={link.to} width={link.width}>
            {link.text}
          </NavLink>
        </Fragment>
      ))}

      <Icon name={mdiCopyright} color="primary" />
    </Row>
  );
};

export default NavLinks;
