// import NavBar from "../NavBar/NavBar";
// import "./Home.css";
// import BudgetFilter from "./BasicFilter/BudgetFilter";
// import MileageFilter from "./BasicFilter/MileageFilter";
// import SelectBike from "./SelectBike/SelectBike";

// export default function Home() {
//   return (
//     <div className="container">
//       {/* <NavBar /> */}
//       <div className="hero-container">
//         <h1>HERO</h1>
//       </div>
//       <div className="select-bike">
//         <SelectBike />
//       </div>
//       <div className="filter-section">
//         <div>Basic filter</div>

//         <BudgetFilter />

//         <MileageFilter />
//       </div>
//     </div>
//   );
// }

// import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";
import { Box, styled, Grid, Paper } from "@material-ui/core";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
