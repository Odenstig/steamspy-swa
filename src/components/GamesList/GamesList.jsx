import { findByLabelText } from '@testing-library/react'
import React from 'react'
import styles from './GamesList.module.css'

const GamesList = ({gamesList}) => {

    return (
        <>
            {/* <div className={styles.inner} style={{
                        backgroundImage: "url('https://steamcdn-a.akamaihd.net/steam/apps/placeholder/header.jpg')".replace('placeholder', gamesList[0].Value.appid),
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        height:'12.5rem',
                        width: '25rem',
                        margin: "1rem",
                        borderRadius: '25px'
                        }}>
                <h3>
                    {gamesList[0].Value.name}
                </h3>
                <h1>1</h1>
                <h2>
                    {gamesList[0].Value.name}
                </h2>
                <h3>
                    {gamesList[0].Value.ccu} Concurrent players
                </h3>
            </div> */}

            <div className={styles.box}>
                {console.log(gamesList)}
                {gamesList.map((games, index) => (
                    <>
                        <div key={index} className={styles.inner} style={{
                                
                                backgroundImage: "linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)), url('https://steamcdn-a.akamaihd.net/steam/apps/placeholder/header.jpg')".replace('placeholder', games.Value.appid),
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                height:'12.5rem',
                                width: '25rem',
                                margin: "1rem",
                                borderRadius: '25px'
                                }}>

                            <h1>{index + 1}</h1>
                            <h2>
                                {games.Value.name}
                            </h2>
                            <h3>
                                {games.Value.ccu} Concurrent players
                            </h3>
                        </div>
                    </>
                ))}
                

            </div>
        </>
    )

}

export default GamesList