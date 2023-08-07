import "./App.css";
import { useState } from "react";
import {
  bodyStyled,
  tablesGridContainer,
  flowGridContainer,
} from "./constants/Styled";
import { Grid, Box } from "@mui/material";
import { TableTitle } from "./components/TableTitle";
import { Table } from "./components/Table";
import FlowApp from "./components/FlowApp";

const App: React.FC = () => {
  const [tableCount, setTableCount] = useState<number>(1);

  const addTable = () => {
    setTableCount((prevCount) => prevCount + 1);
  };
  return (
    <>
      <Box sx={bodyStyled}>
        <Grid container sx={tablesGridContainer}>
          <TableTitle addTable={addTable} />
          {Array.from({ length: tableCount }).map((_, index) => (
            <Table key={index + 1} tableCount={index + 1} />
          ))}
        </Grid>
        <Grid container sx={flowGridContainer}>
          <FlowApp />
        </Grid>
      </Box>
    </>
  );
};

export default App;
