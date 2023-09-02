import React, { useCallback, useState } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  Edge,
  Connection,
} from "reactflow";
import "reactflow/dist/style.css";
import clsx from "clsx";
import type { NodeTypes } from "reactflow";
import type { FC, ChangeEvent } from "react";
import { Stack, Button, TextField } from "@/components/primitives";
import Container from "@/components/Container";

type Todo = {
  title: string;
  description: string;
  resolved: boolean;
};

const connectionLineStyle = { stroke: '#fff' };
const defaultViewport = { x: 0, y: 0, zoom: 1.5 };

const CustomNode = ({data}: any) => {
  console.log("data", data);
  return (
    <Stack>
      <div>{data.label}</div>
      <div style={{ marginTop: "10px" }}>
        <div className="child-div">Child 1</div>
        <div className="child-div">Child 2</div>
      </div>
    </Stack>
  );
};

const nodeTypes: NodeTypes = {
  special: CustomNode,
};

const initialNodes = [
  {
    id: "1",
    type: 'special',
    position: { x: 0, y: 0 },
    data: { label: "Add your first task" },
    style: { background: "#D6D5E6", color: "#333", padding: "10px" },
  },
];

const TodoFlowCanvas: FC = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [newTodo, setNewTodo] = useState<Todo>({
    title: "",
    description: "",
    resolved: false,
  });

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const addTodo = () => {
    const id = `${new Date().getTime()}`;
    const newElement = {
      id,
      position: {
        x: (Math.random() * window.innerWidth) / 2,
        y: (Math.random() * window.innerHeight) / 2,
      },
      data: {
        label: `${newTodo.title}\n${newTodo.description}\n${
          newTodo.resolved ? "Resolved" : "Unresolved"
        }`,
      },
    };
    setNodes((nds) => nds.concat(newElement));
    setNewTodo({ title: "", description: "", resolved: false });
  };

  const onElementsRemove = useCallback(
    (elementsToRemove: any) => {
      setNodes((prevNodes) =>
        prevNodes.filter(
          (nd) => !elementsToRemove.find((el: any) => el.id === nd.id)
        )
      );
    },
    [setNodes]
  );

  const handleChange = ({
    target: { value, name },
  }: ChangeEvent<HTMLInputElement>) => {
    setNewTodo({ ...newTodo, [name]: value });
  };

  return (
    <Container className="w-screen h-screen bg-primary overflow-hidden">
      <Stack className="w-[50%] h-[200px] pt-4 bg-primary mb-10">
        <TextField
          name="title"
          value={newTodo.title}
          placeholder="Enter task title"
          onChange={handleChange}
        />

        <TextField
          name="description"
          value={newTodo.description}
          placeholder="Enter task description"
          onChange={handleChange}
        />

        <Button color="secondary" dark block height="44" onClick={addTodo}>
          Add Todo
        </Button>
      </Stack>
      <div className="w-full h-screen bg-secondary">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          // onElementClick={onElementsRemove}
          snapToGrid
          snapGrid={[20,20]}
          connectionLineStyle={connectionLineStyle}
          defaultViewport={defaultViewport}
          fitView
          attributionPosition="bottom-left"
        />
      </div>
    </Container>
  );
};

export default TodoFlowCanvas;
