import { useCallback } from "react";
import { Handle, Position } from "reactflow";

import { useDispatch } from "react-redux";
import { updateResolved } from "@/store/slices/todoSlice";

import { CheckBox } from "@/components/primitives/CheckBox";

interface ICustomNodeProps {
  id: string;
  data: {
    label: string;
    description: string;
    resolved: boolean;
  };
}

interface ICreateCustomNode {
  (onConnect: any, setNodes: any): React.FC<ICustomNodeProps>;
}

const createCustomNode: ICreateCustomNode = (onConnect, setNodes) => {
  const CustomNode: React.FC<ICustomNodeProps> = ({ data, id }) => {
    const { label, description, resolved } = data;
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
        <h3 className="text-lg font-semibold mb-2">{label}</h3>
        <p className="text-sm text-light-blue mb-4">{description}</p>
        <CheckBox checked={resolved} onClick={handleResolve} />
        <span
          className={`text-light-blue px-1 py-1 rounded ${
            resolved ? "bg-light-green" : "bg-primary"
          }`}
        >
          {resolved ? "Resolved" : "Not Resolved"}
        </span>
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
