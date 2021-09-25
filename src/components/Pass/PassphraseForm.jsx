import React from 'react'
import { useAuth } from '../Contexts/AuthContext'

function PassphraseForm() {
    const { setLogIn } = useAuth();
    const handleChange = (e) => {
        if (e.target.value === process.env.REACT_APP_PASS_CODE) {
            setLogIn(true)
        } else {
            setLogIn(false)
        }
    }
    return (
        <input type='text' onChange={handleChange} placeholder='Type secret code' />
    )
}
export default PassphraseForm;