import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Grid
} from "@mui/material";
import React from "react";

const MuiNews = ({ news }) => {
  const { author, description, urlToImage, url } = news;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={urlToImage}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {author}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MuiNews;
