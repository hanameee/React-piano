import React from "react";
import styles from "./Display.module.css";

const display = props => (
    <div className = {styles.Display}>
        {props.children}
    </div>
);

export default display;
