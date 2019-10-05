import React from 'react'
import styles from './Key.module.css'

const Key = (props) => {
    const color = props.color
    const pitch = props.pitch
    const classes = [styles.Key, styles[color], styles[pitch]].join(" ")
    return (
        <div className={classes} >
        </div >
    )

}

export default Key;