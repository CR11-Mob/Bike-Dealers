import "./Pagination.css";
import { useState, useEffect } from "react";

import { Grid, Box, createSvgIcon } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { ArrowForward, ArrowBack } from "@material-ui/icons";
import { SvgIcon } from "@material-ui/core";

export default function Pagination(props) {
  const { brandState, modelState, selectedBikes, setDisplayBike } = props;

  const [currentPage, setCurrentPage] = useState(0);
  const [bikeGridSize, setBikeGridSize] = useState(4);
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
    <SvgIcon viewBox="-4 0 24 18" {...props}>
      {/* <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" /> */}
      <path d="M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z" />
      {/* <path
        d="M122 1H6C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11H122C124.761 11 127 8.76142 127 6C127 3.23858 124.761 1 122 1Z"
        fill="#E6E6E6"
        stroke="black"
      /> */}
    </SvgIcon>
  );

  // const DashIcon = createSvgIcon(
  //   <path d="M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z" />,
  //   "Dash"
  // );

  return (
    <>
      <Grid item xs={6} md={4} lg={6}>
        <IconButton
          aria-label="back"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 0}
          className="icon-btn-color"
        >
          <ArrowBack />
        </IconButton>

        <IconButton
          aria-label="forward"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPage - 1}
          className="icon-btn-color"
        >
          <ArrowForward />
        </IconButton>
      </Grid>

      <Grid item xs={6} md={4} lg={6}>
        <Box className="dash-icon-box">
          {Array.from({ length: totalPage }, (_, index) => (
            <IconButton
              aria-label="dash_toggle"
              key={index}
              onClick={() => setCurrentPage(index)}
              className="icon-btn-color"
            >
              <DashIcon />
            </IconButton>
          ))}
        </Box>
      </Grid>
    </>
  );
}
