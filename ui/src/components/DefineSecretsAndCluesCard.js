import React from 'react';
import Card from '@material-ui/core/Card';
import { Typography, Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';

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
        marginTop: 20,
        fontSize: 50
    },

    button: {
        backgroundColor: "#7ca7eb", 
        marginBottom: 70
    },

    button2: {
        backgroundColor: "#b3b3b3",
        marginBottom: 100
    },

    input1: {
        marginBottom: 60,
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


export default function DefineSecretsAndCluesCard(){
    const classes = useStyles();

    const [counter, setCounter] = useState(0);

    const handleClick = () => {
      setCounter(counter + 1);
      console.log(counter);
    };

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
                Define Secrets and Clues
            </Typography>
            <br />
            <br />
            <br /> 
            <Button className={classes.button}>
                Upload Picture
            </Button>
            <br />
            <TextField label="define secret or clue" multiline="true" className={classes.input1}/>
            <br />
            <TextField label="define how it might be revealed" multiline="true"  className={classes.input1}/>
            <br />
            {Array.from(Array(counter)).map((c, index) => {
            return <div><TextField label="define secret or clue" multiline="true" className={classes.input1}/>
            <br />
            <TextField label="define how it might be revealed" multiline="true"  className={classes.input1}/>
            <br />
            </div>      
            })}
            <br />
            <Button className={classes.button2} onClick={handleClick}>
                Add Another
            </Button>
            <br />
            <Button className={classes.button}>
                Submit
            </Button>


        </Card>
    </>


}