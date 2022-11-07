import { findByLabelText } from '@testing-library/react'
import React from 'react'
import styles from './GamesList.module.css'

const GamesList = ({gamesList}) => {

    return (
        <div className={styles.big}>
            <div onClick={(e) => {
                    e.preventDefault();
                    window.location.href='https://store.steampowered.com/app/placeholder/'.replace('placeholder', gamesList[0].Value.appid);
                    }}
                    className={styles.inner}
                    style={{
                    backgroundImage: "linear-gradient(to bottom, rgb(102, 192, 244, 0.1), rgba(23, 26, 33, 0.90)), url('https://steamcdn-a.akamaihd.net/steam/apps/placeholder/header.jpg')".replace('placeholder', gamesList[0].Value.appid),
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height:'12rem',
                    width: '30em',
                    marginBottom: "1rem",
                    borderRadius: '25px'
                    }}>
                <div>
                    <h1>1</h1>
                    <h2>
                        {gamesList[0].Value.name}
                    </h2>
                    <h3 className={styles.ccumain}>
                        {gamesList[0].Value.ccu} Concurrent players
                    </h3>
                </div>
            </div>

            <div className={styles.box}>
                {console.log(gamesList)}
                {(gamesList.slice(1)).map((games, index) => (
                    <>
                        <div key={index} type='button' onClick={(e) => {
                                e.preventDefault();
                                window.location.href='https://store.steampowered.com/app/placeholder/'.replace('placeholder', games.Value.appid);
                                }} 
                                className={styles.inner} 
                                style={{
                                backgroundImage: "linear-gradient(to bottom, rgb(102, 192, 244, 0.1), rgba(23, 26, 33, 0.90)), url('https://steamcdn-a.akamaihd.net/steam/apps/placeholder/header.jpg')".replace('placeholder', games.Value.appid),
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                height:'12rem',
                                width: '22rem',
                                margin: "0.5rem",
                                borderRadius: '25px'
                                }}>

                            <h1>{index + 2}</h1>
                            <h2>
                                {games.Value.name}
                            </h2>
                            <h3 className={styles.ccu}>
                                {games.Value.ccu} Concurrent players
                            </h3>
                        </div>
                    </>
                ))}
                

            </div>
        </div>
    )

}

export default GamesList