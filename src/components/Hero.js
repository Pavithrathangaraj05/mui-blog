import { Grid, Typography ,Avatar,Box} from "@mui/material";
import React from "react";
import { Stack } from "react-bootstrap";
import NewsCard from "./Cards";
import RecipeReviewCard from "./Cards";

const posts = [
  {
    number: 1,
    title: "Mountains and Boat: A Perfect Harmony",
    author: "John Smith",
    date: "24 Jan 2023",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  },
  {
    number: 2,
    title: "Unveiling the Timeless Charm of Old Street Buildings",
    author: "John Smith",
    date: "21 Jan 2024",
    image: "https://images.unsplash.com/photo-1503264116251-35a269479413"
  },
  {
    number: 3,
    title: "Whispering Trees and the Enchanting Moon",
    author: "John Smith",
    date: "24 Feb 2023",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid"
  },{
    number: 4,
    title: "Whispering Trees and the Enchanting Moon",
    author: "John Smith",
    date: "2 Nov 2005",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid"
  }];
const Hero = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <Stack spacing={3}>
        <Typography color="secondary" sx={{ flexGrow: 1 }}>
          Our Blog
        </Typography>
        <Typography variant="h3">Stories and Ideas</Typography>
        <Typography color="#bdbdbd" style={{}}>
          Explore breathtaking landscapes, iconic landmarks, and hidden gems
          around the globe
        </Typography>
      </Stack>

      <Grid style={{marginTop:'20px'}} container spacing={2}>
        <Grid size={5}>
          <RecipeReviewCard />
        </Grid>
        {/* <Grid size={4}>
          <RecipeReviewCard />
        </Grid>
        <Grid size={4}>
          <RecipeReviewCard />
        </Grid> */}
        <Grid style={{textAlign:'left',}} size={7}>
            <Typography  variant="h5" style={{ marginLeft: "20px"}} >Top Stories</Typography>
             <Box sx={{ width: "auto", marginLeft: "20px",marginTop:"10px", fontFamily: "sans-serif" }}>
      {posts.map((post) => (
        <Box
          key={post.number}
          sx={{
            display: "flex",
            alignItems: "",
            gap: 2,
            borderBottom: "1px solid #ddd",
            padding: "10px 0"
          }}
        >
          {/* Number Circle */}
          <Avatar
            sx={{
              bgcolor: "#f0f0f0",
              color: "#000",
              fontSize: "14px",
              width: 28,
              height: 28
            }}
          >
            {post.number}
          </Avatar>

          {/* Text Section */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="subtitle1" fontWeight="bold">
              {post.title}
            </Typography>
            <Typography variant="body2" color="secondary">
              {post.author} • {post.date}
            </Typography>
          </Box>

          {/* Image */}
          <Box
            component="img"
            src={post.image}
            alt={post.title}
            sx={{
              width: 60,
              height: 60,
              borderRadius: "4px",
              objectFit: "cover"
            }}
          />
        </Box>
      ))}
    </Box>

        </Grid>
      </Grid>
    </div>
  );
};

export default Hero;
