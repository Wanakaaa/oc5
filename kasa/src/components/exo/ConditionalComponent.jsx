import React from 'react'
import Welcome from './Welcome'
import Code1 from './Code1';

function ConditionalComponent() { 
    const display = true ;
    return display ? <Welcome /> : <Code1 />
}

export default ConditionalComponent