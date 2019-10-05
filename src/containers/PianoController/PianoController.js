import React, { Component, Fragment } from "react";
import Piano from "../../components/Piano/Piano";
import Cockpit from "../../components/Cockpit/Cockpit";
import styles from "./PianoController.module.css";
class PianoController extends Component {
    state = {};

    render() {
        return (
            <div className={styles.PianoController}>
                <h1>This is PianoController</h1>
                <Cockpit />
                <Piano />
            </div>
        );
    }
}

export default PianoController;
