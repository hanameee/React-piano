import React from 'react';
import Octave from './Octave/Octave'
import styles from './Keyboard.module.css'
const keyBoard = (props) => {
    return (
        <div className={styles.Keyboard}>
            <Octave />
            <Octave />
        </div>
    )
}

export default keyBoard;