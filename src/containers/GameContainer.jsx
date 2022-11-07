import React, { useEffect, useState, } from 'react';
import GamesList from '../components/GamesList';

const GameContainer = () => {

    const [gamesList, setGamesList] = useState([]);
    const [loader, setLoaderState] = useState(true);

    useEffect(() => {
        
        let Url = 'http://localhost:7071/api/GamesApi';
    

        const fetchDataList = async () =>{
            const res = await fetch(Url)
            const data = await res.json();

            const parsed = JSON.parse(data.json)
            
            return parsed;
        }

        const GetData = async () => {
            setLoaderState(true);

            const gamesListData = await fetchDataList();

            setGamesList(gamesListData)
            setLoaderState(false)
        }

        GetData();
    },[])

    


if(loader)
    return(
        <div>
            <h3>Loading..</h3>
        </div>
    )

return(
    <>
    <div>
        <GamesList gamesList = {gamesList}/>
    </div>
    </>
)

};

export default GameContainer