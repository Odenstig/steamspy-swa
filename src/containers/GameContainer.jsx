import React, { useEffect, useState, } from 'react';
import CurrentWeather from '../components/CurrentWeather';
import ForecastList from '../components/ForecastList';
import SearchForm from '../components/SearchForm';
import Header from '../components/Header';

const GameContainer = () => {
    const [gamesList, setGamesList] = useState({});
    const [loader, setLoaderState] = useState(true);

    let listSourceUrl = '';

    const GetData = async () => {
        setLoaderState(true);
        const apiResponseList = await fetchDataList();

    }

    const fetchDataList = async () =>{
        const res = await fetch(listSourceUrl)
        const data = await res.json();
        console.log(data);
        return data;
    }
    GetData();
    if(loader){
        return(<div>
            <h3>Loading list...</h3>
        </div>)
    }
    
    return(
        <>
        <div>
            
        </div>
        </>
    )
};

export default GameContainer;

