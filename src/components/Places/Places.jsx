import React from 'react'
import withData from '../withData/withData'
function Places(props) {
    return (
        <>
            <h1>This is Places Page</h1>
            <div>Hello {props.name} {props.admin ? 'you are admin ! thats great' : 'your access is limited, you are not the administrator'}</div>
            <p>if you have some problem, please contact support: {props.email}</p>
        </>
    )
}

export default withData(Places)
