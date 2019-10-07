import React from 'react'
import Key from './Key/Key'
import styles from './Octave.module.css'

const Octave = (props) => {
    return (
        <div className={styles.Octave}>
            <div className={styles.White}>
                <Key color="White" pitch="C" />
                <Key color="White" pitch="D" />
                <Key color="White" pitch='E' />
                <Key color="White" pitch="F" />
                <Key color="White" pitch="G" />
                <Key color="White" pitch="A" />
                <Key color="White" pitch="B" />
            </div>
            <div className={styles.Black}>
                <Key color="Black" pitch="C-sharp" />
                <Key color="Black" pitch="D-sharp" />
                <Key color="Black" pitch="F-sharp" />
                <Key color="Black" pitch="G-sharp" />
                <Key color="Black" pitch="A-sharp" />
            </div>
        </div>
    )
}

export default Octave;