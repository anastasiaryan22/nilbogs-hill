import React from 'react';
import Card from '@material-ui/core/Card';
import { Typography, Button, TextField } from '@material-ui/core';


export default function MonsterCard({monsterDetails}){
    return <>
    <div>
        <Card>
          <Typography>
            {monsterDetails.name}
            <br />
            {monsterDetails.type}
            <br />
            {monsterDetails.alignment}
          </Typography>
        </Card>
    </div>
</>


};