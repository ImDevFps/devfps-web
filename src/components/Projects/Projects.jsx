import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Projects.css";
const Projects = ({ item }) => {
  const { img, title, body, url, source } = item;
  return (
    <>
      <Card className='projects-card'>
        <CardMedia component='img' alt='projects' height='140' image={img} />
        <CardContent className='text-capitalize'>
          <Typography
            className='card-title'
            gutterBottom
            variant='h5'
            component='div'>
            {title}
          </Typography>
          <Typography
            sx={{ height: 100 }}
            variant='body2'
            color='text.secondary'>
            {body}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>
            <a href={url}>Explore</a>
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Projects;
