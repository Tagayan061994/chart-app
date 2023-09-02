import {useSelector} from 'react-redux';
// import {getAuthenticated} from '@/store/slices/auth';
import {Row, Col, Button} from '@/components/primitives';
import Image from 'next/image';
import Container from '@/components/Container';
import NavLinks from '@/components/AppHeader/components/NavLinks';
import NavLink from '@/components/AppHeader/components/NavLink';

export const AppHeader = () => {
  const authenticated = 'useSelector(getAuthenticated)';

  return (
    <header className="py-8">
      <Container>
        <Row justify="between" align="center">
          <Col cols="auto" className='bg-primary'>
            <NavLink to="/">
              <Image
                src="/reactflow.png"
                alt="company logo"
                width={170}
                height={28}
                priority
              />
            </NavLink>
          </Col>

          <Col cols="8">
            <Row justify="between" align="center">
              <Col cols="auto">
                <NavLinks />
              </Col>

              {authenticated ? (
                <Row align="center" className="gap-x-6">
                  <div className="h-4 border-[1px] border-light-green">
                    authenticated
                  </div>
                </Row>
              ) : (
                <Row className="gap-x-6">
                  <Button color="primary" large width="130" dark to="/sign-in">
                    sign in
                  </Button>

                  <Button
                    color="secondary"
                    large
                    width="130"
                    outlined
                    to="/sign-up"
                  >
                    sign up
                  </Button>
                </Row>
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </header>
  );
};
