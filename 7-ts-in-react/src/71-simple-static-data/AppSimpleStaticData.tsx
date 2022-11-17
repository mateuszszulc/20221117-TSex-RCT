import { userDataProvider } from './data/user-data.provider'
import { UsersPanel } from './users/UsersPanel'

export function AppSimpleStaticData() {
    return (
        <>
            <header className="hero is-primary mb-5">
                <div className="hero-body">
                    <p className="title">
                        <code>7.1</code> Simple static data
                    </p>
                </div>
            </header>
            <main className="container">
                <UsersPanel users={userDataProvider}/>
            </main>
        </>
    )
}
