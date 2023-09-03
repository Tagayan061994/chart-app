import type { FC, ReactElement } from "react";
import { Handle, Position } from "reactflow";

interface ICustomNodeProps {
  data: {
    label: string;
    description: string;
    resolved: boolean;
  };
}

interface ICreateCustomNode {
  (props: { onConnect: any; handleChange: any }): React.FC<ICustomNodeProps>;
}

const createCustomNode: ICreateCustomNode = ({ onConnect, handleChange }) => {
  const CustomNode: React.FC<ICustomNodeProps> = ({ data }) => {
    const { label, description, resolved } = data;

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
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <button
          className={`text-light-blue px-1 py-1 rounded ${
            resolved ? "bg-light-green" : "bg-primary"
          }`}
          onClick={handleChange}
        >
          {resolved ? "Resolved" : "Not Resolved"}
        </button>
        <Handle
          type="target"
          position={Position.Bottom}
          style={{ background: "#555" }}
          onConnect={(params) => console.log("handle onConnect", params)}
          isConnectable
        />
      </div>
    );
  };

  return CustomNode;
};

export default createCustomNode;
