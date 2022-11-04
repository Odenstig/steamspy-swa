import React from 'react';
import styles from '../components/GamesList.module.css';

const GamesList = ({gamesList}) => {
    return (
        <div className={styles.box}>
            <div className={styles.main}>
                <h1>{/*INSERT GAME TITLE HERE*/}</h1>
            </div>
            <div className={styles.desc}>
                <h3>{/*INSERT DATA HERE - CREATE NEW h3 TAG FOR EACH ENTRY*/}</h3>
            </div>
        </div>
    )
}

export default GamesList