import React from 'react'
import { LogInButton } from './components/LogInButton'
import TopBar from './components/TopBar'
import { CurrentUserProvider } from './context/UserContext'

export function AppContextCommunication() {

	return (
		<CurrentUserProvider>
			<div>
				<header className="hero is-primary mb-5">
					<div className="hero-body">
						<p className="title">
							<code>7.5</code> Context API
						</p>
					</div>
				</header>
				<main className="container">
					<TopBar title="Hello in user app" />
					<LogInButton />
				</main>
			</div>
		</CurrentUserProvider>
	)
}
