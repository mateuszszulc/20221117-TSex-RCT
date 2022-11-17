import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faKey, faSignInAlt, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';

import { logInUser, logOutUser, selectIsAuth, selectUser } from './userSlice';

export function LogInSite() {
	  const [email, setEmail] = useState('')
	  const [password, setPassword] = useState('')

		const isAuth = useSelector(selectIsAuth)
		const user = useSelector(selectUser)
		const dispatch = useDispatch()

		const handleSubmit = (ev) => {
			ev.preventDefault();
			if(!email) {
				return
			}
			dispatch(logInUser(email))
			handleResetForm();
		}

		const handleResetForm = () => {
			setEmail('')
			setPassword('')
		};

		if(isAuth) {
			return (
				<div>
					<h4>Logged in as: {user.name} {user.email}</h4>
					<button className="btn btn-secondary" onClick={() => dispatch(logOutUser()) }>Logout</button>
				</div>
			)
		}
		return (
			<div>
				<h2>Login to service</h2>
				<section className="mt-5 d-flex justify-content-center">
					<form onSubmit={handleSubmit}>
						<div className="form-group">

							<label htmlFor="email" className="form-label">E-mail address</label>
							<div className="input-group mb-3">
								<span className="input-group-text">
									<FontAwesomeIcon icon={faEnvelope} />
								</span>
								<input
									id="email"
									type="text"
									name="email"
									className="form-control"
									onChange={(ev) => setEmail(ev.target.value)}
									value={email}
								/>
							</div>
						</div>
						<div className="form-group">
							<label htmlFor="password" className="form-label">Password</label>
							<div className="input-group mb-3">
								<span className="input-group-text">
									<FontAwesomeIcon icon={faKey} />
								</span>
								<input
									id="password"
									type="password"
									name="password"
									className="form-control"
									onChange={(ev) => setPassword(ev.target.value)}
									value={password}
								/>
							</div>
						</div>
						<div className="d-flex justify-content-between">
							<button onClick={handleResetForm} className="btn btn-danger" type="button">
								<FontAwesomeIcon icon={faTrash} /> Reset
							</button>
							<button className="btn btn-primary" type="submit">
								<FontAwesomeIcon icon={faSignInAlt} /> Login
							</button>
						</div>
					</form>
				</section>
			</div>
		)
}
