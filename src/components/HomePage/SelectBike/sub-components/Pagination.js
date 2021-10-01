import { useState, useEffect } from "react";

import { Grid, Box } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { ArrowForward, ArrowBack } from "@material-ui/icons";
import { SvgIcon } from "@material-ui/core";

export default function Pagination(props) {
  const { brandState, modelState, selectedBikes, setDisplayBike } = props;

  const [currentPage, setCurrentPage] = useState(0);
  const [bikeGridSize, setBikeGridSize] = useState(5);
  const [totalPage, setTotalPage] = useState(0);

  const getTotalPage = () => {
    if (bikeGridSize !== 0) {
      let total = Math.ceil(selectedBikes.length / bikeGridSize);
      // console.log("total pages:", total);
      setTotalPage(total);
    }
  };

  const getDisplayBike = () => {
    let length = currentPage * bikeGridSize + bikeGridSize;
    let arr = [];
    for (let i = currentPage * bikeGridSize; i < length; i++) {
      if (selectedBikes[i]) {
        arr.push(selectedBikes[i]);
      }
    }
    setDisplayBike(arr);
  };

  useEffect(() => {
    console.log("Current Page:", currentPage);
    getDisplayBike();
  }, [currentPage]);

  useEffect(() => {
    console.log("Selected Bikes:", selectedBikes);
    getTotalPage();
    getDisplayBike();
  }, [selectedBikes]);

  useEffect(() => {
    console.log("brand State:", brandState);
    // console.log(`${brandState} model names:`, models);
    setCurrentPage(0);
  }, [brandState, modelState]);

  // Dash Svg icon
  const DashIcon = (props) => (
    <SvgIcon {...props}>
      {/* <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" /> */}
      <path d="M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z" />
    </SvgIcon>
  );

  return (
    <>
      <Grid item xs={4}>
        <IconButton
          aria-label="back"
          onClick={() => {
            setCurrentPage(currentPage - 1);
          }}
          disabled={currentPage === 0}
        >
          <ArrowBack />
        </IconButton>
        <IconButton
          aria-label="forward"
          onClick={() => {
            setCurrentPage(currentPage + 1);
          }}
          disabled={currentPage === totalPage - 1}
        >
          <ArrowForward />
        </IconButton>
      </Grid>

      <Grid item xs={4}>
        <Box className="dash-icon-box">
          {Array.from({ length: totalPage }, (_, index) => (
            <Box
              component="span"
              sx={{
                "& >:hover": {
                  color: "red",
                  fontSize: "1.8rem",
                },
              }}
              className="dash_buttons"
              key={index}
              onClick={() => {
                setCurrentPage(index);
              }}
            >
              <DashIcon color="disabled" />
            </Box>
          ))}
        </Box>
      </Grid>
    </>
  );
}
