import React, { useEffect, useState, createContext, useContext } from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { Typography, Checkbox, TextField, FormControlLabel, Paper, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ClickContext } from "../views/ChooseCampaign"


var Link = require('react-router-dom').Link


const sessions = {
    "homebrew": [
        "session 1", 
        "session 2"
    ],
    "curse-strahd": [
        "session 1",
        "session 2",
        "session 3", 
        "session 4"
    ],

    "new-campaign": [
    ]

}

const useStyles = makeStyles({
    card: {
        height: "100vh",
        width: 450,
        borderRadius: 14,
    },

    button: {
        height: 40,
        width: 300,
        backgroundColor: "#859e59",
        marginTop: "30px",
        borderRadius: 10

    },

    media:{
        height: 1000
    }

})

export default function SessionCard({ sessionListId, image }) {
    const classes = useStyles();
    const { isClicked } = useContext(ClickContext);


    function getSessions(listId){
        return sessions[listId]
    }

    if (isClicked === false){
        return <></>
    }
    else {
        return  <>
            <Card className={classes.card}>
                <CardMedia className={classes.media} image={'/card-images/Illustration 5 (1).jpg'}>
                    <Link style={{textDecoration: 'none'}} to="/Campaigns">
                        <Button className={classes.button}>
                            New Session
                        </Button>
                    </Link>
                    {getSessions(sessionListId).map((name) => (
                        <Button className={classes.button}>
                        {name}
                        </Button>
                    ))}
                </CardMedia>
            </Card>
        </>
    }
};