import React from 'react';

const Header = props => {
	let Greeting
	if (props.user === null) {
		Greeting = <p className="guest">Welcome, Guest</p>
	} else if (props.user.username) {
		Greeting = (
			<p>
				Logged in as <strong>{props.user.username}</strong>
			</p>
		)
	} else if (props.user.local.username) {
		Greeting = (
			<p>
				Logged in as <strong>{props.user.local.username} </strong>
			</p>
		)
	}
	return (
		<div className="home-button">
			{Greeting}
		</div>
	)
}

export default Header