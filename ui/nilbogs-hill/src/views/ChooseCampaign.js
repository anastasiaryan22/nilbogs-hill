import styled from "styled-components"
import ChooseCampaignCard from "../components/ChooseCampaignCard"
import SessionCard from "../components/SessionCard"
import React, { useState } from 'react';

const imgCaravan = require('../card-images/caravan.jpg');

const userCampaigns = [
    {
        id: "curse-strahd",
        title: "Curse of Strahd",
        image: "/card-images/affroen and friends.jpg",
        description: "Scary vampire man does evil to whole civilisation."
    },
    {
        id: "homebrew",
        title: "Homebrew",
        image: "/card-images/talia in town.jpg",
        description: "I made up everything bc I'm a big nerd"
    },
    {
        id: "new-campaign",
        title: "New Campaign",
        image: "/card-images/cover.jpg",
        description: "I have so much stuff to write"
    }
]

const sessions = [
    {
        id: "hombrew",
        sessions: ["session1", "session2", "session3"]
    },
    {
        id: "curse-strahd",
        sessions: ["session1", "session2", "session3", "session4"]
    },
    {
        id: "new-campaign",
        sessions: []
    }
]

const UserCampaignsList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 25px; 
`

export const ClickContext = React.createContext({});

export default function ChooseCampaign () {
    const [show, setShow] = useState(false);
    const [displaySessionListId, setDisplaySessionListId] = useState("")
    const [isClicked, setIsClicked] = useState(false);
    const value = { isClicked, setIsClicked };
  
    function clickHandler(displayId){
        return function () {
            setDisplaySessionListId(displayId)
            setShow(!show)
            setIsClicked(!isClicked)
        }
    }

    return <div style={{backgroundSize: 'cover', backgroundImage: `url(${imgCaravan})`, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'fixed', top: 0, width: '100%', height: '100%', marginLeft: '-8px' }}>
        <ClickContext.Provider value={value} >
            <UserCampaignsList>
                {userCampaigns.map((val) => (<ChooseCampaignCard onClick={clickHandler(val.id)} key={val.id} id={val.id} image={val.image} title={val.title} description={val.description}/>))}
            </UserCampaignsList>
            <SessionCard sessionListId={displaySessionListId} id={sessions.id} image={userCampaigns.image} />
        </ClickContext.Provider>
    </div>
}