import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ReactCardFlip from 'react-card-flip';


var Link = require('react-router-dom').Link;


const useStyles = makeStyles({
    media: {
        margin: "-70px auto 0",
        height: 400,
        border: "none",
        display: 'flex', 
        alignItems: 'center', 
        justifyContent:'center',
        width: 400,
        paddingTop: '56.25%', // 16:9,
        zIndex: 1000,
        marginLeft: "-70px"
      },


      card: {
        borderRadius: 14,
        height: 450,
        width: 322,
        border: "none",
        margin: '20px',
        transition: "0.3s",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
          boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        }
      },

      text: {
        align: "center"

      },

      button: {
        height: 40,
        width: 322,
        marginTop: 58,
        marginLeft: '-16px',
        backgroundColor: "#7ca7eb",
        borderRadius: 8
      }

})

export default function CampaignCard({ image, title, hover, linkto }) {
    const classes = useStyles();
    const [isFlipped, setIsFlipped] = useState(false);
    const handleClick = () => {
        setIsFlipped(!isFlipped);
    }

    return <>
        <Card className={classes.card}>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                    <div style={{ position: "relative" }} onMouseEnter={handleClick}>
                        <CardContent>
                            <CardMedia 
                                className={classes.media}
                                image={image}
                            />
                            <div style={{position: "absolute", fontSize: "40px", color: "white",top: 300,left: "50%",transform: "translateX(-82%)",}}> {title}</div> 
                 
                        </CardContent>

                    </div>
                    <div onMouseLeave={handleClick}>
                        <CardContent>
                            <Typography>
                                {hover}
                            </Typography>
                            <Link style={{textDecoration: 'none'}} to={linkto}>
                                <Button className={classes.button}>
                                    Start
                                </Button>  
                            </Link>
                        </CardContent>
                    </div>   
            </ReactCardFlip>
        </Card>
    </>
}
