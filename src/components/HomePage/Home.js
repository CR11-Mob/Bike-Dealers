// import NavBar from "../NavBar/NavBar";
import "./Home.css";
import BudgetFilter from "./BasicFilter/BudgetFilter";
import MileageFilter from "./BasicFilter/MileageFilter";
import SelectBike from "./SelectBike/SelectBike";

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
import { styled, Grid, Paper } from "@material-ui/core";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function Home() {
  return (
    <Grid container direction="column">
      <Grid item xs={12} style={{ backgroundColor: "gray" }}>
        <div className="hero-container">
          <h1>HERO</h1>
        </div>
      </Grid>

      <Grid
        item
        container
        justifyContent="center"
        xs={12}
        style={{ backgroundColor: "moccasin" }}
      >
        <Grid item sm={6}>
          <SelectBike />
        </Grid>
      </Grid>

      <Grid item container xs={12}>
        <Grid item container direction="row" xs={12} md={4}>
          <Grid item md={12}>
            <BudgetFilter />
          </Grid>
          <Grid item md={12}>
            <MileageFilter />
          </Grid>
        </Grid>
        <Grid item xs={12} md={8}>
          <div>Bike Area</div>
        </Grid>
      </Grid>
    </Grid>
  );
}
