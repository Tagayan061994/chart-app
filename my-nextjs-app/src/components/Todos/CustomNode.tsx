// import type { FC } from "react";
// import { Handle, Position } from "reactflow";
// import { CheckBox } from "@/components/primitives/CheckBox";
// import { useDispatch } from "react-redux";
// import { updateResolved } from "@/store/slices/todoSlice";
// interface Props {
//   data: {
//     label: string;
//     description: string;
//     resolved: boolean;
//   };
//   onConnect: any;
// }

// const CustomNode: FC<Props> = ({ data, onConnect }) => {
//   const { label, description, resolved } = data;
//   const dispatch = useDispatch();

//   return (
//     <div className="bg-light-blue p-4 rounded-lg shadow-md w-64">
//       <Handle
//         type="target"
//         position={Position.Top}
//         style={{ background: "green" }}
//         onConnect={onConnect}
//         isConnectable
//       />
//       <h3 className="text-lg font-semibold mb-2">{label}</h3>
//       <p className="text-sm text-light-green mb-4">{description}</p>
//       <CheckBox
//         checked={resolved}
//         onClick={(checked) => {
//           dispatch(updateResolved(checked));
//         }}
//       />
//       <span
//         className={`text-light-blue px-1 py-1 rounded ${
//           resolved ? "bg-light-green" : "bg-primary"
//         }`}
//         onClick={() => console.log()}
//       >
//         {resolved ? "Resolved" : "Not Resolved"}
//       </span>
//       <Handle
//         type="target"
//         position={Position.Bottom}
//         style={{ background: "green" }}
//         onConnect={(params) => console.log("handle onConnect", params)}
//         isConnectable
//       />
//     </div>
//   );
// };

// export default CustomNode;
