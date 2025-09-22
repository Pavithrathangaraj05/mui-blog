import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://www.datocms-assets.com/101439/1703136003-beautiful-mountain-of-japan-mount-fuji.webp?auto=format&dpr=1.5&fit=crop&h=800&w=1200"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" ,textAlign:"center"}}>
          Mount Fuji, or Fujisan, is Japan’s highest mountain, rising to an
            awe-inspiring 3,776 meters (12,389 feet) above sea level. Located
            about 100 kilometers southwest of Tokyo
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
          <Typography sx={{ marginBottom: 2 ,textAlign:'justify'}}>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography sx={{ marginBottom: 2,textAlign:'justify' }}>
            Mount Fuji, or Fujisan, is Japan’s highest mountain, rising to an
            awe-inspiring 3,776 meters (12,389 feet) above sea level. Located
            about 100 kilometers southwest of Tokyo, this iconic stratovolcano
            has long been regarded as a symbol of beauty, endurance, and
            spiritual significance. Its nearly symmetrical, snow-capped cone
            dominates the skyline and has inspired generations of poets,
            artists, and pilgrims. Mount Fuji is deeply woven into Japan’s
            cultural identity, appearing in countless artworks, literature, and
            folklore. In 2013, it was recognized as a UNESCO World Heritage
            Site, celebrated not only for its striking natural form but also for
            its enduring cultural impact.
          </Typography>
          <Typography sx={{ marginBottom: 2 ,textAlign:'justify'}}>
            Surrounded by the picturesque Fuji Five Lakes (Kawaguchiko,
            Yamanakako, Saiko, Shojiko, and Motosuko), the mountain offers
            breathtaking reflections, lush hiking trails, and seasonal beauty
            that changes dramatically from cherry blossom springs to snowy
            winters. The region is also home to Aokigahara Forest, known for its
            dense, quiet atmosphere, and numerous hot springs (onsen) that offer
            relaxing views of the mountain.
          </Typography>
          
        </CardContent>
      </Collapse>
    </Card>
  );
}
