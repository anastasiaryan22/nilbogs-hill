import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    card: {
      borderRadius: 14,
      height: 300,
      width: 322,
      border: "none",
      margin: '20px',
      transition: "0.3s",
      boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
      "&:hover": {
        boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
      }
    },

    media: {
      margin: "-70px auto 0",
      height: 150,
      border: "none",
      display: 'flex', 
      alignItems: 'center', 
      justifyContent:'center',
      width: 400,
      paddingTop: '56.25%', // 16:9,
      zIndex: 1000,
      marginLeft: "-70px"
    },

    text: {
      fontSize: '30px',
      marginTop: '-2px'
    }


})


export default function ChooseCampaignCard({ onClick, key, image, title, description }) {
  const classes = useStyles();
  return <>
      <div>
          <Card className={classes.card} onClick={onClick}>
            <CardMedia className = {classes.media} image = {image}/>
            <Typography className={classes.text}>
              {title}
            </Typography>
          </Card>
      </div>
  </>
};
