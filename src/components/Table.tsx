import {
  tablesHeaderStyled,
  tableContentStyled,
  tableFooter,
} from "../constants/Styled";
import { Grid, TextField, Typography, Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useState, useEffect } from "react";

export interface TableProps {
  tableCount: number;
  onTableDataChange: (data: any) => void;
}

interface Column {
  id: number;
  name: string;
}

export const Table: React.FC<TableProps> = ({
  tableCount,
  onTableDataChange,
}) => {
  const [tableName, setTableName] = useState<string>(`Table_${tableCount}`);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [updateTableName, setUpdateTableName] = useState<string>(tableName);
  const [tables, setTables] = useState<string[]>([`Table_${tableCount}`]);
  const [columns, setColumns] = useState<Column[]>([
    { id: 1, name: "Column_1" },
  ]);
  const [nextColumnId, setNextColumnId] = useState<number>(2);

  useEffect(() => {
    if (typeof tableCount !== "undefined") {
      setTableName(`Table_${tableCount}`);
    }
  }, [tableCount]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleTableNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateTableName(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setTableName(updateTableName);
      setIsEditing(false);
    }
  };

  const handleDeleteTable = () => {
    setTables((prevTables) =>
      prevTables.filter((table) => table !== tableName)
    );
    setColumns([]);
    setNextColumnId(1);
  };

  const handleAddColumn = () => {
    setColumns((prevColumns) => [
      ...prevColumns,
      { id: nextColumnId, name: `Column_${nextColumnId}` },
    ]);
    setNextColumnId((prevId) => prevId + 1);
  };

  const handleDeleteColumn = (id: number) => {
    setColumns((prevColumns) => {
      const newColumns = prevColumns.filter((column) => column.id !== id);
      return newColumns.map((column, index) => ({
        ...column,
        id: index + 1,
        name: `Column_${index + 1}`,
      }));
    });
    setNextColumnId((prevId) => prevId - 1);
  };

  return (
    <>
      {tables.map((table) => (
        <Grid container sx={tablesHeaderStyled} key={table}>
          <Grid item>
            {isEditing ? (
              <TextField
                variant="outlined"
                label={tableName}
                size="small"
                margin="dense"
                value={updateTableName}
                onChange={handleTableNameChange}
                onKeyDown={handleKeyDown}
                autoFocus
              />
            ) : (
              <Typography
                sx={{ paddingLeft: 2, color: "#3c3c3c", fontWeight: "600" }}
              >
                {tableName}
              </Typography>
            )}
          </Grid>
          <Grid item>
            {isEditing ? (
              <IconButton onClick={handleDeleteTable}>
                <DeleteIcon />
              </IconButton>
            ) : (
              <IconButton onClick={handleEditClick}>
                <EditIcon />
              </IconButton>
            )}
          </Grid>
        </Grid>
      ))}

      {columns.map((column) => (
        <Grid container sx={tableContentStyled} key={column.id}>
          <Grid item>
            <TextField
              variant="outlined"
              label={column.name}
              size="small"
              sx={{ width: 300 }}
            />
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="warning"
              size="small"
              onClick={() => handleDeleteColumn(column.id)}
            >
              <DeleteIcon />
            </Button>
          </Grid>
        </Grid>
      ))}

      {tables.length > 0 && (
        <Grid container sx={tableFooter}>
          <Button
            variant="outlined"
            size="small"
            color="success"
            onClick={handleAddColumn}
          >
            Add Column
          </Button>
        </Grid>
      )}
    </>
  );
};
