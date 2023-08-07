import "reactflow/dist/style.css";
import { useCallback, useState } from "react";
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Edge,
  Node,
} from "reactflow";
import { Table, TableProps } from "./Table";
import { Card } from "./Card";

interface FlowTableProps extends TableProps {
  onTableDataChange: (data: any) => void;
}

const handleTableDataChange = (data: any) => {
  setTableData(data); //  Debug para esta funcao nao declarada
};

const initialNodes: Node[] = [
  {
    id: "1",
    position: { x: 100, y: 100 },
    data: {
      label: <Card />,
    },
    style: {
      width: 450,
      border: 0,
      borderRadius: 10,
    },
  },
];

const initialEdges: Edge[] = [{ id: "e1-2", source: "1", target: "2" }];

export default function FlowApp() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [tableData, setTableData] = useState<any[]>([]); // DEBUG no State armazenamento

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div style={{ width: "100vw", height: "100vh", margin: 0 }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Controls />
        <Background variant="dots" gap={26} size={1} />
      </ReactFlow>
    </div>
  );
}
