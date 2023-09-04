import { useCallback } from "react";
import { Handle, Position } from "reactflow";

import { useDispatch } from "react-redux";
import { updateResolved } from "@/store/slices/todoSlice";

import { CheckBox, Row } from "@/components/primitives";

interface ICustomNodeProps {
  id: string;
  data: {
    title: string;
    description: string;
    resolved: boolean;
  };
}

interface ICreateCustomNode {
  (onConnect: any, setNodes: any): React.FC<ICustomNodeProps>;
}

const createCustomNode: ICreateCustomNode = (onConnect, setNodes) => {
  const CustomNode: React.FC<ICustomNodeProps> = ({ data, id }) => {
    const { title, description, resolved } = data;
    const dispatch = useDispatch();

    const handleResolve = useCallback(
      (checked: boolean) => {
        setNodes((prevNodes: any) =>
          prevNodes.map((nd: any) => {
            if (id === nd.id) {
              return {
                ...nd,
                data: {
                  ...nd.data,
                  resolved: checked,
                },
              };
            }
            return nd;
          })
        );
        dispatch(updateResolved({ id, resolved: checked }));
      },
      [dispatch, id]
    );

    return (
      <div className="bg-light-blue p-4 rounded-lg shadow-md w-64">
        <Handle
          type="target"
          position={Position.Top}
          style={{ background: "#555" }}
          onConnect={onConnect}
          isConnectable
        />
        <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-white mb-4">{description}</p>
        <Row justify="between" className="mb-4">
          <CheckBox checked={resolved} onClick={handleResolve} />
          <p
            className={`text-light-blue px-1 py-1 rounded ${
              resolved ? "bg-light-green" : "bg-primary"
            }`}
          >
            {resolved ? "Resolved" : "Not Resolved"}
          </p>
        </Row>
        <Handle
          type="source"
          position={Position.Bottom}
          style={{ background: "#555" }}
          onConnect={onConnect}
          isConnectable
        />
      </div>
    );
  };

  return CustomNode;
};

export default createCustomNode;
