import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { Stack } from "react-bootstrap";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';



const cards = [
  {
    title: "Mountain View",
    description: "A breathtaking view of the mountains during sunrise.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
  },
  {
    title: "Green Fields",
    description: "Vast green fields under a bright blue sky.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
  },
  {
    title: "Forest Path",
    description: "A peaceful path through a lush forest.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3"
  }
];

const Middle = () => {
  return (
    <div>
      <Grid
        container
        style={{ padding: "20px" }}
        alignItems="center"
        spacing={2}
      >
        <Grid size={7}>
          <Typography style={{ color: "#939393f9", textAlign: "left" }}>
            We share commom trends and strategies for improving your rental
            making sure in high demand of service unique blocks, you can make
            sure you stay. "In the gentle rhythm of nature, every sunrise
            carries the promise of renewal and every breeze whispers the story
            of life."
          </Typography>
        </Grid>
        <Grid size={5}>
          <Typography textAlign={"right"} variant="h3">
            Sustainable Future Insights
          </Typography>
        </Grid>
      </Grid>
      <Stack style={{padding:"20px"}} spacing={3}>
        <Typography variant="h3">Our Trending Article</Typography>
        <Typography style={{ color: "#939393f9", textAlign: "left" }}>Common trends lorem lipsum is simply dummy text of the printing and typsetting industry. lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gally</Typography>
      </Stack>

<Grid container spacing={2} padding={"20px"}>
  <Grid size={4}>
   <Card sx={{ boxShadow: 'none', border: 'none' }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
        title="green iguana"
      />

      {/* Split Content */}
      <CardContent sx={{ paddingBottom: 0 ,paddingLeft:0}}>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
      </CardContent>

      <CardContent sx={{ paddingTop: 0,paddingLeft:0 }}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica.
        </Typography>
      </CardContent>

      <CardActions>
        <Button color="secondary" size="small">Share</Button>
        <Button color="secondary" size="small">Learn More</Button>
      </CardActions>
    </Card>
  </Grid>
  <Grid size={4}>
    <Card sx={{ boxShadow: 'none', border: 'none' }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
        title="green iguana"
      />

      {/* Split Content */}
      <CardContent sx={{ paddingBottom: 0,paddingLeft:0 }}>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
      </CardContent>

      <CardContent sx={{ paddingTop: 0,paddingLeft:0 }}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica.
        </Typography>
      </CardContent>

      <CardActions>
        <Button color="secondary" size="small">Share</Button>
        <Button color="secondary" size="small">Learn More</Button>
      </CardActions>
    </Card>
  </Grid>
  <Grid size={4}>
    <Card sx={{ boxShadow: 'none', border: 'none' }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
        title="green iguana"
      />

      {/* Split Content */}
      <CardContent sx={{ paddingBottom: 0 ,paddingLeft:0}}>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
      </CardContent>

      <CardContent sx={{ paddingTop: 0,paddingLeft:0 }}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica.
        </Typography>
      </CardContent>

      <CardActions sx={{paddingLeft:0,paddingTop:0}}>
        <Button color="secondary" size="small">Share</Button>
        <Button color="secondary" size="small">Learn More</Button>
      </CardActions>
    </Card>
  </Grid>
  
</Grid>
<Divider  sx={{ color: "black" }} variant="middle" />
<Divider sx={{ color: "black" }} />
      
    </div>
  );
};

export default Middle;
