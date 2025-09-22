import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import image from '../images/image.png'
import React from "react";
import ReadMe from "./ReadMe";
import { Link, Route, Routes } from "react-router-dom";

const Pages = () => {
  return (
    <>
      <Card
        sx={{
          backgroundImage:
            "url(https://i.pinimg.com/736x/de/b9/c4/deb9c4ef37b4526a65010e39df5aa12e.jpg)",
          color: "white",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          padding: 5,
        }}
      >
        <CardContent>
          <Typography textAlign={"right"} variant="h3">Title of the blog Post</Typography>
          <Typography textAlign={"right"}>
            Description of the particular blog post, Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nullam sed consequat libero. Vivamus
            molestie sem egestas augue interdum laoreet quis eget tortor. Donec
            consequat, felis et luctus pulvinar, nunc eros tincidunt nisi, eget
            sagittis augue ante quis est. Donec porttitor sem et interdum
            uscipit ipsum maximus non. Praesent cursus eget tortor a aliquam.
            Curabitur orci purus, mollis in diam eget,
          </Typography>
        </CardContent>
        {/* <CardActions >
          <Button sx={{ marginLeft: 'auto' }} textAlign={'right'} variant="outlined" color="inherit">
            Read Me
          </Button>
        </CardActions> */}
        <CardActions>
  <Button
    component={Link}
    to="/readme"
    sx={{ marginLeft: "auto" }}
    variant="outlined"
    color="inherit"
  >
    Read Me
  </Button>
  <Routes><Route path="/readme" element={<ReadMe />} /></Routes>
  

</CardActions>
{/* <Route path="/readme" element={<ReadMe />} /> */}
{/* <Route path="/readme" element={<ReadMe />} /> */}
      </Card>
     
    </>
  );
};

export default Pages;
