import React, { useState} from 'react';
import Card from '@material-ui/core/Card';
import { Typography, Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import searchMonsters from '../backend/searchMonsters';
import SearchBar from "material-ui-search-bar";
import MonsterCard from '../components/MonsterCard';

var Link = require('react-router-dom').Link

const useStyles = makeStyles({

    card: {
        width: 200, 
        height: 200,
        borderRadius: 14,
        overflow: "hidden", 
        overflowY: "scroll",
        align: "right",

    },

});

export default function PickMonsterCard(){
    const classes = useStyles();
    const [userInput, setUserInput] = useState("")
    const [monsters, setMonsters] = useState({})

    return <>
            <Card className={classes.card}>
                This is Card
                <SearchBar
                    value = {userInput}
                    onChange={(e) => setUserInput( e )}
                    onRequestSearch={async () => await searchMonsters(userInput, setMonsters)}
                />
                {monsters && <MonsterCard monsterDetails={monsters}/>}
            </Card>

    </>


}