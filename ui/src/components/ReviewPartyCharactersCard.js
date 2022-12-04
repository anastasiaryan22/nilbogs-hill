import React from 'react';
import Card from '@material-ui/core/Card';
import { Typography, Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

var Link = require('react-router-dom').Link


const useStyles = makeStyles({
    card: {
        width: 1000, 
        height: 600,
        borderRadius: 14,
        overflow: "hidden", 
        overflowY: "scroll",

    },

    text: {
        fontSize: 50
    },

    input1: {
        width: 90,
        marginRight: 40,
        marginBottom: 100
    },
    
    input2: {
        width: 120,
        marginRight: 40,
        marginBottom: 60
    },

    input3: {
        width: 300,
        marginRight: 40,
        marginBottom: 400
    },

    button: {
        backgroundColor: "#7ca7eb", 
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


export default function ReviewPartyCharacterCard(){
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
                Enter Character Information
            </Typography>
            <Typography>
                or
            </Typography>
            <Button>
                Review Previous Character Information
            </Button>
            <br />
            <br />
            <Button className={classes.button}>
                Upload Picture
            </Button>
            <br />
            <br />
            <br />
            <TextField label="character name" multiline="true"/>
            <br />
            <br />
            <br />
            <TextField label="class" multiline="true" className={classes.input2}/>
            <TextField label="race" multiline="true" className={classes.input2}/>
            <TextField label="level" multiline="true" className={classes.input2}/>
            <TextField label="alignment" multiline="true" className={classes.input2}/>
            <TextField label="xp" className={classes.input2}/>
            <br />
            <TextField label="strength" className={classes.input1}/>
            <TextField label="dexterity" className={classes.input1}/>
            <TextField label="constitution" className={classes.input1}/>
            <TextField label="intelligence" className={classes.input1}/>
            <TextField label="wisdom" className={classes.input1}/>
            <TextField label="charisma" className={classes.input1}/>
            <br />
            <TextField label="backstory" multiline="true" className={classes.input3}/>
            <TextField label="other important information" multiline="true" className={classes.input3}/>
            <br />
            <Button className={classes.button}>
                Submit
            </Button>
            <br />
            <br />
            <br />
            <br />
            <br />
        </Card>
    </>

}