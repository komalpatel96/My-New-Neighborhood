import React from 'react';

const Header = props => {
	let Greeting
	if (props.user === null) {
		Greeting = <p>Logged in as Guest</p>
	} else if (props.user.email) {
		Greeting = (
			<p>
				Logged in as <strong>{props.user.email}</strong>
			</p>
		)
	} else if (props.user.local.email) {
		Greeting = (
			<p>
				Logged in as <strong>{props.user.local.email} </strong>
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