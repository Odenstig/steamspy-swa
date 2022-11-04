import React from 'react'
import styles from './GamesList.module.css'

const GamesList = ({gamesList}) => {
    
    

    return (
        <div className={styles.box}>
            {console.log(gamesList)}
            {gamesList.map((games, index) => (
                <div key={index}>
                    <h3>{index + 1}</h3>
                    <h3>
                        {games.Value.name}
                    </h3>
                    <h3>
                        {games.Value.ccu}
                    </h3>
                </div>
            ))}
            

        </div>
    )

}

export default GamesList