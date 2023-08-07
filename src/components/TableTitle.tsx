import { Colors } from "../constants/Colors";
import { titleStyled } from "../constants/Styled";
import { Grid, Typography, Button } from "@mui/material";

interface TableTitleProps {
  addTable: () => void;
}

export const TableTitle: React.FC<TableTitleProps> = ({ addTable }) => {
  const handleAddTable = () => {
    addTable();
  };

  return (
    <>
      <Grid
        sx={titleStyled}
        container
        justifyContent="space-between"
        alignContent="center"
      >
        <Grid item>
          <Typography variant="h5" sx={{ color: "#333" }}>
            Tables
          </Typography>
        </Grid>

        <Grid item>
          <Button
            variant="contained"
            sx={{
              bgcolor: Colors.primary,
              borderRadius: 2,
              "&:hover": {
                bgcolor: Colors.primaryHover,
              },
            }}
            onClick={handleAddTable}
          >
            + New table
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
