import { UsersPanel } from './users/UsersPanel'

export function AppUseStateAndHooks() {
    return (
        <>
            <header className="hero is-primary mb-5">
                <div className="hero-body">
                    <p className="title">
                        <code>7.2</code> Use State and Hooks
                    </p>
                </div>
            </header>
            <main className="container">
                <UsersPanel />
            </main>
        </>
    )
}
