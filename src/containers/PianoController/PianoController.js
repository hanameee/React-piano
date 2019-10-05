import React, {Component} from 'react';
import Piano from '../../components/Piano/Piano'
import styles from './PianoController.module.css'
class PianoController extends Component {
    state = {

    };

    render() {
        return (
            <div className = {styles.PianoController}>
                <h1>This is PianoController</h1>
                <Piano/>
            </div>
        );
    }
}

export default PianoController