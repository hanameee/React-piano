import React from 'react';
import Display from './Display/Display'
import Keyboard from './Keyboard/Keyboard'
import styles from './Piano.module.css'
const piano = (props) => {
    return (
        <div className = {styles.Piano}>
            <Display>Cm</Display>
            <Keyboard/>
        </div>
    )
}

export default piano;