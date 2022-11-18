import { useContext } from 'react'
import UserContext from '../context/UserContext'

export function LogInButton() {

    // @ts-ignore
    const { logIn, isAuth } = useContext(UserContext)

    return (
        <div className="is-flex is-justify-content-center">
            {
                !isAuth ?
                    <button className="button is-info" onClick={() => logIn()}> 🔑 Login </button>
                    :
                    null
            }
        </div>
    )
}
