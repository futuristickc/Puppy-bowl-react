const cohortName = '2211-FTB-ET-WEB-FT';
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;


export const fetchAllPlayers = async () => {
    try {
        const response = await fetch(`${APIURL}/players`);
        const result = await response.json();
        if (result.error) {
            throw result.error;
        }
        console.log(result.data.players);
        return result.data.players;
    } catch (error) {
        console.error('Uh oh, trouble fetching players!', error);
    }
};

export const fetchSinglePlayer = async (playerId) => {
    try {
        const response = await fetch(`${APIURL}/players/${playerId}`);
        const result = await response.json();
        console.dir(result);
        if (result.error) {
            throw result.error;
        }
        console.log(result.data.player);
        return result.data.player;
    } catch (error) {
        console.error('Uh oh, trouble fetching players!', error);
    }
};

export const addNewPlayer = async (playerObj) => {

    try {
        const response = await fetch(`${APIURL}/players`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(playerObj),
        });
        const result = await response.json();
        if (result.error) throw result.error;
        return result.data.player;
    } catch (err) {
        console.error('Oops, something went wrong with adding that player!', err);
    }
};

export const removePlayer = async (playerId) => {

    try {
        const response = await fetch(`${APIURL}/players`, {
            method: 'DELETE',

        });
        const result = await response.json();
        if (result.error) throw result.error;
        return result.data.player;
    } catch (err) {
        console.error(`Whoops, trouble removing player #${playerId} from the roster!`, err);
    }
};