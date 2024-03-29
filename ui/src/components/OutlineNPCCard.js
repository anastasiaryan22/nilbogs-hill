import React from 'react';
import Card from '@material-ui/core/Card';
import { Typography, Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

var Link = require('react-router-dom').Link

const useStyles = makeStyles({

    card: {
        borderRadius: 14,
        width: 500,
        height: 800,
        border: "none",
        overflow: "hidden", 
        overflowY: "scroll",
      },

    text: {
        fontSize: 50
    },

    input1: {
        width: 400,
        height: 100,
        marginBottom: 160
    },

    input2: {
        marginRight: 200,
        marginLeft: 162,
        width: 170,
        marginBottom: 20,
        marginTop: 30,
    },

    input3: {
        marginBottom: 30,
    },

    button: {
        backgroundColor: "#7ca7eb", 
        marginTop: 30,
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

})



export default function OutlineNPCCard(){
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
                Create NPC
            </Typography>
            <Typography>
                or 
            </Typography>
            <Button style={{backgroundColor: "#859e59", marginTop: 20,}}>
                Choose Previous NPC
            </Button>
            <br /> 
            <br />
            <br />
            <Button className={classes.button}>
                Upload Picture
            </Button>
            <TextField label="name" multiline="true" className={classes.input2}/>
            <TextField label="hometown" multiline="true" className={classes.input3}/>
            <TextField label="description" multiline="true" className={classes.input1}/>
            <TextField label="defining features or traits" multiline="true" className={classes.input1}/>
            <br />
            <TextField label="their fears and desires" multiline="true" className={classes.input1}/>
            <br />
            <TextField label="something they'd say to help get into the role" multiline="true" className={classes.input1}/> 
            <br />
            <Button className={classes.button}> 
                Submit
            </Button>
            <br />
            <br />
        </Card>
    </>
}