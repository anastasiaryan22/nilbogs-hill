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
        fontSize: 50
    },

    button: {
        backgroundColor: "#7ca7eb", 
        marginBottom: 30
    },

    input1: {
        marginBottom: 30,
        marginRight: 20
    },

    input2: {
        marginRight: 20,
        width: 60,
        marginBottom: 40
    },

    input3: {
        marginRight: 20,
        width: 60,
        marginBottom: 40
    },

    input4: {
        marginRight: 20,
        marginBottom: 230
    },

    input5: {
        marginRight: 20,
        marginBottom: 300
    },

    input6: {
        marginRight: 60,
        marginBottom: 300,
        width: 230
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


export default function ChooseRelevantMonstersCard(){
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
                Build a Monster 
            </Typography>
            <Typography>
                or
            </Typography>
            <Button>
                Choose an Existing Monster
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
            <TextField label="type" multiline="true"  className={classes.input1}/>
            <TextField label="alignment" multiline="true" className={classes.input1}/>
            <br />
            <TextField label="AC" className={classes.input2}/>
            <TextField label="HP" className={classes.input2}/>
            <TextField label="speed" className={classes.input2}/>
            <br />
            <TextField label="str" className={classes.input3}/>
            <TextField label="dex" className={classes.input3}/>
            <TextField label="con" className={classes.input3}/>
            <TextField label="int" className={classes.input3}/>
            <TextField label="wis" className={classes.input3}/>
            <TextField label="cha" className={classes.input3}/>
            <br />
            <TextField label="challenge" className={classes.input1}/>
            <TextField label="proficiency bonus" className={classes.input1}/>
            <br />
            <TextField label="skills" multiline="true" className={classes.input4} />
            <TextField label="senses" multiline="true" className={classes.input4} />
            <TextField label="languages" multiline="true" className={classes.input4} />
            <br />
            <TextField label="actions" multiline="true" className={classes.input6} />
            <TextField label="bonus actions" multiline="true" className={classes.input6} />
            <br />
            <TextField label="reactions" multiline="true" className={classes.input6} />
            <br />
            <TextField label="backstory" multiline="true" className={classes.input6} />
            <TextField label="other" multiline="true" className={classes.input6} />
            <br />
            <Button className={classes.button}>
                Submit
            </Button>


        </Card>
    </>


}