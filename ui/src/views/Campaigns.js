import styled from "styled-components"
import CampaignCard from "../components/CampaignCard"



export const campaigns = [
    {
        title: "Review Party Characters",
        image: "/card-images/affroen and friends.jpg",
        hover: ["• Write down the name, background, and motivations of all the characters.", <br />, "• Review these character notes to prime your mind before the rest of your preparation.", <br />,"• Use this character review to help you tie the characters to the rest of your game.", <br />,"• Test yourself to see if you can remember the name of the characters.", <br />, <br />, <br />, <br />, <br />],
        linkto: "/ReviewPartyCharacters"
    },
    {
        title: "Choose Relevant Monsters",
        image: "/card-images/Untitled_Artwork.jpeg",
        hover: ["• Choose monsters that make sense for the sotry, situation, and location.", <br />, "• Read monster books to prime your brain with new ideas and information for imporvisation.", <br />, "• Keep a loose guage of monster difficulty and character levels in mind.", <br />, "• Improvise encounters based on the sotry and situation during the game.", <br />, "• Spend time building boss fights that account for character capabilities without negating those capabilites - or instead, let boss fights play out like other encounters."],
        linkto: "/ChooseRelevantMonsters"
    },
    {
        title: "Outline Important NPCs",
        image: "/card-images/talia in town.jpg",
        hover: ["• You're likely to prepare some NPCs ahead of time and improvise others during the game.", <br />, "• NPCs you prepare will primarily be those that drive the game session and the adventure.", <br />, "• Keep your NPC outline brief: a name, a connection to the adventure, and a character archetype from popular fiction is often enough.", <br />, <br />, <br />, <br />, <br />],
        linkto: "/OutlineNPC"
    },
    {
        title: "Select Magic Item Rewards",
        image: "",
        hover: ["• Players love magic items. It's worth you time to consider magic items during prep.", "• When it fits the story, select an interesting item for one of the characters and plan to drop it into the game.", <br />, "• You might also randomly select magic items to drop into the game.", <br />, "• Tie magic items to the story, either by using them as the focus of a quest or as a connection to a secret or clue.", <br />, <br />, <br />, <br />],
        linkto: ""
    }, 
    {
        title: "Develop Fantastic Locations",
        image: "/card-images/Illustration 5 (1).jpg",
        hover: ["• Write down an evocative name for the location.", <br />, "• Write down three fantastic aspects of the location.", <br />, "• Plan on using one or two locations per hour of the play.", <br />, "• Make locations fantastic using age and size.", <br />, "• Tie some locations to the backgrounds of the characters.", <br />, "• Draw stick-figure dungeon maps with names connected by the lines.", <br />, <br />, <br />],
        linkto: ""
    },
    {
        title: "Outline Potential Scenes",
        image: "/card-images/cover.jpg",
        hover: ["• Write down a short list of scenes that might occur in your game.", <br />, "• Remember that the goal of writing down scenes i primarily to help you feel prepared.", <br />, "• Scenes can occur in or out of sequence.", <br />, "• Write only as much as you need to remind yourself what might happen.", <br />,"• Don't fall in love with your scenes. Be prepared to throw them away.", <br />, <br />, <br />, <br />,],
        linkto: ""
    },
    {
        title: "Create a Strong Start",
        image: "/card-images/caravan.jpg",
        hover: ["• What's happening? What event will frame the start of this section of the adventure?", <br />, "• What's the point? What seed or hook will lead the characters furthre into the adventure?", <br />, "• Where's the action? Start as close to the action as you can.", <br />, "• When in doubt, start with combat.", <br />, <br />, <br />, <br />, <br />, <br />],
        linkto: ""
    },
    {
        title: "Define Secrets and Clues",
        image: "/card-images/lonerock.jpg",
        hover: ["• Write down ten secrets and clues that the character might discover in the next game session.", <br />, "• Secrets and clues are the connective issue of a campaign.", <br />, "• Each secret or clue reveals a piece of the story or the history of the world and its inhabitants.", <br />, "• Keep secrets and clues abstract from how they might be revealed. Improvise the discovery of secrets during the game.", <br />, <br />, <br />],
        linkto: ""
    }

  ]

const CampaignsList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 25px
`

export default function Campaigns() {
    return <CampaignsList>
        {campaigns.map((val) => (<CampaignCard key={val.title} image={val.image} title={val.title} hover={val.hover} linkto={val.linkto}></CampaignCard>))}
    </CampaignsList>
}