import "./Bikes.css";
import { useEffect } from "react";
import { useHistory } from "react-router";

import { Grid } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { ArrowForward } from "@material-ui/icons";

export default function Bikes(props) {
  const history = useHistory();

  // useEffect(() => {
  //   console.log("History:", history);
  // }, [history]);

  useEffect(() => {
    console.log("Bikes Grid:", props.displayBike);
  }, [props.displayBike]);

  return (
    <>
      {props.displayBike &&
        props.displayBike.map((bike, index) => (
          <Grid
            container
            item
            xs={6}
            sm={3}
            md={3}
            key={bike.model}
            className="bike-wrapper"
          >
            <Grid
              item
              xs={12}
              style={{ height: "50%", padding: "1rem .5rem 0 .5rem" }}
            >
              <img height="100%" width="100%" src={bike.img} alt={`${index}`} />
            </Grid>

            <Grid container item xs={12} style={{ height: "20%" }}>
              <Grid item xs={12} className="font-styling">
                {`${bike.brand} ${bike.model}`}
              </Grid>

              <Grid
                item
                xs={12}
                className="font-styling"
                style={{
                  fontWeight: "500",
                }}
              >
                {`₹ ${bike.price}`}
              </Grid>
            </Grid>

            <Grid
              item
              xs={12}
              style={{ height: "30%", padding: "1rem 1rem", color: "#e7e7e7" }}
            >
              <IconButton
                onClick={() => {
                  let path = `/${bike.brand}-${bike.model}`;
                  let replaceSpace = path.replace(/\s/g, "_");
                  // console.log(replaceSpace);
                  history.push(replaceSpace);
                }}
                aria-label="forward"
                size="small"
              >
                <ArrowForward fontSize="inherit" />
              </IconButton>
            </Grid>
          </Grid>
        ))}
    </>
  );
}
