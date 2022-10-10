import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

var Link = require('react-router-dom').Link


const imgCaravan = require('../card-images/caravan.jpg');


const divStyle = {
    width: '100vw',
    backgroundImage: `url(${imgCaravan})`,
    backgroundSize: 'cover',
    height: '100vh',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center'
  };

const useStyles = makeStyles({

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

    textinput2: {
        marginTop: "50px"
    },

    button1: {
        height: 40,
        width: 200,
        backgroundColor: "#7ca7eb",
        marginTop: "40px",
    },

    button2: {
        height: 40,
        width: 200,
        backgroundColor: "#859e59",
        marginTop: "60px"

    }

})


export default function SignupLoginPage() {
    const classes = useStyles();
  

    return<>
        <div style={divStyle}>
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}
        >
                <Card className={classes.card}>
                    <TextField className={classes.textinput2} label="Username">

                    </TextField>
                    <TextField className={classes.textinput2} label="Password">

                    </TextField>
                    <Link style={{textDecoration: 'none'}} to="/ChooseCampaign">
                        <Button className={classes.button1}>
                            Login
                        </Button>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to="/SignupPage">
                        <Button className={classes.button2}>
                            Signup
                        </Button>
                    </Link>


                </Card>
        </Grid>

        </div>
    
    
    
    </>

}