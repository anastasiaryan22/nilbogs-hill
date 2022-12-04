import DevelopFantasticLocationsCard from "../components/DevelopFantasticLocationsCard"

const imgCaravan = require('../card-images/caravan.jpg');


export default function DevelopFantasticLocations(){
    return <div style={{backgroundSize: 'cover', backgroundImage: `url(${imgCaravan})`, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'fixed', top: 0, width: '100%', height: '100%', marginLeft: '-8px' }}>
    {(<DevelopFantasticLocationsCard></DevelopFantasticLocationsCard>)}
    </div>
};