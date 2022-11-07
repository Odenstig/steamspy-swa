import React from 'react'
import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.box}>
            <h3 className={styles.title}>
                Top 10 Steam Games!
            </h3>
        </div>
    )
}

export default Header