import Image from "next/image";

import { useDispatch, useSelector } from "react-redux";
import { getUserEmail, setUser } from "@/store/slices/user";
import { Row, Col, Button } from "@/components/primitives";

import Container from "@/components/Container";
import NavLinks from "@/components/AppHeader/components/NavLinks";
import NavLink from "@/components/AppHeader/components/NavLink";

import { useRouter } from "next/router";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";

import useCheckToken from "@/hook/useCheckToken";

export const AppHeader = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const token = useCheckToken();
  const userEmail = useSelector(getUserEmail);

  const handleLogout = async () => {
    try {
      if (auth) {
        await signOut(auth);

        localStorage.removeItem("userToken");
        dispatch(
          setUser({
            email: "",
          })
        );
        router.push("/sign-in");
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <header className="py-8">
      <Container>
        <Row justify="between" align="center">
          <Col cols="auto" className="bg-primary">
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
              {token ? (
                <>
                  <Col cols="auto">
                    <NavLinks />
                  </Col>

                  <Row align="center" className="gap-x-6">
                    <div className="h-4">{userEmail}</div>
                    <Button
                      color="primary"
                      large
                      width="130"
                      dark
                      onClick={handleLogout}
                    >
                      log out
                    </Button>
                  </Row>
                </>
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
