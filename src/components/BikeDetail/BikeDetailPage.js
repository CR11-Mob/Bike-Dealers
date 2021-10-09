import "./BikeDetailPage.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { getLoadingStatus, getAllModelsData } from "./../bikeSlice"; // Selectors
import { startLoading, stopLoading, setModelsData } from "./../bikeSlice"; // Actions
import { useSelector, useDispatch } from "react-redux";

import { Grid, Box } from "@material-ui/core";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import {
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemIcon,
  Divider,
} from "@material-ui/core";
import { Collapse } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { Button } from "@material-ui/core";
import {
  ArrowForward,
  ExpandMore,
  ExpandLess,
  Inbox,
} from "@material-ui/icons";
import { Tooltip } from "@material-ui/core";
import { SvgIcon } from "@material-ui/core";

export default function BikeDetailPage(props) {
  const dispatch = useDispatch();
  const loading = useSelector(getLoadingStatus);
  const modelsData = useSelector(getAllModelsData);

  const { bikeUrlStr } = useParams();

  const [brandName, setBrandName] = useState("");
  const [modelName, setModelName] = useState("");

  const [bikeData, setBikeData] = useState({});

  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (!loading) {
      dispatch(startLoading());
    }
  }, []);

  useEffect(() => {
    console.log("All model data", modelsData);
  }, [modelsData]);

  useEffect(() => {
    console.log("pathName:", bikeUrlStr);
    let splitedArr = bikeUrlStr.split("-");
    let brandStr = splitedArr[0].replace(/_/g, " ");
    let modelStr = splitedArr[1].replace(/_/g, " ");
    // console.log("model str:", modelStr);
    // console.log("Splited Array", splitedArr);
    let obj = { ...modelsData[modelStr] };
    setBikeData(obj);
    setBrandName(brandStr);
    setModelName(modelStr);
  }, [bikeUrlStr, modelsData]);

  useEffect(() => {
    console.log("Bike Data:", bikeData);
    console.log("Bike Data:", bikeData["key specs"]);
  }, [bikeData]);

  useEffect(() => {
    console.log("model detail page Brand", brandName);
    console.log("model detail page Model", modelName);
  }, [brandName, modelName]);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        dispatch(setModelsData());
        dispatch(stopLoading());
      }, 1000);
    }
    console.log("loading status:", loading);
  }, [loading]);

  const handleClick = () => {
    setOpen(!open);
  };

  if (loading) {
    return <h1 style={{ textAlign: "center" }}>LOADING...</h1>;
  }

  return (
    <Grid container>
      <Grid
        container
        item
        xs={12}
        justifyContent="space-around"
        alignItems="center"
        style={{ marginBlock: "2rem" }}
      >
        <Grid item xs={8}>
          <Box component="h1">
            {brandName} {modelName}
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" endIcon={<ArrowForward />}>
            Get it Now
          </Button>
        </Grid>
      </Grid>

      <Grid
        container
        item
        xs={12}
        justifyContent="space-around"
        style={{ backgroundColor: "#e7e7e7", marginBlock: "2rem" }}
      >
        <Grid container item xs={4}>
          <Grid container item xs={12} alignItems="center">
            <Grid item xs={12} style={{ fontWeight: "600" }}>
              Key Specs
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <List>
              {bikeData["key specsArr"] &&
                bikeData["key specsArr"].map((spec) => (
                  <ListItem key={spec}>
                    <Tooltip title={spec}>
                      <ListItemIcon>
                        <SvgIcon>
                          <path d={`${bikeData["key specs"][spec].svg}`} />
                        </SvgIcon>
                      </ListItemIcon>
                    </Tooltip>
                    <ListItemText>
                      {bikeData["key specs"][spec].data}
                    </ListItemText>
                  </ListItem>
                ))}
            </List>
          </Grid>
        </Grid>

        <Grid item xs={6}>
          <img
            height="100%"
            width="100%"
            src={bikeData.img}
            alt={`${modelName}`}
          />
        </Grid>
      </Grid>

      <Grid
        container
        item
        xs={12}
        justifyContent="space-around"
        style={{ marginBlock: "2rem" }}
      >
        <Grid item xs={6}>
          <List component="div">
            <ListItem
              onClick={handleClick}
              style={{ backgroundColor: "#e7e7e7" }}
            >
              <ListItemText>
                <Box
                  component="span"
                  style={{ fontSize: "1rem", fontWeight: "600" }}
                >
                  Basic details
                </Box>
              </ListItemText>
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List
                component="div"
                disablePadding
                subheader={
                  <ListSubheader component="a" id="nested-list-subheader">
                    View Images
                  </ListSubheader>
                }
              >
                <ListItem>
                  <ListItemText>
                    <Grid container justifyContent="space-between">
                      <Grid item xs={4} style={{ fontWeight: "600" }}>
                        MSRP range
                      </Grid>
                      <Grid item xs={6}>
                        {" "}
                        {`₹${bikeData.price} - ₹${bikeData.price}`}
                      </Grid>
                    </Grid>
                  </ListItemText>
                </ListItem>
                <Divider />

                <ListItem>
                  <ListItemText>
                    <Grid container justifyContent="space-between">
                      <Grid item xs={4} style={{ fontWeight: "600" }}>
                        Consumer rating
                      </Grid>
                      <Grid item xs={6}>
                        <Rating
                          name="half-rating-read"
                          defaultValue={2.5}
                          precision={0.5}
                          readOnly
                        />
                      </Grid>
                    </Grid>
                  </ListItemText>
                </ListItem>
                <Divider />

                <ListItem>
                  <ListItemText>
                    <Grid container justifyContent="space-between">
                      <Grid item xs={4} style={{ fontWeight: "600" }}>
                        Body Type
                      </Grid>
                      <Grid item xs={6}>
                        {bikeData.type}
                      </Grid>
                    </Grid>
                  </ListItemText>
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </Grid>
  );
}
