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

    button3: {
        position: 'absolute', 
        left: 20,
        backgroundColor: "#859e59",
        top: 20,
    },

    button4: {
        position: 'absolute',
        left: 20,
        backgroundColor: "#859e59",
        top: 60,
    },

});


export default function DevelopFantasticLocationsCard(){
    const classes = useStyles();

    return <>
        <Link style={{textDecoration: 'none'}} to="/ChooseCampaign">
            <Button className={classes.button3}>
                Return Home
            </Button>
        </Link>
        <Link style={{textDecoration: 'none'}} to="/Campaigns">
            <Button className={classes.button4}>
                Return to Session Builder
            </Button>
        </Link>
        <Card className={classes.card}>
            <Typography className={classes.text}>
                Build a Location 
            </Typography>
            <Typography>
                or
            </Typography>
            <Button>
                Choose a Previous Location
            </Button>
            <br />
            <br />
            <br /> 
            <Button className={classes.button}>
                Upload Picture
            </Button>
            <br />
            <TextField label="name" multiline="true" className={classes.input1}/>
            <br />
            <TextField label="location" multiline="true" className={classes.input1}/>
            <br />
            <TextField label="specific locations within" multiline="true" className={classes.input2}/>
            <br />
            <TextField label="notable people" multiline="true" className={classes.input2}/>
            <br />
            <TextField label="architecture" multiline="true" className={classes.input2}/>
            <br />
            <TextField label="landmarks" multiline="true" className={classes.input2}/>
            <br />
            <TextField label="backstory" multiline="true" className={classes.input2}/>
            <br />
            <Button className={classes.button}>
                Submit
            </Button>


        </Card>
    </>


}