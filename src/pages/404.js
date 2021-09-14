import React from 'react'
import { Link } from 'gatsby'
import { Container, Title } from '@UI'

const wrapperStyles = {
	height: '100vh',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	textAlign: 'center',
}

const NotFoundPage = () => {
	return (
		<Container section wrapperSm style={wrapperStyles}>
			<Title>Page not found</Title>
			<p>The page you were looking for does not exist.</p>
			<Link to='/'>Return Home</Link>
		</Container>
	)
}

export default NotFoundPage
