import React from 'react'
import Key from './Key/Key'

const Octave = (props) => {
    return (
        <React.Fragment>
            <Key color="White" pitch="C" />
            <Key color="Black" pitch="C-sharp" />
            <Key color="White" pitch="D" />
            <Key color="Black" pitch="D-sharp" />
            <Key color="White" pitch='E' />
            <Key color="White" pitch="F" />
            <Key color="Black" pitch="F-sharp" />
            <Key color="White" pitch="G" />
            <Key color="Black" pitch="G-sharp" />
            <Key color="White" pitch="A" />
            <Key color="Black" pitch="A-sharp" />
            <Key color="White" pitch="B" />
        </React.Fragment>
    )
}

export default Octave;