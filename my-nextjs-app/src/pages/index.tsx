import Head from "next/head";

import Container from "@/components/Container";

import { Row, Stack } from "@/components/primitives";

export default function Home() {
  return (
    <>
      <Head>
        <title>Charts</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container className="mb-10">
        <h1 className="text-5xl font-bold font-roobert text-center">
          TodoFlowCanvas - Next.js, TypeScript, and ReactFlow Project
        </h1>
        <Stack className="gap-y-8">
          <Row>
            <h4 className="font-bold font-roobert text-center">Overview</h4>
            <p>
              Overview TodoFlowCanvas is a modern, responsive web application
              built using Next.js, TypeScript, and ReactFlow. The application
              serves as a task management tool that visualizes tasks in a
              flowchart-like interface. It allows users to create, update, and
              delete tasks, represented as nodes in a flowchart. The application
              also features a Charts page that provides various visualizations
              related to task data.
            </p>
          </Row>
          <Row>
            <h4 className="font-bold font-roobert text-center">Features</h4>
            <ul>
              <li>
                Authentication: Implements a simple authentication flow using
                Firebase, allowing users to sign up and sign in.
              </li>
              <li>
                Task Management: Users can add, update, and delete tasks. Each
                task is represented as a node in a flowchart.
              </li>
              <li>
                Custom Nodes: Utilizes a higher-order component to create custom
                nodes with Tailwind CSS, featuring a title, description, and a
                button to mark the task as resolved or unresolved.
              </li>
              <li>
                Charts: Provides three different types of charts (e.g., bar,
                pie, line) to visualize task-related data, such as the count of
                tasks, resolved tasks, and connected nodes.
              </li>
              <li>
                State Management: Uses Redux Toolkit for state management,
                including a slice for todos with actions and selectors.
              </li>
            </ul>
          </Row>
          <Stack>
            <h4 className="font-bold font-roobert text-center">
              Installation and Setup
            </h4>
            <ul>
              <li>
                <h4 className="font-bold font-roobert">Clone the Repository</h4>
                <p> git clone https://github.com/Tagayan061994/chart-app</p>
              </li>
              <li>
                <h4 className="font-bold font-roobert">Install Dependencies</h4>
                <p> cd TodoFlowCanvas npm install</p>
              </li>

              <li>
                <h4 className="font-bold font-roobert">
                  Environment Variables
                </h4>
                <p>
                  Create a .env.local file in the root directory and add your
                  Firebase configuration keys.
                </p>
                <p> NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here</p>
              </li>

              <li>
                <h4 className="font-bold font-roobert">Run the Application</h4>
                <p>npm run dev</p>
              </li>
            </ul>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
