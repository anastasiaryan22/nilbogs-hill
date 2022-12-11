

export default async function searchMonsters(userEntry, setMonstersCallback){
    var userPrompt = userEntry

    var userEntrySplit = userPrompt.split(' ');

    var joinedUserEntry = userEntrySplit.join('-');

    let response = await fetch("https://www.dnd5eapi.co/api/monsters/" + joinedUserEntry);

    let data = await response.json();

    console.log(data);

    setMonstersCallback(data);

}