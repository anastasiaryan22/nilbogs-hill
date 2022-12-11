import ChooseRelevantMonstersCard from "../components/ChooseRelevantMonstersCard"
import PickMonsterCard from "../components/PickMonsterCard";

const imgCaravan = require('../card-images/caravan.jpg');






export default function ChooseRelevantMonsters(){
    return <div style={{backgroundSize: 'cover', backgroundImage: `url(${imgCaravan})`, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'fixed', top: 0, width: '100%', height: '100%', marginLeft: '-8px' }}>
        <ChooseRelevantMonstersCard></ChooseRelevantMonstersCard>
        <PickMonsterCard></PickMonsterCard>

    </div>
};