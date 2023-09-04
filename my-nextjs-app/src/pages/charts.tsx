import Head from "next/head";
import withAuth from "@/HOC/withAuth";

import Container from "@/components/Container";
import { Row, Col } from "@/components/primitives";

import BarChart from "@/components/charts/BarChart";
import PieCharts from "@/components/charts/PieChart";
import LineChart from "@/components/charts/LineChart";

const Charts = () => {
  return (
    <>
      <Head>
        <title>Charts</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container className="mt-10 mb-10">
        <Row className="gap-x-8">
          <Col>
            <BarChart />
          </Col>
          <Col>
            <PieCharts />
          </Col>
          <Col>
            <LineChart />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default withAuth(Charts);
