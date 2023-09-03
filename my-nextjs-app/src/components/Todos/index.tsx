import React, { useCallback, useMemo, useState } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  Edge,
  Connection,
} from "reactflow";
import "reactflow/dist/style.css";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import type { NodeTypes } from "reactflow";
import type { FC, ChangeEvent } from "react";
import { Stack, Button, TextField } from "@/components/primitives";
import Container from "@/components/Container";
import createCustomNode from "./createNodeHOC";
import {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
} from "@/store/slices/todoSlice";

type NewTodo = {
  title: string;
  description: string;
  resolved: boolean;
};

const connectionLineStyle = { stroke: "#fff" };
const defaultViewport = { x: 0, y: 0, zoom: 0.5 };

const TodoFlowCanvas: FC = () => {
  const dispatch = useDispatch();
  const todos = useSelector(getTodos);
  const [nodes, setNodes, onNodesChange] = useNodesState(todos);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [newTodo, setNewTodo] = useState<NewTodo>({
    title: "",
    description: "",
    resolved: false,
  });

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const addNewTodo = () => {
    const id = `${new Date().getTime()}`;
    const newElement = {
      id,
      type: "special",
      position: {
        x: (Math.random() * window.innerWidth) / 2,
        y: (Math.random() * window.innerHeight) / 2,
      },
      data: {
        title: `${newTodo.title}\n${
          newTodo.resolved ? "Resolved" : "Unresolved"
        }`,
        description: newTodo.description,
        resolved: newTodo.resolved,
      },
    };
    setNodes((nds) => nds.concat(newElement));
    setNewTodo({ title: "", description: "", resolved: false });
    dispatch(addTodo(newElement));
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

  const handleChange = useCallback(
    ({ target: { value, name } }: ChangeEvent<HTMLInputElement>) => {
      setNewTodo((prevTodo) => ({ ...prevTodo, [name]: value }));
    },
    []
  );

  const CustomNode = useMemo(
    () => createCustomNode(onConnect, setNodes),
    [onConnect, setNodes]
  );

  const nodeTypes = useMemo(
    () => ({
      special: CustomNode,
    }),
    [CustomNode]
  );

  return (
    <Container className="w-screen h-full bg-primary overflow-hidden">
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

        <Button color="secondary" dark block height="44" onClick={addNewTodo}>
          Add Todo
        </Button>
      </Stack>
      <div className="w-full h-full bg-secondary">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          snapToGrid
          snapGrid={[10, 10]}
          connectionLineStyle={connectionLineStyle}
          defaultViewport={defaultViewport}
          attributionPosition="bottom-left"
        />
      </div>
    </Container>
  );
};

export default TodoFlowCanvas;
