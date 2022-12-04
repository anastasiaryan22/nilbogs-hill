import React from 'react';
import Card from '@material-ui/core/Card';
import { Typography, Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

var Link = require('react-router-dom').Link


const useStyles = makeStyles({

    card: {
        width: 700, 
        height: 800,
        borderRadius: 14,
        overflow: "hidden", 
        overflowY: "scroll",

    },

    text: {
        marginTop: 30,
        fontSize: 50
    },

    button: {
        backgroundColor: "#7ca7eb", 
        marginTop: 40,
        marginBottom: 30
    },

    button2: {
        position: 'absolute', 
        left: 20,
        backgroundColor: "#859e59",
        top: 20,
    },

    button3: {
        position: 'absolute',
        left: 20,
        backgroundColor: "#859e59",
        top: 60,
    },


    input1: {
        marginBottom: 50,
        width: 300,
        marginRight: 20
    },

    input2: {
        marginBottom: 300,
        width: 400,
        marginRight: 20
    },
});


export default function StrongStartCard(){
    const classes = useStyles();

    return <>
        <Link style={{textDecoration: 'none'}} to="/ChooseCampaign">
            <Button className={classes.button2}>
                Return Home
            </Button>
        </Link>
        <Link style={{textDecoration: 'none'}} to="/Campaigns">
            <Button className={classes.button3}>
                Return to Session Builder
            </Button>
        </Link>
        <Card className={classes.card}>
            <Typography className={classes.text}>
                Create a Strong Start
            </Typography>
            <br />
            <br />
            <br /> 
            <Button className={classes.button}>
                Upload Picture
            </Button>
            <br />
            <TextField label="location" multiline="true" className={classes.input1}/>
            <br />
            <TextField label="introduction" multiline="true" className={classes.input2}/>
            <br />
            <TextField label="encounters (if any)" multiline="true" className={classes.input2}/>
            <br />
            <Button className={classes.button}>
                Submit
            </Button>


        </Card>
    </>


}