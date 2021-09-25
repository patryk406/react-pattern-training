import React from 'react'
import { UserContext } from '../Contexts/UserContext'
function withData(Component) {
    return function UpdatedComponent(props) {
        return (
            <UserContext.Consumer>
                {contexts => <Component {...props} {...contexts} />}
            </UserContext.Consumer>
        )
    }
}
export default withData